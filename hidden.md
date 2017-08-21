---
layout: page
title: Ocultos
hidden: true
---

Esta es una lista de posts ocultos. Estos posts no están acabados o no han sido revisados:

<div class="posts">
  {% for post in site.posts %}
  {% if post.hidden %}
  <div class="post">
    <span class="post-title"><a href="{{ post.url }}">{{ post.title }}</a></span> -
    <span class="post-tags">
      {% for tag in post.tags %}
        <a class="tag" href="/archivo#{{ tag | slugify }}">#{{ tag }}</a>&nbsp;
      {% endfor %}
    </span>
    <div class="post-description">
      {{ post.description }}
    </div>
  </div>
  {% endif %}
  {% endfor %}
</div>
