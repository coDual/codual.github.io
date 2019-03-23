---
layout: post
title: Muerte a los acortadores
lang: es
tags: [tecnología]
description: Los acortadores de enlaces son dañinos para Internet.
authors: [psi]
---

Los acortadores de URL crean un enlace corto que redirecciona a otro dado.
Fueron popularizados por Twitter[^twitter], y se utilizan para obtener estadísticas de uso o simplemente porque son más estéticas, fáciles de memorizar, escribir o distribuir. Aunque tienen usos legítimos los acortadores no son seguros y dañan Internet.

[^twitter]: Desde junio de 2010 cualquier URL en un tweet [ocupa 23 caracteres](https://support.twitter.com/articles/344685) lo que hace inútiles los acortadores para su propósito original.

# Cómo funcionan

Un acortador funciona con una base de datos en la que un número (ID) identifica cada URL de forma única. La ID se genera aleatoriamente hasta encontrar una que esté libre: coger la mínima ID no ocupada [expone](https://www.quora.com/Is-exposing-database-auto-increment-id-considered-a-bad-practice/answer/Ted-Suzman) mucha información[^alemania] y tiene problemas de concurrencia.
La URL que se genera es entonces [la ID convertida](http://stackoverflow.com/a/1562793/3414720) a base 36 (`length ['a'..'z'] + length [0..9]`) o 62 (añadiendo mayúsculas).

[^alemania]: Así se [estimó el número de tanques](http://www.theguardian.com/world/2006/jul/20/secondworldwar.tvandradio) que producía Alemania en la Segunda Guerra Mundial.

De esta forma sólo hace falta ver la ID asociada a la URL que tenemos y redireccionar al usuario.
Esta operación añade un tiempo de carga notable a los links: una [combinación de acortadores](https://t37.net/why-link-shorteners-harm-your-readers-and-destroy-the-web.html) frecuente puede añadir un retardo de 1-3 segundos en la carga de una web.
Pero este no es el principal problema de los acortadores.

# Privacidad

Es muy sencillo explorar las URLs que existen en un determinado servicio generándolas aleatoriamente. Además, algunos acortadores no generan las URLs uniformemente[^uniforme], lo que puede permitirnos encontrar URLs que funcionen más fácilmente.

[^uniforme]: [**Security and Privacy Implications of URL Shortening Services** - Alexander Neumann, Johannes Barnickel, Ulrike Meyer](https://web.archive.org/web/20171215134500/http://w2spconf.com/2011/papers/urlShortening.pdf)

Justo esto es lo que hicieron Martin Georgiev y Vitaly Shmatikov en [Gone in Six Characters: Short URLs Considered Harmful for Cloud Services](http://arxiv.org/pdf/1604.02734v1.pdf). Los investigadores generaron URLs para Bitly, Google Maps, OneDrive y otros servicios. Aunque sólo escanearon un pequeño porcentaje de las URLs del espacio completo[^espacio] encontraron unos 60 millones de URLs existentes.

[^espacio]: Escanear el espacio completo es posible según el paper utilizando servicios como [Amazon EC2](https://en.wikipedia.org/wiki/Amazon_Elastic_Compute_Cloud) o *botnets* en un tiempo razonable.

Para algunos servicios como OneDrive, obtenida una URL era posible encontrar el resto
de las URLs generadas por el usuario y modificar e incluir *malware* en las carpetas compartidas.

En Google Maps y otros servicios de mapas las URLs encontradas daban
información sobre recorridos desde casas unifamiliares hasta sitios como centros de tratamiento de adicciones, clínicas de aborto, centros de detención juvenil u otras casas, lo que supone un grave problema de privacidad.
Estas direcciones pueden servir también para [identificar relaciones personales](http://www.pnas.org/content/107/52/22436.long) y cosas tan simples como la ruta que haces hasta llegar al trabajo [pueden identificarte](http://crypto.stanford.edu/~pgolle/papers/commute.pdf) de forma única. En suma, aunque no estén asociados a ningún nombre los datos de localización [no son anónimos](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.651.44&rep=rep1&type=pdf). Por supuesto ~~la NSA~~ nadie se pondría a mirar
de forma sistemática este espacio de direcciones para obtener información sobre los
ciudadanos.

Microsoft ha desactivado la creación de URLs cortas en OneDrive (aunque todas las URLs antiguas siguen teniendo esta vulnerabilidad), y Google ha incrementando la longitud de las URLs cortas a 11-13 caracteres, lo que reduce drásticamente la densidad de URLs utilizadas entre las que se pueden generar.

En su estado actual los acortadores de URLs no son seguros ni privados. Cuando acortas
una URL debes asumir que su contenido podrá ser accedido por ~~la NSA~~ cualquiera con
suficiente poder computacional.

# Aleatoriedad

Es imposible saber a donde apunta una URL acortada hasta hacer una petición al servicio, ya que las IDs se generan aleatoriamente. Esto tiene dos problemas importantes.

En primer lugar, no puedes saber si la página que hay detrás del link que visitas es segura. Aunque los acortadores suelen analizar las URLs para evitar el spam este análisis [no siempre es efectivo](http://arxiv.org/pdf/1406.3687.pdf). Además, si un servicio (como [ocurrió con cli.gs](http://thenextweb.com/2009/06/16/popular-url-shortener-cligs-hacked)) es hackeado, sus URLs anteriormente seguras pueden ser redireccionadas a sitios maliciosos.

Y, en segundo lugar, si un servicio se interrumpe **millones de URLs dejarán de funcionar**[^interrupcion]. Esto no es poco común: [ArchiveTeam](http://archiveteam.org) tiene [una lista](http://archiveteam.org/index.php?title=TinyURL#Dead_or_Broken)
de más de 300 acortadores que han dejado de funcionar y de [otra lista](http://archive.is/VCaCh) de acortadores mantenida por yi.tl un 60% han desaparecido. La mayor parte de estos acortadores no cooperan en el archivado de sus bases de datos, lo que hace que estos links acaben siendo simplemente secuencias de caracteres aleatorias.

[^interrupcion]: Los acortadores de URLs son además más propensos a ser cerrados ya que entran bajo la jurisdicción del país que provee el [nombre de dominio](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains). vb.ly [cerró](http://www.economist.com/node/17249654) por no cumplir la ley Sharia de Lybia al permitir pornografía.

Los enlaces rotos son un grave problema para la conservación de la información en Internet. [Entre un 3% y un 5%](https://en.wikipedia.org/wiki/Link_rot#Prevalence) [^pocket] de los links desaparecen cada año, lo que dificulta acceder a las referencias de las publicaciones científicas y, en general, conservar Internet. Organizaciones como [Internet Archive](http://archive.org) archivan copias periódicas de la web, lo que nos permite acceder a documentos que de otra forma no estarían disponibles.

[^pocket]: En las redes sociales la pérdida puede llegar hasta [el 11%](https://arxiv.org/pdf/1209.3026v1.pdf) cada año. [Mi estimación](/2016/09/06/pocket/) en función de los links que he leído es similar

[Entre un 35% y un 90%](http://arxiv.org/pdf/1212.6177v2.pdf) de la web ha sido archivada alguna vez, pero cuando un acortador de URLs deja de funcionar dejamos de poder acceder a ese contenido. [URLTeam](http://tracker.archiveteam.org:1337/status) y [301Works](http://301Works.org) son proyectos que pretenden guardar las bases de datos de los servicios de acortadores, pero no son suficientes: debemos dar de una vez muerte a los acortadores.
