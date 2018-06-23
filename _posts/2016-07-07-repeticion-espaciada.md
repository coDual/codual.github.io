---
title: "Repetición espaciada: consejos"
tags: [aprender]
authors: [psi]
description: Algunas recomendaciones para utilizar la repetición espaciada centrándose en la aplicación Anki.
warnings: [Trabajo,Basado parcialmente en experiencia propia]
math: true
---

La [repetición espaciada](https://en.wikipedia.org/wiki/Spaced_repetition) es una técnica de aprendizaje y memorización que consiste en revisar el contenido con intervalos crecientes de tiempo entre una revisión y la siguiente. Es una técnica que parece ser [bastante efectiva](https://www.gwern.net/Spaced%20repetition#background-testing-works) para [gran cantidad de temas](https://www.gwern.net/Spaced%20repetition#subjects) y es más efectiva que estudiarlo todo junto en los últimos días. En suma, consiste en hacer tarjetas que tengan una pregunta o frase en un lado y una respuesta en el otro y en responder a esa pregunta o frase en intervalos crecientes.

He utilizado esta técnica en los últimos tres años y presento aquí algunos consejos prácticos a partir de mi experiencia y de algunos estudios para poner esta técnica en práctica. Si quieres leer más sobre la base de la repetición espaciada te recomiendo leer [el artículo de Gwern sobre el tema](https://www.gwern.net/Spaced%20repetition).


# Para qué puedes usarla

La repetición espaciada es más fácil de utilizar en campos de conocimiento en los que la información puede dividirse en unidades pequeñas que pueden memorizarse independientemente, como para aprender teoremas matemáticos, fórmulas o definiciones individuales.

Si quieres memorizar cosas más largas o que deben recordarse de forma exacta como enumeraciones, poemas o artículos de leyes es más complejo utilizar este sistema. Una opción es dividir el texto o lista en partes cortas indicando el principio y el final y responder con lo que hay en medio.

En el caso de temas de desarrollo para mí ha resultado efectivo hacer un esquema del contenido y hacer tarjetas que vayan de los títulos generales al contenido específico de cada sección, aunque es cierto que resulta más complejo.

En resumen, en principio puedes utilizar la repetición espaciada para [memorizar cualquier cosa](https://www.supermemo.com/english/ol/ks.htm) pero **debes dividirla en partes suficientemente pequeñas** como para que no resulte difícil recordar cada una de una vez.

# Qué necesitas

La forma más sencilla de practicar esta técnica es utilizar una aplicación para el ordenador o dispositivos móviles. Si quieres hacerlo a mano hay [algunos algoritmos](https://en.wikipedia.org/wiki/Leitner_system)[^leitner] para ello, pero (probablemente) sea más difícil mantener el interés si te lleva demasiado trabajo.

[^leitner]: [Fluent Forever](https://fluent-forever.com) tiene una guía para el sistema Leitner en su segundo apéndice

Yo uso la aplicación [Anki](http://ankisrs.net) ya que tiene un [sistema de sincronización](https://ankiweb.net/about) móvil-ordenador gratuito y permite utilizar LaTeX para escribir fórmulas. Algunos consejos de este post son especificos para Anki, pero la mayor parte de los sistemas de repetición espaciada tienen características similares así que será aplicable en su mayoría utilices la aplicación que sea.

Si quieres utilizar otra aplicación (en iOS Anki no es gratuita, por ejemplo) tienes una [comparativa de características en Wikipedia](https://en.wikipedia.org/wiki/List_of_flashcard_software) y otra de [popularidad en el post de Gwern](https://www.gwern.net/Spaced%20repetition#popularity).

Si tu objetivo es aprender idiomas [Duolingo](https://es.duolingo.com) y [Memrise](https://www.memrise.com) utilizan este sistema y tienen tarjetas ya preparadas para memorizar vocabulario, estructuras gramaticales y otros aspectos.


# Cómo hacer las tarjetas

Anki y otros servicios tienen tarjetas prehechas para aprender algunos temas. Mi recomendación (excepto si utilizas un sistema guiado como Duolingo) es que hagas tus propias tarjetas para poder controlar la información que memorizas y hacer que se corresponda de forma más fiable con el contenido que quieres memorizar.

¿Sobre qué hago las tarjetas? [Gwern calcula](https://www.gwern.net/Spaced%20repetition#how-much-to-add) que emplearás para una tarjeta que aprendas durante 3 años un total de 30 o 40 segundos de media. Anki y otros sistemas tienen un [sistema para identificar tarjetas especialmente difíciles de memorizar](http://ankisrs.net/docs/manual.html#leeches) así que no deberías tener miedo en añadir cualquier cosa que creas que puede resultar útil siempre que estés dispuesto a dedicarle el tiempo necesario. En mi caso para 3 asignaturas (~150 tarjetas) salen a una media de 3 minutos al día estudiando todos los días.

SuperMemo (una software para repetición espaciada) incluye [una lista bastante extensa de consejos](https://www.supermemo.com/en/articles/20rules) para hacer tarjetas que sean efectivas. Algunos consejos que yo encuentro especialmente relevantes son:

- **Aprende antes de memorizar**. No empieces a memorizar algo si no lo has entendido antes o no lo has utilizado de ninguna forma. Por ejemplo, si quieres memorizar un teorema, entiende primero de forma general sus implicaciones, lo que significa y para qué se usa.
- **Utiliza el tipo de tarjeta más adecuado** La mayor parte de los sistemas de repetición espaciada tienen distintos tipos de tarjetas: como mínimo hay tarjetas clásicas (una pregunta y una respuesta), tarjetas que pueden invertirse (se muestra un lado y debes responder el otro) y tarjetas con huecos ([*cloze deletion*](https://en.wikipedia.org/wiki/Cloze_test)). También puedes emplear (si quieres emplear el tiempo necesario) imágenes o diagramas con huecos para completar. Ten en cuenta también que [no todos los tipos de tarjetas son igual de efectivos](https://www.gwern.net/Spaced%20repetition#review-summary).
- **Incluye todo el contexto**. Por ejemplo, para aprender que *agua* se dice *akvo* en esperanto deberías tener una tarjeta en cada dirección[^invertida]: una en la que se te pregunte por la traducción de *agua* y otra en la que se te pregunte por la traducción de *akvo*.
- **Divide la información lo más posible**: La repetición espaciada funciona mejor si no tienes grandes cantidades de información que responder de una sóla vez. Si puedes dividir una tarjeta en dos independientes será más fácil aprender cada contenido. Evita además las listas demasiado largas (en mí caso más de 5 elementos suele resultar más difícil de memorizar)
- **Sé consistente**: Si tienes que hacer tarjetas sobre un tema parecido, evita dar información extra que te haga saber de qué tarjeta se trata. Si quieres aprender que *Los escarabajos tienen 6 patas*[^cencia] y *Las arañas tienen 8 patas* haz tarjetas de la forma *[…] tienen 6 patas* ocultando el artículo para que el género de la palabra del hueco no te de información.
- **Evita ambigüedades**: Debe ser claro sobre qué estás preguntando sin que tengas que dar información extra. Dos tarjetas con un título muy parecido pueden llevar a confusión y hacerte perder el tiempo. Si una pregunta tiene varias respuestas válidas posibles inclúyelas si ves que es relevante.

[^invertida]: Anki [dispone de un tipo de tarjeta](http://ankisrs.net/docs/manual.html#reverse-cards) (*Básica e invertida*) que genera automáticamente una tarjeta en cada dirección.
[^cencia]: [@Yeholon](https://twitter.com/yeholon) 2016b


# Cuándo hacer las tarjetas

Si vas a utilizar las tarjetas para memorizar el contenido de una asignatura es relevante el momento en el que hagas las tarjetas. En mi experiencia no deberías hacer las tarjetas justo en el momento en el que aprendes el contenido: hacer tarjetas lleva tiempo y muchas asignaturas tienen contenido introductorio que no es necesario memorizar y puedes estar malgastando el tiempo. **Espera a saber qué contenido es relevante** y en ese momento haz las tarjetas.

Si estás preparando un examen deberías empezar a estudiar las tarjetas con **como mínimo 5 días** (mi recomendación sería, si tienes el tiempo para hacerlo, que prepares las tarjetas y empieces a usarlas con 2 semanas de antelación aproximadamente).

# Cuándo estudiar

Crear el hábito de estudiar las tarjetas todos los días es quizás la parte más difícil de todo el proceso. Mi recomendación es que busques un momento específico del día para hacerlo, por ejemplo, en el transporte público si lo utilizas y seas consistente en su uso. Dado que es más fácil memorizar por la noche [quizás deberías estudiarlas por la noche](https://www.gwern.net/Spaced%20repetition#when-to-review). No obstante la mayor parte de los estudios no controlan este factor y no parece afectar así que mi recomendación es que lo hagas en el momento que creas que va a ser más probable que crees el hábito.

# Tarjetas para matemáticas

En el caso de utilizar tarjetas para memorizar cosas sobre matemáticas (el principal uso que les he dado) mi recomendación es:

- Considera incluir las definiciones como tarjetas de doble sentido si es necesario
- Si una demostración es sencilla, incluye una tarjeta para la idea principal
- Si usas variables en la respuesta menciónalas en la pregunta para facilitar la comprobación
- Si una proposición o resultado no tiene nombre es más sencillo incluirlo como una tarjeta con huecos, tapando su forma lógica (*\\(f\\) es derivable […] \\(f\\) es continua*[^sii]) y/o las hipótesis implicadas (*\\(f\\) es […] implica que \\(f\\) es continua*).

[^sii]: Para evitar distinguir si la respuesta es *si y sólo si* o una implicación escribe las implicaciones de la forma *P implica [que] Q*.

Para escribir fórmulas anki utiliza LaTeX como soporte para escribir matemáticas. Para instalarlo y utilizarlo puedes seguir [esta guía](http://libreim.github.io/blog/2015/03/14/latex). Necesitas además instalar el paquete `dvipng`.

Puedes incluir cualquier tipo de código LaTeX en tus tarjetas como fórmulas, diagramas o tablas. El caso de uso más frecuente son las fórmulas. Para insertarlas puedes teclear `Ctrl`+`T`,`E` (para fórmulas en medio de texto) o `Ctrl`+`T`,`M` (para fórmulas con su propia línea) o utilizar la sintaxis que ves debajo.

Por ejemplo, si queremos hacer una tarjeta con la fórmula de la suma de series geométricas pondríamos:

```
La suma de los [$]n[/$] primeros términos de una progresión geométrica de razón [$]r[/$] con primer término [$]a[/$] es:
[$$]\sum_{k=0}^{n-1} ar^k= a \, \frac{1-r^{n}}{1-r}[/$$]
```

Y obtendríamos una tarjeta con texto:

> La suma de los \\(n\\) primeros términos de una progresión geométrica de razón \\(r\\) con primer término \\(a\\) es:
> $$\displaystyle\sum_{k=0}^{n-1} ar^k= a \, \frac{1-r^{n}}{1-r}$$

Si vas a utilizar Anki en un dispositivo sin LaTeX (un móvil, por ejemplo) pulsa `Herramientas` → `Comprobar multimedia…` para que se generen todas las imágenes de las fórmulas en un dispositivo con LaTeX y podrás acceder a estas en cualquier dispositivo sincronizado.

# Enlaces sobre el tema

- [Spaced repetition - Wikipedia](https://en.wikipedia.org/wiki/Spaced_repetition)
- [Effective learning: Twenty rules of formulating knowledge](https://www.supermemo.com/en/articles/20rules)
- [Spaced repetition: a hack to make your brain store information](https://www.theguardian.com/education/2016/jan/23/spaced-repetition-a-hack-to-make-your-brain-store-information)
- [Anki Manual](http://ankisrs.net/docs/manual.html)
- [Spaced repetition - Gwern.net](https://www.gwern.net/Spaced%20repetition)
