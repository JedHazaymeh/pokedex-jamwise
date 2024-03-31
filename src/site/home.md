---
layout: base
title: Pokedex
permalink: index.html
---
*Welcome to the sample Jamwise site, which displays information about Pokemon.*

### Build-time Data

The following Pokemon data was provided at build-time and transformed into static HTML pages:

{% for pokemon in data.pokemon %}
- [{{ pokemon.name }}](/dex/{{ pokemon.slug }}.html)
{% endfor %}
