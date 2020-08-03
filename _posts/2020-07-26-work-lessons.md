---
title: "Cómo ser ingeniero de software: una perspectiva personal"
authors: [psi]
tags: [guía]
lang: es
description: Una guía sobre cómo es el proceso para obtener un trabajo como ingeniero de software
---

Estas notas intentan reunir algunas cosas que me habría gustado saber antes de empezar a buscar trabajo como ingeniero de software. Las escribí para unos pocos amigxs pero he pensado que podría ser útil a otras personas.
No pretenden tener una estructura de texto para leer de principio a fin, siéntete libre de leer sólo las secciones que más te interesen.

# Mis objetivos

Buscar trabajo como ingeniero informático es relativamente sencillo; hay mucha demanda y si no tienes muchas restricciones puedes encontrar trabajo seguro. Lo malo es que puede ser de algo que no te guste mucho o que las condiciones o el salario no sean todo lo buenas que podrían ser.

En mi caso consideraba como aspectos relevantes

- la posibilidad del teletrabajo, bien desde el principio o a medio plazo,
- que mi trabajo me permita contribuir a software libre,
- poder hacer charlas o escribir cosas técnicas que tengan algo de presencia pública,
- utilizar tecnologías que me interesaran o al menos no me parecieran horribles,
- utilizar o aplicar resultados de investigación en el trabajo y
- estar cómodo con las implicaciones éticas de mi trabajo.

# Qué he hecho

Intenté llevar un registro de todas las empresas en las que mandé algún tipo de solicitud, pero me resultaba más laborioso hacerlo que el propio acto de rellenar las solicitudes[^sql] así que abandoné el intento, por lo que las estadísticas de esta sección son aproximadas. Solicité trabajo en aproximadamente cien empresas de las que he hecho alguna parte del proceso de entrevistas con doce de ellas.

[^sql]: En retrospectiva quizá no ayudara el hecho de que estaba insertando a mano las cosas en una base de datos con `INSERT`s manuales.

En el periodo de búsqueda de trabajo he dedicado principalmente mi tiempo a hacer entrevistas, preparar esas entrevistas y hacer proyectos relevantes. El proceso ha durado unos 6 meses, y estoy satisfecho con el resultado: he acabado trabajando en [Datadog](https://datadoghq.com), cumpliendo la gran mayoría de los objetivos.

# Cómo empezar

Cinco cosas que puedes hacer desde el principio son:

Definir tus objetivos
: Es importante tener más o menos claras cosas como a qué sitios estás dispuesto a mudarte, qué tecnologías nunca vas a querer utilizar o qué tipo de puestos o responsabilidades te interesa tener. Esto te permite tener criterio para luego decidir entre distintos puestos. Siempre puedes revisar tus objetivos a posteriori.

Preparar el CV
: Hay decenas de guías sobre cómo escribir un CV, así que tampoco creo que pueda decir muchas cosas novedosas o importantes aquí, pero quizá hay tres consejos destacables:

1. importan más las palabras clave y la corrección en la escritura a ser específico en las cosas técnicas,
2. pon uno o dos proyectos de los que puedas hablar de forma extendida en las entrevistas y
3. pide a terceros que lean tu CV antes de tener una versión final.

Hacer prácticas de entrevista
: Puedes hacer entrevistas de prueba con otra gente, en sitios como [pramp.com](https://www.pramp.com/#/) o [interviewing.io](https://interviewing.io), con sitios de problemas por ti mismx o simplemente coger experiencia haciendo entrevistas con otras empresas.

Hacer proyectos de los que puedas hablar
: Por ejemplo empezar un blog de cosas técnicas, contribuir a algún proyecto de software libre o hacer tu propio proyecto pequeño (como unas prácticas de universidad) pero de lo que tu quieras.

Solicitar muchos puestos de trabajo
: Tras amortizar el coste de preparar una solicitud, cuesta entre 5 y 15 minutos enviar un CV para una empresa y siempre puedes cambiar de opinión si la empresa no te convence más adelante en el proceso, así que salvo que tengas claro que no estás para nada interesado en hacer el proceso de entrevistas deberías mandar tantas solicitudes como puedas. En una sección posterior puedes encontrar más información sobre dónde mandar solicitudes.

# Cómo es el proceso de entrevistas

En principio esperaba que la mayor parte las entrevistas fueran de problemas algorítmicos a resolver entre 45 minutos y 1 hora. Si bien esta es una fracción importante de las entrevistas que he hecho hay muchas otras cosas que las empresas hacen en sus procesos de entrevistas y son más generales. Incluso hay empresas grandes en las que llegué al final del proceso de entrevistas sin escribir una sola línea de código.

Me centro en las preguntas técnicas pero también hay llamadas para

- decidir cuándo hacer ciertas entrevistas,
- explicar cosas de las empresas o el puesto y que puedas hacer preguntas y
- recibir feedback sobre cómo lo has hecho en otras entrevistas.

Las pruebas técnicas pueden dividirse en las siguientes categorías, ordenadas aproximadamente por en qué parte del proceso de entrevistas se suelen hacer:

Tests o preguntas cortas de conocimientos sobre cosas de informática
: Tests sencillos que normalmente son la primera fase porque al ser evaluados fácilmente las empresas pueden distribuirlos masivamente o administrados por un entrevistador que sólo tiene que comprobar una checklist. Para prepararlos puedes memorizar algunos conceptos y definiciones básicas de informática. Dependiendo de a qué se dedique la empresa las preguntas pueden ser más específicas de un campo.

Hablar de tu experiencia previa
: Preguntas sobre cosas que has hecho, a veces centrándose en proyectos concretos que has hecho. Para prepararlas elige algunos proyectos sobre los que vas a hablar y piensa en los aspectos que quieres destacar en las entrevistas.

Evaluar tu conocimiento sobre la empresa
: Preguntas sobre por qué te interesa el puesto, la empresa o el campo en general, tanto para evaluar tus conocimientos sobre el tema como cómo de interesado estás. Lee sobre la empresa e intenta informarte sobre lo que hace.

Problemas de programación o de informática
: Resolución un problema concreto en un tiempo limitado durante una entrevista, dando su complejidad en tiempo y en espacio e intentando justificar tus decisiones. Para estas entrevistas es para las que más material hay para prepararse en Internet, incluyendo páginas como Glassdoor. A veces los problemas pueden ser de configuración de sistemas o máquinas virtuales dependiendo del ámbito de la empresa.

Proyectos para hacer por tu cuenta (_take-home_)
: Proyectos más largos para resolver un cierto problema de programación. Pueden llevar de unas horas a varios días. Suelen hacerse en una fase más avanzada pero a veces son el primer paso (en cuyo caso a lo mejor merece menos la pena hacerlos si llevan mucho tiempo). Su intención es evaluar cómo programas en un entorno más realista. A veces se acompañan por una entrevista posterior en la que discutir la solución. Asegúrate de testearlo todo y usa linters y warnings para evitar errores tontos. Raramente son pagados a menos que sean trabajo real; asegúrate de licenciarlos adecuadamente para evitar estar trabajando gratis.

Diseño de sistemas
: Discusiones sobre cómo diseñar a grandes rasgos un programa, gestionar los errores, testearlo, dividirlo en partes que sean mantenibles… Es útil ver qué tipos de problemas resuelve la empresa porque te van a preguntar cosas del campo. No he llegado a encontrar ningún material online que me convenza mucho para prepararse.

Entrevistas de comportamiento
: Preguntas como: ¿Te gusta trabajar solx o en equipo? ¿Cómo te describirías? ¿Cómo lidias con el conflicto? Puedes encontrar fácilmente listados de preguntas de este estilo, el objetivo es asegurarse de que eres una personas con la que es agradable y viable trabajar.

Visto bueno de ejecutivos
: Dependiendo del tamaño de la empresa y de la suerte que tengas a veces te hacen una entrevista hacia el final del proceso con alguien que tiene un cargo alto, como directores de ingeniería o CTOs. Normalmente están ahí para dar el visto bueno y simplemente tienes que parecer una persona razonable.

Puede haber más de una entrevista de cada tipo (sobre todo de experiencia previa y de programación) y puede que una entrevista mezcle cosas de distintos tipos.

# Sitios donde encontrar empresas

Aquí hay una lista de sitios donde puedes encontrar empresas para buscar trabajo.
Toda mi búsqueda de trabajo fue pre-pandemia así que puede que las cosas hayan cambiado y ahora sea diferente.
80000 Hours tiene [una guía](https://80000hours.org/career-guide/how-to-get-a-job/) sobre esto con tips concretos, pero mi impresión es que su público objetivo son estudiantes de Oxford que tienen ya decenas de conexiones y por eso su utilidad es limitada si no cumples ese perfil.

Preguntando a otra gente que está haciendo entrevistas o trabajando
: Muchas empresas dan un bonus a sus empleados si hacen recomendaciones de potenciales empleados para un puesto (_referrals_). Esa información puede incrementar tus posibilidades de éxito así que es una ventaja. Incluso si no hay sistema de referrals sigue siendo interesante por el conocimiento interno de la empresa. También si conoces a alguien que esté también buscando trabajo puedes compartir ofertas.

[StackOverflow Jobs](https://stackoverflow.com/jobs)
: El sitio mejor organizado para encontrar trabajo en Europa y EEUU que he visto es StackOverflow Jobs. Puedes crear avisos por correo semanales o diarios de nuevas ofertas y filtrar por distintos criterios. Es bastante sencillo de usar.

LinkedIn
: Hay empresas que sólo se anuncian en LinkedIn o que se anuncian en otros sitios y te ponen que les mandes el CV por LinkedIn, así que tener un perfil es algo que vas a necesitar tarde o temprano.

Indeed, infojobs y otros
: Nunca he encontrado nada útil en ninguna de estas pero no está de más mencionarlas.

Páginas webs de empresas
: Hay un porcentaje importante de empresas que no publican sus puestos en ningún sitio salvo en su página web, así que en algunos casos mirar las webs está bien para ver oportunidades que no están en otro sitio.

Reddit y listas de correo
: Por último hay otros trabajos (por ejemplo aquellos que tienen un enfoque muy específico) que suelen anunciarse por canales de ese tema específico como pueden ser subreddit, listas de correo y blogs. Suscríbete a las de los temas que te interesen.

# Otros consejos y cosas que he aprendido

Que te respondan o no parece bastante aleatorio
: Es muy difícil saber por qué una empresa te ha preseleccionado: en general se recibe poco feedback sobre cómo de bien o mal lo has hecho en un proceso de entrevistas, o te puedes fiar poco del que recibes (si eres suficientemente bueno no quieren descartarte por si en el futuro te vuelven a llamar). Las empresas tampoco tienen mucho interés en decirte cómo son el resto de candidatxs que están entrevistando. Por ejemplo, mi capacidad personal de predicción de qué empresas van a responder es nula. Por tanto, solicita trabajo en cualquier empresa aunque pienses que no te van a responder.

Las empresas hacen _ghosting_ con más frecuencia de lo esperado
: En un porcentaje importante de las empresas en las que solicité trabajo no tuve ninguna respuesta o sólo una respuesta automatizada. Desde una perspectiva económica de la empresa es lo esperable: si no tienen suficiente interés en ti no quieren invertir más tiempo.

Las empresas hacen cosas que no parecen optimizar encontrar el mejor candidato
: No soy, desde luego, un experto en las técnicas de reclutamiento de las empresas pero creo que hay ciertos aspectos del proceso bastante comunes que no parecen los más óptimos en términos de coste-beneficio: a veces hay preguntas que no tienen mucha relación con el campo o algunas cosas que tienen un coste elevado sin aportar muchos beneficios (más allá del _signaling_ por parte de la empresa de que está interesada en ti como candidatx).

Los sueldos varían muchísimo y se pueden negociar
: Aparte de las variaciones normales por el país/ciudad, la variación entre los salarios que me han ofrecido es de casi 4 veces entre el menor y el mayor. Las ofertas son negociables, [este artículo](https://www.freecodecamp.org/news/ten-rules-for-negotiating-a-job-offer-ee17cccbdab6/) no está mal para la negociación.

Saber hablar bien inglés ayuda mucho
: La gran mayoría de empresas te van a pedir que hables inglés, si lo haces y puedes expresarte bien pues ayuda bastante a que crean que eres un buen candidatx.
