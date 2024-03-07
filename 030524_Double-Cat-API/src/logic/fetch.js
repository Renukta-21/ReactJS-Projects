const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export async function loadFact() {
  const response = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await response.json()
  return data.fact
}
