---
layout: post
title: Muerte a los acortadores
lang: es
authors: [psi]
---

Los acortadores de URL crean una URL corta que redirecciona a otra dada.
Fueron popularizados principalmente por la red social Twitter[^twitter].
Se usan frecuentemente para obtener estadísticas de uso de un link,
como hacen [Bitly](http://bit.ly) o [Pocket](https://getpocket.com),
o simplemente porque son más estéticas, fáciles de memorizar,
escribir o distribuir.

[^twitter]: Desde junio de 2010 cualquier URL en un tweet [ocupa 23 caracteres](https://support.twitter.com/articles/344685) lo que hace inútiles los acortadores para su propósito original.

# Cómo funcionan

Usualmente un acortador tiene una base de datos que tiene
un número (ID) que identifica cada URL [de forma única](https://en.wikipedia.org/wiki/Universally_unique_identifier).

La ID se genera **aleatoriamente** [^bitly] hasta encontrar una que esté libre.
Se hace de esta forma porque generarlas cogiendo la
mínima ID no ocupada
[expone](https://www.quora.com/Is-exposing-database-auto-increment-id-considered-a-bad-practice/answer/Ted-Suzman) mucha información, tiene problemas de concurrencia y suele ser una mala idea: podrías, por ejemplo, [calcular el número de tanques](http://www.theguardian.com/world/2006/jul/20/secondworldwar.tvandradio) que produce el enemigo.

[^bitly]: En el caso de algunos servicios como Bitly algunas partes de la URL se generan secuencialmente.


La URL que se genera es entonces [la ID convertida](http://stackoverflow.com/a/1562793/3414720) a base 36 (`length ['a'..'z'] + length [0..9]`) o 62 (añadiendo mayúsculas).

De esta forma sólo hace falta ver la URL asociada a la ID que tenemos y redireccionar al usuario. Esta operación añade un tiempo de carga notable a los links:
una [combinación de acortadores](https://t37.net/why-link-shorteners-harm-your-readers-and-destroy-the-web.html) frecuente puede añadir un retardo de hasta 3.4 segundos en la carga de la web.
Pero este no es el principal problema de los acortadores.

# Privacidad

Es muy sencillo generar URLs aleatoriamente para cualquier acortador y explorar las
que funcionan. Además, algunos acortadores no generan las URLs uniformemente[^uniforme],
por lo que es sencillo generar URLs de tal manera que una proporción aceptable de ellas
hayan sido utilizadas.

[^uniforme]: [**Security and Privacy Implications of URL Shortening Services** - Alexander Neumann, Johannes Barnickel, Ulrike Meyer](http://w2spconf.com/2011/papers/urlShortening.pdf)

Justo esto es lo que hicieron Martin Georgiev y Vitaly Shmatikov en [Gone in Six Characters: Short URLs Considered Harmful for Cloud Services](http://arxiv.org/pdf/1604.02734v1.pdf). Los investigadores generaron URLs
para Bitly, Google Maps, OneDrive y otros servicios. Aunque sólo escanearon un pequeño
porcentaje de las URLs del espacio completo[^espacio], los investigadores encontraron unos 60 millones de URLs existentes (36-42% de las URLs probadas eran válidas).

[^espacio]: Escanear el espacio completo es posible (según el paper) con una capacidad computacional razonable y podría hacerse por ~~la NSA~~ una organización suficientemente grande.

Para algunos servicios como OneDrive, obtenida una URL era posible encontrar el resto
de las URLs generadas por el usuario (!) y, en algunos casos, modificar e incluir *malware*
en las carpetas compartidas.

En Google Maps y otros servicios de mapas las URLs encontradas daban
información sobre recorridos desde casas unifamiliares hasta centros de tratamiento de adicciones, clínicas de aborto o centros de detención juvenil, lo que supone un
grave problema de privacidad[^analytics]. Por supuesto ~~la NSA~~ nadie se pondría a mirar
de forma sistemática este espacio de direcciones para obtener información sobre los
ciudadanos.

[^analytics]: Las direcciones [pueden servir](http://www.pnas.org/content/107/52/22436.long) también para identificar relaciones personales. Google ha actualizado desde entonces su creación de URLs incrementando la longitud de las mismas a 11 caracteres.

En su estado actual los acortadores de URLs no son seguros ni privados. Cuando acortas
una URL debes asumir que su contenido podrá ser accedido por ~~la NSA~~ cualquiera con
suficiente poder computacional.

# Centralización

Es imposible saber a donde apunta una URL acortada hasta hacer una petición al servicio, ya que las IDs se generan aleatoriamente. Esto supone que si un servicio se interrumpe millones de URLs dejarán de funcionar[^interrupcion]. [ArchiveTeam](http://archiveteam.org) tiene [una lista](http://archiveteam.org/index.php?title=TinyURL#Dead_or_Broken)
de más de 300 acortadores que han dejado de funcionar. La mayor parte de estos acortadores no cooperan en el archivado de sus URLs, lo que hace que estos links, acaben siendo simplemente secuencias de caracteres aleatorias.

[^interrupcion]: Los acortadores de URLs son además más propensos a ser cerrados: entran bajo la jurisdicción del país que provee el nombre de dominio, lo que provocó por ejemplo [el cierre](http://www.economist.com/node/17249654) de vb.ly por estar en contra de la sharia de Libia al permitir enlaces pornográficos.

Los enlaces rotos son un grave problema para la conservación de la información en Internet.
[Entre un 3% y un 5%](https://en.wikipedia.org/wiki/Link_rot#Prevalence) de los links desaparecen cada año, lo que dificulta acceder a las referencias de las publicaciones científicas y, en general, conservar Internet. Organizaciones como [Internet Archive](http://archive.org) archivan copias periódicas de la web, lo que nos permite acceder a documentos que de otra forma no estarían disponibles.

[Entre un 35% y un 90%](http://arxiv.org/pdf/1212.6177v2.pdf) de la web ha sido archivada alguna vez, pero cuando un acortador de URLs deja de funcionar dejamos de poder acceder a ese contenido. [URLTeam](http://tracker.archiveteam.org:1337/status) y [301Works](http://301Works.org) son proyectos que pretenden guardar las bases de datos de los servicios de acortadores, pero estos proyectos no son suficientes: debemos dar de una vez muerte a los acortadores.
