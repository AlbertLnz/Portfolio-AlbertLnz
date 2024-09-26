export function prepareCorrectSingleRoutePath(post) {
  const { id, title } = post.data
  const titleCleaned = title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replaceAll(' ', '-')
    .toLowerCase()
  return `${id}-${titleCleaned}`
}

export function prepareCorrectVariousRoutesPaths(posts) {
  const paths = []

  for (const post of posts) {
    const { id, title, language } = post.data
    const titleCleaned = title
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replaceAll(' ', '-')
      .toLowerCase()
    paths.push({
      params: {
        pageLang: language,
        postIdTitle: `${id}-${titleCleaned}`,
      },
    })
  }

  return paths
}
