import Select from 'react-select'
import { useSelector } from 'react-redux'
import {getHardcodeBooks} from '../../redux/selectors/trainingSelectors'

const BookSelect = ({ onChange }) => {

  const books = useSelector(getHardcodeBooks)// temporary selector
  console.log(`books`, books)

  // const books = [
  //   { label: 'Book1', id: '1', name: 'Book1' },
  //   { value: 'book2', label: 'Book2' },
  //   { value: 'book3', label: 'Book3' },
  //   { value: 'book4', label: 'Book4' },
  //   { value: 'book5', label: 'Book5' },
  // ]

  const customStyles = {
    option: (provided, _) => ({
      ...provided,
      padding: '3px',
    }),
    control: provided => ({
      ...provided,
      fontSize: '14px',
    }),
    menu: provided => ({ ...provided, zIndex: 9999, padding:'5px' }),
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

  return (
    <Select
      onChange={onChange}
      options={books}
      theme={customTheme}
      placeholder="Обрати книги з бібліотеки"
      // isMulti
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
    />
  )
}

export default BookSelect
