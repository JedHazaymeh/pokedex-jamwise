---
layout: base
pagination:
  data: pokemon
  alias: entry
permalink: dex/{{ entry.slug }}.html
title: "#{{ entry.id }} - {{ entry.name }}"
---

![{{ entry.name }}]({{ entry.sprites.front_default }})

### Types
{% for type in entry.types %}
- {{ type }}
{% endfor %}

### Pokedex Entry
{{ entry.flavor_text }}
