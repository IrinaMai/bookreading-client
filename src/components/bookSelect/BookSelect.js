import Select from 'react-select'

const BookSelect = ({ onChange }) => {
  const books = [
    { label: 'Book1', id: '1', name: 'Book1' },
    { value: 'book2', label: 'Book2' },
    { value: 'book3', label: 'Book3' },
    { value: 'book4', label: 'Book4' },
    { value: 'book5', label: 'Book5' },
  ]

  const customTheme = theme => {
    return {
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary25: '#ff6b08',
        primary: '#B1B5C2',
      },
    }
  }

  return (
    <Select
      onChange={onChange}
      options={books}
      theme={customTheme}
      placeholder="Обрати книги з бібліотеки"
      isMulti
      autoFocus
      components={{
        IndicatorSeparator: () => null,
      }}
      maxMenuHeight={200}
      menuPlacement="auto"
    />
  )
}

export default BookSelect
