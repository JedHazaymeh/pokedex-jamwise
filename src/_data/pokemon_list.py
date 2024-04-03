import requests
import random

def map_pokemon(pokemon):
  return {
    'slug': pokemon['name'],
    'name': ' '.join([s.capitalize() for s in pokemon['name'].split('-')])
  }

def handler(req, ctx):
  url = f"https://pokeapi.co/api/v2/pokemon?offset={random.randint(1, 1000)}&limit=10"
  data = requests.get(url).json()

  return [map_pokemon(x) for x in data['results']]
