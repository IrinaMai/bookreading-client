import BooksWrapper from './BooksListContainerStyled'
const BooksListContainer = ({ children }) => (
  <BooksWrapper>
    <div className="labelContainer">
      <span className="bookLabel">Назва книги</span>
      <span className="bookLabel">Автор</span>
      <span className="bookLabel">Рік</span>
      <span className="bookLabel">Стор.</span>
    </div>
    {children}
  </BooksWrapper>
)

export default BooksListContainer
