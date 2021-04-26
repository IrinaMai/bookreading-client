import Select from 'react-select'
import { xorWith, isEqual } from 'lodash'
import { useSelector } from 'react-redux'
import {
  getBooksList,
  getAllBooks,
} from '../../redux/selectors/trainingSelectors'

const BookSelect = ({ onChange, value }) => {
  const books = useSelector(getAllBooks) // all books from store
  const booksList = useSelector(getBooksList)

  const booksWillRead = books
    .filter(({ status }) => status === 'WillRead')
    .map(({ _id, title, year, status, author, pages }) => ({
      _id,
      title,
      year,
      status,
      author,
      pages,
    }))

  const selectBooks = xorWith(booksWillRead, booksList, isEqual)

  const filteredOptions = selectBooks.map(book => ({
    ...book,
    label: book.title,
    value: book.title,
  }))

  const customStyles = {
    option: (provided, _) => ({
      ...provided,
      padding: '3px',
    }),
    control: provided => ({
      ...provided,
      fontSize: '14px',
    }),
    menu: provided => ({ ...provided, zIndex: 9999, padding: '5px' }),
    menuPortal: base => ({ ...base, zIndex: 9999 }),
  }

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

  const defaultValue = (filteredOptions, value) => {
    return filteredOptions
      ? filteredOptions.find(option => option.value === value)
      : ''
  }

  return (
    <Select
      value={defaultValue(filteredOptions, value)}
      options={filteredOptions}
      onChange={value => onChange(value)}
      theme={customTheme}
      placeholder="Обрати книги з бібліотеки"
      autoFocus
      components={{
        IndicatorSeparator: () => null,
      }}
      maxMenuHeight={100}
      menuPlacement="auto"
      menuPortalTarget={document.body}
      menuPosition={'fixed'}
      styles={customStyles}
      myFontSize="10px"
      isDisabled={!filteredOptions.length}
      // isMulti
    />
  )
}

export default BookSelect
