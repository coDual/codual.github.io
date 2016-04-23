---
layout: page
title: Archivo
permalink: /archivo
---

# Etiquetas

{% for tag in site.tags %}
- [{{ tag | first | capitalize }}](#{{ tag | first | slugify }})
{% endfor %}

{% for tag in site.tags %}
<h3 id="{{ tag | first | slugify}}">{{ tag | first | capitalize }}</h3>
{% capture tag_name %}{{ tag | first }}{% endcapture %}
{% for post in site.tags[tag_name] %}
  <p class="post-list">
    <a href="{{ post.url }}">{{ post.title }}</a>
  </p>
{% endfor %}
{% endfor %}
