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

export function prepareCorrectVariousRoutesPaths(contents) {
  const paths = []

  for (const content of contents) {
    if (content.collection === 'posts') {
      const { id, title, language } = content.data
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

    if (content.collection === 'projects') {
      const { id, title, language } = content.data
      const titleCleaned = title
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s-]/g, '')
        .replaceAll(' ', '-')
        .toLowerCase()
      paths.push({
        params: {
          pageLang: language,
          projectIdTitle: `${id}-${titleCleaned}`,
        },
      })
    }
  }

  return paths
}
