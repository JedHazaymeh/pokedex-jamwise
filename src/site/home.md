---
layout: base
title: Pokedex
permalink: index.html
---
*Welcome to the sample Jamwise site, which displays information about Pokemon.*

### Pre-rendered

The following list of Pokemon is fetched at build-time and each entry is transformed into a static page, using a subsequent fetch for detailed information:

{% for pokemon in data.pokemon_list %}
- [{{ pokemon.name }}](/dex/{{ pokemon.slug }}.html)
{% endfor %}

### Server-side Rendered

Pressing the button below will generate a random number with client-side JavaScript and request a server-side rendered page with details of the Pokemon with the ID number:

<button id="ssr-pokemon">SSR Random Pokemon</button>

<script>
document.getElementById('ssr-pokemon').addEventListener('click', async () => {
  const id = Math.floor(Math.random() * 999) + 1;
  window.location.href = `/serverless/pokemon_details.md?id=${id}`;
});
</script>

### Client-side Rendered

The following button will fetch a random Pokemon with client-side JavaScript and render the details in the browser:

<button id="csr-pokemon">CSR Random Pokemon</button>

<div id="pokemon-details" style="display: none;">
  <h4 id="pokemon-name"></h4>
  <img id="pokemon-image" src="" alt="Client-side rendered Pokemon image">
</div>

<script>
document.getElementById('csr-pokemon').addEventListener('click', async () => {
  const id = Math.floor(Math.random() * 999) + 1;
  const response = await fetch(`/serverless/fetch_details.py?id=${id}`);
  const pokemon = await response.json();
  document.getElementById('pokemon-name').textContent = pokemon.name;
  document.getElementById('pokemon-image').src = pokemon.image;
  document.getElementById('pokemon-details').style.display = 'block';
});
</script>
