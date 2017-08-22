---
layout: post
title: La paradoja de San Petersburgo
authors: [psi]
tags: [matemáticas]
math: true
description: Una explicación interactiva de la paradoja de San Petersburgo
---

<div>
<div class="message">
	Este post contiene algunos elementos con los que puedes <span class="interactive">interaccionar</span>. Si
	haces click o modificas su valor el texto se actualizará para reflejar tu elección.
	<noscript>Necesitas <a href="http://www.enable-javascript.com" target="_blank">activar Javascript</a> para poder interaccionar.</noscript>
</div>
</div>

Imagina que te ofrecen participar en una lotería. Consta de 100 billetes y el precio de una participación es de 10€.
De los 100 billetes <input type="number" value="10" id="prized-input" min="0" max="100" autofocus>
tienen un premio de 40€
mientras que los <span class="not-prized"></span> restantes no tienen premio.

| Desenlace  | Con premio     | Sin premio     |
|--------|-------|-------|
| Proporción   | <span class="prized">10</span> de 100 | <span class="not-prized">90</span> de 100 |
| Premio | 40€    | 0€     |

¿Participarías en esta lotería? La teoría de la decisión intenta responder a esta y otras preguntas con el principio de la utilidad esperada. Para poder responder a la pregunta vamos a asumir una serie de premisas:

<span id="premisas"></span>

1. Preferimos más dinero a menos
2. Valoramos cada euro de la misma forma; la diferencia en valor entre 10 y 11 € es la misma que entre 1M€ y 1M + 1€. (Si $u$ es la función (función de utilidad) que a cada cantidad de euros le otorga su valor estamos diciendo que $u$ es lineal)
3. Tenemos certeza de que no nos están engañando: el sorteo es justo y nos darán el premio completo

Bajo estas premisas la teoría de la decisión nos indica que [debemos calcular](http://reducing-suffering.org/why-maximize-expected-value/) el valor esperado de la lotería: *¿Cuánto valor (dinero) recibiremos de media si jugamos un número suficientemente grande de veces?*. Como hay <span class="prized"></span> billetes premiados podemos esperar que en un <span class="prized"></span>% de los casos recibiremos el premio mientras que en el <span class="not-prized"></span>% restante no recibiremos nada.[^utilidad] Por tanto de media recibiremos:

[^utilidad]: Podemos justificar esta afirmación utilizando la [ley de los grandes números](https://en.wikipedia.org/wiki/Law_of_large_numbers). También existen teoremas de representación que justifican utilizar la utilidad esperada como fórmula de decisión si nuestras preferencias siguen unas ciertas restricciones, siendo el más notable el teorema de [von Neumann - Morgenstern](https://en.m.wikipedia.org/wiki/Von_Neumann%E2%80%93Morgenstern_utility_theorem) pero la apuesta de la que trata este artículo no sigue esos axiomas. Puedes leer más en [este artículo de SEP](https://plato.stanford.edu/entries/rationality-normative-utility/#RepThe).

<div id="expected-formula" style="height:4rem;">
  $$\frac{10}{100}\cdot 40 + \frac{90}{100} \cdot 0 = 4\unicode{0x20AC}$$
</div>

Con esta información podemos tomar una decisión: si cada participación cuesta 10€ <strong><span id="outcome">outcome</span></strong> cada vez que juguemos, por lo que <span id="decision">decision</span> participar en la lotería.

En general si tenemos $n$ desenlaces alternativos $D_1, \dots, D_n$ a una posible acción, $P(D_k)$ es la probabilidad de que resulte el desenlace $k$ y $u(D_k)$ es el valor ($u$tilidad) del desenlace $k$ el **valor esperado** de esa acción será:[^valor]

$$P(D_1)u(D_1) + P(D_2)u(D_2) + \dots + P(D_n)u(D_n)$$

[^valor]: Si tomamos la acción como una variable aleatoria discreta $X$ esto es simplemente $E[u(X)]$ (el [valor esperado](https://en.wikipedia.org/wiki/Expected_value) de $u(X)$).

# La paradoja

La utilidad esperada es utilizada casi universalmente como criterio de decisión cuando conocemos la probabilidad de cada uno de los posibles resultados de nuestras decisiones pero a lo largo de los años se han construido algunos ejemplos[^casi] con resultados paradójicos. Uno de ellos es conocido como *paradoja de San Petersburgo*:

[^casi]: Este artículo se centra en los problemas de la utilidad esperada infinita o no definida. Puedes encontrar otros problemas que presenta la utilidad esperada como criterio de decisión en el [artículo de SEP](https://plato.stanford.edu/entries/rationality-normative-utility/#CouExpUtiThe).

Apuesta de San Petersburgo *(original)*
: Lanza una moneda justa hasta que salga cruz. Por la primera cara recibes 2€ y por cada cara sucesiva recibes el doble que por la anterior (es decir, dos caras tendrá una recompensa de 4€, tres de 8€...)

| # caras  | 1  | 2  | 3  | 4 | ...|
|--------|-------|-------|----|---|
| Probabilidad   | 1/2 | 1/4 | 1/8 | 1/16 | ...|
| Premio | 2€    | 4€     | 8€ | 16€ | ...|

¿Aceptarías esta apuesta si el precio para jugarlo son 10€? ¿y si son 100€? ¿10.000€? La teoría de la decisión nos dice que deberíamos aceptar esos precios si no exceden el valor esperado de la apuesta. Esta acción tiene infinitos posibles desenlaces: cualquier cantidad de caras que podamos imaginar es un posible resultado. En concreto, la probabilidad de que salgan $n$ caras es:

$$P(C_1 \wedge \cdots \wedge C_n) = P(C_1)\cdots P(C_n) =\frac{1}{2}\cdots\frac{1}{2} =  \frac{1}{2^n}$$

Además, como cada recompensa es el doble que la anterior $u(C_n) = 2^n$. Es decir, el valor esperado será (en este caso con infinitos sumandos):

$$\frac122\;+\;\frac144\;+\;\dots\;+\;\frac{1}{2^n}2^n\;+\;\dots = \infty$$

Es decir, llegamos a la conclusión de que ¡deberíamos estar dispuestos a pagar cualquier precio por poder pagar el juego! Este resultado parece contraintuitivo por tres razones.

1. Parece tener poco sentido apostar todo nuestro dinero a una sola apuesta. Hay apuestas prometedoras en las que podría tener sentido invertir una gran cantidad de dinero pero ¿no debería haber un límite?

2. Daría igual si las recompensas fuera 2M€, 4M€, 8M€, ... o 2¢, 4¢, 8¢, ... o si la moneda estuviera sesgada de tal manera que en el 99% de los casos siempre saliera cara: el valor esperado en cualquiera de los casos es el mismo (infinito). Cualquier apuesta con valor esperado infinito es igualmente buena.

3. A partir de esta apuesta podemos construir apuestas *sin valor esperado* lo que contradice [algunas premisas frecuentes](https://en.wikipedia.org/wiki/Von_Neumann%E2%80%93Morgenstern_utility_theorem#The_axioms) en teoría de la decisión[^asunciones]:

[^asunciones]: En concreto no se cumplen los axiomas de completitud, continuidad e independencia de las alternativas. Puedes leer más en [este post](https://skepticsplay.blogspot.com.es/2014/01/infinite-utility.html).

Apuesta sin valor
: Después de jugar la apuesta de San Petersburgo tira una moneda. Si sale cara recibe el premio normalmente. Si sale cruz en vez de recibir el premio debes pagarlo.

La utilidad esperada de esta apuesta es $\frac12\infty -\frac12\infty$ lo que es una [indeterminación](https://en.wikipedia.org/wiki/Indeterminate_form): no tienen un valor definido y no podemos compararla con otras acciones[^mean].

[^mean]: Aunque el concepto de valor esperado no esté definido en este caso podemos preguntarnos qué pasaría de media si jugáramos una apuesta así un número arbitrariamente grande de veces. La respuesta es que [dependiendo de las características de la apuesta](http://www.ams.org/journals/tran/1973-185-00/S0002-9947-1973-0336806-5/S0002-9947-1973-0336806-5.pdf) la media podría tender a más infinito, a menos infinito u oscilar. Para una discusión más extensa de los problemas que supone tener apuestas sin valor esperado puedes leer [Vexing Expectations](https://doi.org/10.1093/mind/113.450.237).

# La solución clásica

Para llegar a la paradoja de San Petersburgo hemos asumido [tres premisas](#premisas). La primera de las premisas es difícil de descartar o modificar: incluso si no valoráramos el dinero y sólo valoráramos el helado de chocolate podríamos hacer una apuesta cuya recompensa fuera el helado de chocolate y tendríamos la misma paradoja. ¿Qué podemos hacer con las otras premisas?

Una posible solución de la paradoja pasa por la [*utilidad marginal decreciente*](https://en.wikipedia.org/wiki/Marginal_utility#Diminishing_marginal_utility):

Ley de la utilidad marginal decreciente
: Cuantas más unidades consumimos de algo menor es el valor de cada nueva unidad.

En términos más simples: la primera bola de helado de chocolate tendrá más valor para nosotros que la segunda, la segunda que la tercera... Desde la perspectiva del dinero estamos negando la segunda premisa (*valoramos cada euro de la misma forma*) lo cuál coincide con nuestras intuiciones del mundo real: para un multimillonario un nuevo euro no tiene el mismo el valor que para alguien que no tenga dinero.

En concreto algunos autores como [Bernouilli](https://en.wikipedia.org/wiki/Daniel_Bernoulli) proponen que el valor del dinero es logarítmico[^log]: si tenemos el doble de dinero este valdrá una "unidad" más. De esta forma, el valor esperado de la apuesta original es:

[^log]: Suponemos por simplificar que nos referimos al logaritmo en base dos y que el jugador no tiene ninguna riqueza inicial. Como veremos al final de esta sección esa elección no es relevante.

$$\frac12\log(2)\;+\;\frac14\log(4)\;+\;\dots\;+\;\frac{1}{2^n}\log(2^n)\;+\;\dots = 2 < \infty$$

Por tanto el valor esperado sería finito y resolveríamos la paradoja. Esta solución sin embargo no es satisfactoria porque podemos crear una paradoja con una apuesta modificada:

Súperapuesta de San Petersburgo
: Lanza una moneda justa hasta que salga cruz. Por la primera cara recibes $2^2$€ y por cada cara sucesiva recibes el cuadrado de la anterior (es decir, dos caras tendrán una recompensa de $2^4$€, 3 caras $2^8$€...)

Con esta apuesta volvemos a tener una paradoja:

$$\frac12\log(2^2)\;+\;\frac14\log(2^4)\;+\;\dots\;+\;\frac{1}{2^n}\log(2^{2^n})\;+\;\dots = \\
\frac122\;+\;\frac144\;+\;\dots\;+\;\frac{1}{2^n}2^n\;+\;\dots = \infty$$

De hecho si el valor del dinero viene dado por una función no acotada podemos crear una apuesta modificada con valor esperado infinito; basta coger como recompensa de la cara $n$-ésima una cantidad de dinero $d_n$ con valor $u(d_n) > 2^n$ (ese valor existe porque la función no es acotada).

# ¿Está el valor del dinero acotado?

Si sólo queremos negar la segunda premisa parece que la respuesta pasa por aceptar que los humanos tenemos una función de utilidad acotada. ¿Es esto razonable?

La solución de la utilidad acotada ha sido defendida por Kenneth Arrow (de la [paradoja de Arrow](https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem)) y otros teóricos de la decisión. Este enfoque resolvería también [algunos problemas](http://www.nickbostrom.com/ethics/infinite.pdf) de teorías éticas consecuencialistas relacionados con la existencia de sufrimiento infinito pero parece una solución *ad hoc* por lo que se han elaborado algunas justificaciones.

La justificación más citada es que para obtener un premio arbitrariamente grande deberíamos dedicar un tiempo arbritrariamente largo y moriríamos antes de poder recibirlo[^certeza]. No obstante [podemos construir](https://link.springer.com/article/10.1007/BF00133163#page-1) una apuesta (esta vez algo menos realista) que podría utilizarse como contraargumento:

[^certeza]: Asumimos aquí que sabemos con certeza que moriremos en algún momento del futuro. Si existe una probabilidad no nula (da igual cómo de pequeña) de que podamos no morir nunca y tenemos una función de utilidad no acotada existiría una apuesta con valor esperado infinito

Apuesta de San Petersburgo (con vida extra)
: Un científico que investiga la longevidad humana nos propone la siguiente apuesta. Lanza una moneda justa hasta que salga cruz. Por la primera cara recibes 2€ y 2 **minutos de vida extra** y por cada cara sucesiva recibes el doble de dinero y minutos extra que por la anterior (es decir, dos caras tendrán una recompensa de 4€ y 4 minutos extra de vida, tres de 8€ y 8 minutos...)

Esta apuesta modificada tiene la misma recompensa monetaria que la apuesta de San Petersburgo original con una recompensa temporal adicional. Siguiendo los mismos cálculos que en la apuesta original podemos esperar $\infty$ € e $\infty$ minutos de vida extra. Este tiempo infinito hace que la utilidad esperada sea en efecto infinita y contradice la justificación original.

Otras posibles justificaciones de la utilidad acotada pasan por analizar la [psicología humana](http://www.sciencedirect.com/science/article/pii/S0167268199000025) o argumentar que recibir infinito dinero no tendría valor debido a la inflación.

# Premio no garantizado

Si creemos que las funciones de utilidad pueden no estar acotadas (es decir, que existen cosas arbitrariamente buenas/malas) sólo nos queda la alternativa de negar la tercera premisa (*el sorteo es justo y nos darán el premio completo*) o modificar nuestro criterio de decisión.

Podemos negar la tercera premisa utilizando la información de que nadie tiene infinito dinero. Si el banco sólo puede asegurarnos

<div class="standalone"><input type="number" value="1000000" id="max-bound" min="0" max="1e+308">€</div>

solo podemos esperar recibir <strong><span id="expected-value">17.53</span>€</strong> de media[^acotado]. Si pruebas con valores como
<a href="javascript:void(0)" id="billGates" title="Haz click para modificar el valor" class="interactive">la fortuna de Bill Gates</a>,
<a href="javascript:void(0)" title="Haz click para modificar el valor" id="worldGDP" class="interactive">el PIB mundial</a> o
<a href="javascript:void(0)" title="Haz click para modificar el valor" id="googol" class="interactive">un googol de euros</a>
comprobarás que este valor es bastante bajo. Esto puede servir como justificación para asignar un valor bajo a la apuesta.

[^acotado]: Utilizando la fórmula de una progresión geométrica puedes comprobar que si $b$ es la cota el valor esperado es: $$\min\left\{b, \lfloor \log(b) \rfloor + \frac{b}{2^{\lceil\log(b)\rceil - 1}}\right\}$$

# Cambiando el criterio de decisión

Finalmente algunos autores plantean que quizás debamos replantearnos el uso de la utilidad esperada. Como posible solución proponen descartar cualquier desenlace con una probabilidad de ocurrir más pequeña que un cierto umbral. En la apuesta de San Petersburgo original, en el <input type="number" value="90" id="percentage" min="1" max="99">% de los peores desenlaces obtendremos <span id="percentile"></span>€ o menos, lo que da una perspectiva más realista del valor que le otorgamos realmente a la apuesta.

Este tipo de razonamiento sin embargo no es del todo satisfactorio ya que parece algo arbitrario. Como última alternativa existen algunos [enfoques bayesianos](http://blog.givewell.org/2011/08/18/why-we-cant-take-expected-value-estimates-literally-even-when-theyre-unbiased/) que solucionan además otros problemas a los que se enfrenta la teoría de la decisión como el [asalto de Pascal](http://www.nickbostrom.com/papers/pascal.pdf).

Si has llegado hasta aquí y no estás convencido de que la paradoja esté solucionada puedes leer [el artículo de la enciclopedia de Stanford](https://plato.stanford.edu/entries/paradox-stpetersburg) sobre el tema para encontrar soluciones alternativas y una discusión más extensa. En cualquier caso, espero haberte convencido de que hay que tener cuidado con los valores de utilidad infinito y con los modelos que utilizamos para tomar decisiones.

<script src="//cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js"></script>
<script src="/js/san-petersburgo.js"></script>
