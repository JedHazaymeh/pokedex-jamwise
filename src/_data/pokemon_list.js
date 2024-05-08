const fetchData = async (url) => await fetch(url).then((res) => res.json())
const unslugify = (text) => text.split('/[\s-]+/').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

const mapSpecies = async (species) => ({
  id: species.id,
  slug: species.name,
  names: species.names.reduce((acc, name) => {
    acc[name.language.name] = name.name
    return acc
  }, {}),
  genera: species.genera.reduce((acc, genus) => {
    acc[genus.language.name] = genus.genus
    return acc
  }, {}),
  entries: species.flavor_text_entries.reduce((acc, entry) => {
    const languageEntry = acc[entry.language.name] ?? {}
    languageEntry[entry.version.name] = entry.flavor_text
    acc[entry.language.name] = languageEntry
    return acc
  }, {}),
  forms: await Promise.all(species.varieties.map(async (form) => {
    return mapForm(await fetchData(form.pokemon.url))
  })),
})

const mapForm = (form) => ({
  name: unslugify(form.name),
  image: form.sprites.other['official-artwork'].front_default,
  types: form.types.map((type) => unslugify(type.type.name)),
  abilities: form.abilities.map((ability) => unslugify(ability.ability.name)),
  stats: form.stats.map((stat) => ({
    name: unslugify(stat.stat.name),
    value: stat.base_stat,
  })),
  moves: form.moves.map((move) => unslugify(move.move.name)),
})

const fetchPokemon = async () => {
  console.log('Fetching Pokemon data...')

  const url = `https://pokeapi.co/api/v2/pokemon-species?limit=1025`
  const { results } = await fetchData(url)

  return Promise.all(results.map(async (species) => {
    return await mapSpecies(await fetchData(species.url))
  }))
}

export default await fetchPokemon()

export const config = {
  cache: true,
}
