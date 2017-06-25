const calcDateDifference = date => {
  const today = new Date().getTime()
  const comparisonDate = new Date(date).getTime()
  const difference = Math.abs(today - comparisonDate)
  const days = Math.floor(difference / ( 1000 * 3600 * 24 ))

  return `You were born ${days} days ago!`
}

export default calcDateDifference
