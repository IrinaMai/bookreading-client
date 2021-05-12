const convertDate = str => {
  let date = new Date(str),
    mnth = ('0' + (date.getMonth() + 1)).slice(-2),
    day = ('0' + date.getDate()).slice(-2)
  return [date.getFullYear(), mnth, day].join('-')
}

export default convertDate

// Sat Apr 24 2021 00:00:00 GMT+0300 => ISO format: 2021-04-24
