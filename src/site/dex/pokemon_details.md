---
layout: base
pagination:
  data: pokemon_list
  as: page
fetch:
  function: fetch_details.py
  as: pokemon
  params:
    id: "{{ page.slug }}"
permalink: dex/{{ page.slug }}.html
title: "#{{ pokemon.id }} - {{ pokemon.name }}"
---

![{{ pokemon.name }}]({{ pokemon.image }})

### Types

{% for type in pokemon.types %}
- {{ type }}
{% endfor %}

### Abilities

{% for ability in pokemon.abilities %}
- {{ ability }}
{% endfor %}

### Base Stats

{% for stat in pokemon.stats %}
- {{ stat[0] }}: {{ stat[1] }}
{% endfor %}
