function getLevelRankIcon(htmlString: string, option: string) {
  const regex = new RegExp(
    `<text[^>]*\\sdata-testid="${option}"[^>]*>([^<]*)<\\/text>`
  )
  const match = htmlString.match(regex)
  return match ? match[1].trim() : null
}

async function fetchGitHubAPIData(
  githubScore: any[],
  GITHUB_API_BASE_URL: string,
  GITHUB_README_API: string
) {
  try {
    const res = await fetch(`${GITHUB_API_BASE_URL}/albertlnz`) // only repositories
    const data = await res.json()
    const res2 = await fetch(`${GITHUB_README_API}albertlnz`) // the rest
    const data2 = await res2.text()

    githubScore.forEach((item) => {
      item.option === 'repositories'
        ? (item.value = data.public_repos)
        : (item.value = getLevelRankIcon(data2, item.tagId) as string)
    })
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export default fetchGitHubAPIData
