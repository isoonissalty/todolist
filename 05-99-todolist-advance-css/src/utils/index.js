export const formatDate = (today) => {
  let y = today.getFullYear()
  let m = today.getMonth() + 1
  let d = today.getDate()
  let t = `${y}-${m < 10 ? `0${m}` : `${m}`}-${d < 10 ? `0${d}` : d}`
  return t
}

export const formatColor = (filter) => {
  let r = parseInt(`0x${filter.slice(1, 3)}`)
  let g = parseInt(`0x${filter.slice(3, 5)}`)
  let b = parseInt(`0x${filter.slice(5, 7)}`)
  r = Math.round(r / Math.floor(255 / 3)) + 1
  g = Math.round(g / Math.floor(255 / 3)) + 1
  b = Math.round(b / Math.floor(255 / 3)) + 1
  let colorRange = ['#000000', '#0000ff', '#00ff00', '#00ffff', '#ff0000', '#ff00ff', '#ffff00']
  
  console.log(`${Math.ceil(1 - (1 / r))}${Math.ceil(1 - (1 / g))}${Math.ceil(1 - (1 / b))}`)
  console.log(parseInt(`${Math.ceil(1 - (1 / r))}${Math.ceil(1 - (1 / g))}${Math.ceil(1 - (1 / b))}`, 2))

  return colorRange[parseInt(`${Math.ceil(1 - (1 / r))}${Math.ceil(1 - (1 / g))}${Math.ceil(1 - (1 / b))}`, 2)]
}