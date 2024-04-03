---
layout: base
title: Pokedex
permalink: index.html
---
*Welcome to the sample Jamwise site, which displays information about Pokemon.*

### Build-time Data

The following list of Pokemon is fetched at build-time and each entry is transformed into a static page, using a subsequent fetch for detailed information:

{% for pokemon in data.pokemon_list %}
- [{{ pokemon.name }}](/dex/{{ pokemon.slug }}.html)
{% endfor %}
