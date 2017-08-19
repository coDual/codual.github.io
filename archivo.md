---
layout: page
title: Archivo
permalink: /archivo
---

{% for tag in site.tags %}
<h3 id="{{ tag | first | slugify}}">{{ tag | first | capitalize }}</h3>
{% capture tag_name %}{{ tag | first }}{% endcapture %}
{% for post in site.tags[tag_name] %}
{% unless post.hidden %}
  <p class="post-list">
    <a href="{{ post.url }}">{{ post.title }}</a>&nbsp;-&nbsp;<span class="post-description">{{ post.description }}</span>
  </p>
{% endunless %}
{% endfor %}
{% endfor %}
