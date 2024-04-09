import requests

def map_pokemon(pokemon):
  return {
    'id': pokemon['id'],
    'slug': pokemon['name'],
    'name': ' '.join(pokemon['name'].split('-')).title(),
    'types': [t['type']['name'].title() for t in pokemon['types']],
    'image': pokemon['sprites']['other']['official-artwork']['front_default'],
    'stats': {s['stat']['name'].title(): s['base_stat'] for s in pokemon['stats']},
    'abilities': [a['ability']['name'].title() for a in pokemon['abilities']],
  }

def handler(req, ctx):
  pokemon_id = req['params']['id'] # slug or id

  base_url = f"https://pokeapi.co/api/v2/pokemon/{pokemon_id}"
  data = requests.get(base_url).json()

  return map_pokemon(data)