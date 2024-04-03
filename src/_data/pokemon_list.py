import requests

def handler(req, ctx):
  url = "https://pokeapi.co/api/v2/pokemon?limit=9"
  data = requests.get(url).json()

  return data['results']
