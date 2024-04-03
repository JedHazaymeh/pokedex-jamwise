import requests

def handler(req, ctx):
  pokemon_slug = req['params']['slug']

  url = f"https://pokeapi.co/api/v2/pokemon/{pokemon_slug}"
  data = requests.get(url).json()

  return data