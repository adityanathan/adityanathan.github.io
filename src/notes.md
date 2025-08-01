---
title: Notes
showInNav: false
layout: "base.njk"
draft: true
---

<ul>
  {% for note in collections.notes %}
    <li>
      <a href="{{ note.url }}">{{ note.data.title | default:note.fileSlug }}</a>
    </li>
  {% endfor %}
</ul>
