export const getDatabase = (data, key, value) => {
  const filter = []

  data.forEach((item) => {
    if (item[key] === value) {
      filter.push(item)
    }

  })

  return filter
}