---
layout: base
pagination:
  data: pokemon_list
  as: entry
fetch:
  function: pokemon_details.py
  as: pokemon
  params:
    slug: "{{ entry.name }}"
permalink: "dex/{{ pokemon.name }}.html"
title: "#{{ pokemon.id }} - {{ pokemon.name }}"
---

![{{ pokemon.name }}]({{ pokemon.sprites.front_default }})

### Types

{% for slot in pokemon.types %}
- {{ slot.type.name }}
{% endfor %}

### Base Stats

{% for slot in pokemon.stats %}
- {{ slot.stat.name }}: {{ slot.base_stat }}
{% endfor %}
