---
title: Composing traversals
layout: post
authors: [psi]
code: true
tags: [haskell, notebook]
description: A solution to a simple multi-way tree problem involving traversals
---

*This post assumes basic knowledge on Haskell, including what `Functor` and `Monad` are.*

# The problem

A few months ago, I was at a functional programming conference where the following problem[^problem] was posed at a talk

> Given a container `Tree`,
> write a function `update :: Tree a -> [a] -> Maybe (Tree a)` that,
> when called as `update t as`, updates the leaves of `t` by the
> new tags in `as` (listed in preorder).
>
> If there are not enough elements on `as`, just return `Nothing`

[^problem]: That was not the exact statement; the point of the talk was to show how to use dependent types to statically avoid the possibility of not having the correct number of tags on the list, but this version is better suited for the purpose of this post. It also used binary trees while we will use multi-way trees.

This post attempts to explain a concise solution to that problem.
You might want to try it on your own at first and then come back and read my solution.
If you think your solution is better, please send it to me!

We will need the following modules:

```haskell
import Data.Tree
import Control.Monad.State
import Data.Maybe
import Data.Functor.Compose
```

# Multi-way `Tree`s

In order to solve the problem, we will make use of multi-way trees, also known as *rose trees*, which are defined as

```haskell
data Tree a = Node a [Tree a]
```

That is, a `Tree` is made from the value of the root node (of type `a`) and a (possibly empty) list of children trees.
To warm-up we will need a simple function[^pure] that creates a singleton tree from a value.

```haskell
singleton :: a -> Tree a
singleton x = Node x []
```

[^pure]: The `Data.Tree` module already includes such function on the `Applicative` instance (i.e., the `pure` function), but I think that makes the code slightly more confusing (since `Tree`'s behavior as an `Applicative` is far from trivial).

That was easy! Now, to simplify the problem a little, let's first try writing an
```haskell
unsafeUpdate :: Tree a -> [a] -> Tree a
```
function. If you don't know how to approach this problem, you can think of it on imperative terms.

The following is a plausible solution on Python, assuming some tree type with methods `tag` and `children` and a predicate `isLeaf` that tells you whether a tree is a leaf.

```python
def unsafeUpdate(t, as):
  if isLeaf(t):
    t.tag = as.pop(0)
  else:
    for child in t.children:
      unsafeUpdate(t,as)
```

As we shall see, the solution present in this post is strikingly similar in appearance to that one, yet it remains purely functional. Of course, other possibilities exist, yet I believe this one is concise, efficient and it is easily transformed into a safe version.

# Purely functional `State`

This section introduces the `State` monad.
If you already know about it, you may skip it.

The `Control.Monad.State` module can be scary-looking at first, yet we will make simple use of it.
It defines a monad[^MonadState] `State`, that can be thought of as having this definition:

[^MonadState]: Well, technically a class of monads, so as to allow for the use of "monad transformers", but we will not make use of transformers on this post.

```haskell
newtype State s a = State {runState :: s -> (a,s) }
```

A value `m :: State s a` encapsulates a transformation that makes use of a state `s`, it (possibly) transforms it and obtains a value of type `a`.
For example, a function from [`System.Random`](https://hackage.haskell.org/package/random/docs/System-Random.html) such as [`random`](https://hackage.haskell.org/package/random/docs/System-Random.html#v:random) `:: StdGen -> (a, StdGen)` could be encapsulated inside a `randomState :: State StdGen a` value that produces a random value and has as an internal state the seed of type `StdGen`.

By encapsulating state transformations in this way, we can remain pure while simulating computations that use some sort of state.

Unsurprisingly, for any possible type `s`, `State s` is a functor, with mapping given by
```haskell
f <$> m = State $ \s -> let (a,s) = runState m s in (f a, s)
```
That is, we run the state modifying computation `m` and then apply `f` to its result, leaving the state unchanged.

It also is an `Applicative` and a `Monad`.
For simplicity, we only show the definitions of `pure` and `>>=`, leaving `<*>` as an exercise[^return].

[^return]: Although at present time it might be more beginner-friendly to restrict the talk to Monads and use `return` instead of `pure`, the ["Monad of no return"](https://gitlab.haskell.org/ghc/ghc/wikis/proposal/monad-of-no-return) proposal seems likely to be accepted, thus in the long term sticking to `pure` is the right choice. `return` is also discouraged in other Haskell-inspired languages such as Idris.


`pure x` is the computation that returns `x`, leaving the state unchanged.
```haskell
pure x = State $ \s -> (x,s)
```

The bind operator is a bit more complicated; on this setting its type would be
```haskell
>>= :: State s a -> (a -> State s b) -> State s b
```
that is, it takes a computation that would produce a value of type `a`, runs it and applies the given function.

Its definition is equivalent to
```haskell
m >>= f = State $ \s ->
  let (a, s') = runState m s
  in runState (f a) s'
```

State also defines a set of functions that allow us to get and manipulate the internal state, and to get the final value of the computation.
We will use (with simplified type signatures):

- `get`, that gets the state,
  ```haskell
  get :: State s s
  get = State $ \s -> (s,s)
  ```
- `modify`, that applies a function to the internal state,
  ```haskell
  modify :: (s -> s) -> State s ()
  modify f = State $ \s -> ((), f s)
  ```
- `evalState`, that gets the final value of the computation,
  ```haskell
  evalState :: State s a -> s -> a
  evalState = fst . runState
  ```

If you feel like you need further examples on `State` before moving on, you can check the [Wikibooks tutorial](https://en.wikibooks.org/wiki/Haskell/Understanding_monads/State).

# The base case

We are now ready to write a skeleton of the `unsafeUpdate` function, and to write a the base case.

As you might expect, the idea is to write it in terms of a function using `State`.
The internal state will be the list of remaining new leaves, and thus we want to write a function with type

```haskell
unsafeUpdateSt :: Tree a -> State [a] (Tree a)
```

By using what we learned in the last section, we could then write:
```haskell
unsafeUpdate = evalState . unsafeUpdateSt
```

But let's not get ahead of ourselves.
If we look at the base case on the Python version we want to simulate the line `t.tag = as.pop(0)`, that is, extracting the first value of the `as` list and returning it.

Let's try and write a version of `pop` (named `unsafePop`) using the `State` monad.
What would its type be?
We don't really need to specify the index here, since we will only take the first element, hence, it is just a `State` value.
The internal state would be the list of tags `[a]` and the result of the computation would be the first element of the list, with type `a`. Therefore:
```haskell
unsafePop :: State [a] a
```

Now, using `do` notation we can write the function easily: we first get the internal state, then we delete the first element from it and lastly we return this element:

```haskell
unsafePop = do
  xs <- get
  modify tail
  pure (head xs)
```
That almost looks like imperative code!

Now, for tackling the base case, we just need to get a `State [a] (Tree a)` from that `State [a] a` value, therefore:

```haskell
unsafeUpdateSt (Node _ []) = singleton <$> unsafePop
```

The inductive case will need further machinery.

# List traversals

If we look at the Python code, we can see that the gist of the inductive case is to apply the function `unsafeUpdateSt` recursively to the list of children,

```haskell
for child in t.children:
  unsafeUpdate(t,as)
```
and pass the list of remaining new tags around.

Of course, there are no for loops on Haskell, (at least not exactly) so we need to resort to (implicit) recursion.
Now, the usual way to apply a function to a list is by treating the list as a functor and using the `map` function, whose definition (with `:` written in prefix notation) is
```haskell
map :: (a -> b) -> [a] -> [b]
map _     []  = []
map f  (x:xs) = (:) (f x) (map f xs)
```
yet in this case or function `unsafeUpdateSt :: Tree a -> State [a] (Tree a)` has a type that looks more like `a -> f b` for a certain container `f` (namely, `State [a]`) and thus `map` is not useful in this situation[^mapm]. A generalization is needed.

[^mapm]:  If you have used monads (specially if you did so before the [Burning Bridges proposal](https://gitlab.haskell.org/ghc/ghc/wikis/prelude710) of GHC 7.10 was put in place) it is likely that you have met with `mapM`. Although `mapM` can be used for defining `unsafeUpdateSt`, it will not be applicable (directly) in the safe version of update, because of the `Monad` restriction. Furthermore, I believe it should be discouraged in favor of `traverse`, since in current versions of GHC `mapM` is just `traverse` with a restricted type.

The `Traversable` class provides just that generalization (and much more).
We will use it only on lists, but it can be used on any `Functor` that supports an iterator-like interface (for example, most data structures on the `containers` library). Its type (specialized to lists) is
```haskell
traverse :: (Applicative f) => (a -> f b) -> [a] -> f [b]
```
Its definition[^traverse] is pretty straightforward, namely,
```haskell
traverse -     [] = pure []
traverse f (x:xs) = (:) <$> f x <*> traverse f xs
```
which (excluding the use of `<*>` and `<$>`) looks very much like the `map` definition.
It is a generalization since we can use the `Identity` functor to get back
```haskell
map f = runIdentity . traverse (Identity . f)
```

[^traverse]: One should use `foldr` here and [that is what the Prelude does](https://hackage.haskell.org/package/base-4.12.0.0/docs/src/Data.Traversable.html#line-237) but for didactic purposes I chose this definition.

Using this function we can apply `unsafeUpdateSt` recursively to the list of children and then reconstruct the tree by mapping the `Node` function appropriately. That is,
```haskell
unsafeUpdateSt (Node x children) = Node x <$> traverse unsafeUpdateSt children
```

This feels very similar to the imperative code! In fact, the `Data.Traversable` module defines `for = flip traversable` so we could define
```haskell
unsafeUpdateSt (Node x children) = Node x <$> for children unsafeUpdateSt
```

So, to recall, we can define `unsafeUpdate` in terms of `unsafePop` as:

```haskell
unsafeUpdateSt :: Tree a -> State [a] (Tree a)
unsafeUpdateSt (Node _ []) = singleton <$> unsafePop
unsafeUpdateSt (Node x children) = Node x <$> traverse unsafeUpdateSt children

unsafeUpdate :: Tree a -> [a] -> Tree a
unsafeUpdate = evalState . unsafeUpdateSt
```

Now on to the actual problem!

# Composing functors

The [`Data.Functor.Compose` module](https://hackage.haskell.org/package/transformers-0.3.0.0/docs/Data-Functor-Compose.html) defines the `Compose` newtype,
```haskell
newtype Compose f g a = Compose { getCompose :: f (g a) }
```

This type allows us to compose two type constructors (with kind `f, g :: Type -> Type`) into a new one.

The interesting feature that `Compose` allows is to define instances for `Functor`, `Applicative` or `Traversable` for the composition of two `Functor`s/`Applicative`s/`Traversable`s.

As an example, suppose `f, g :: Type -> Type` are both functors.
Then `Compose f g` is also a functor, where the `fmap` is given by
```haskell
fmap :: (a -> b) -> Compose f g a -> Compose f g b
fmap f (Compose x) = Compose (fmap (fmap f) x)
```
where the first `fmap` is the one for `f` and the second the one for `g`.

Similar instances can be defined for `Applicative` and `Traversable` (check [the source code](https://hackage.haskell.org/package/transformers-0.3.0.0/docs/src/Data-Functor-Compose.html#Compose) if you are curious!).


How can we take advantage of `Compose` for our problem?
Let's start by refining the pop function.
Recall from the previous sections that we defined a function `unsafePop :: State [a] a`.

The problem with this function is that it is unsafe: if the state is the empty list, the function will throw an error.
To solve this, we change the type to `State [a] (Maybe a)`, returning `Nothing` if there are no remaining elements in the list.

We wrap it up with the `Compose` constructor, having
```haskell
pop :: Compose (State [a]) Maybe a
pop = Compose $ do
  xs <- get
  modify' (drop 1)
  pure (listToMaybe xs)
```

Now, our `unsafeUpdateSt` function can be used *as is* for the safe version of the function.
We only need to replace the `unsafePop` function by `pop`:
```haskell
updateSt :: Tree a -> Compose (State [a]) Maybe (Tree a)
updateSt (Node _ []) = singleton <$> pop
updateSt (Node x children) = Node x <$> traverse updateSt children
```
Notice that both `<$>` and `traverse` here are using the instance of `Functor` and `Traversable` for the type `Compose (State [a]) Maybe`.

Finally, the solution to our problem will be to unwrap the one provided by `updateSt`.
```haskell
update :: Tree a -> [a] -> Maybe (Tree a)
update = evalState . getCompose . updateSt
```

As you can see, once we had the unsafe version, creating the safe one was just a matter of updating the `pop` function appropriately and dealing with the wrapping and unwrapping of `Compose`.

# Conclusions

In this post we have seen a possible solution to a problem dealing with trees using Haskell.

The use of `Compose`, `Traversable` and `Functor` allowed us to translate an imperative-looking solution into purely functional code, producing a concise yet complete solution.
Furthermore, the solution could be built step-by-step, by considering a simplified problem first.

This might not be the best most efficient solution for this problem[^lazy], but it is an excellent way to present such type-classes' usefulness.

As I said at the beginning, any improvements or alternative solutions are welcome. Until next time!

[^lazy]: In particular, although I have not checked it, it seems likely that you would need to deal with laziness to avoid a space leak.
