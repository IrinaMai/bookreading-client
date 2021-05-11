import styled from 'styled-components'

const LibraryWrapper = styled.div`
@media (max-width: 767px) {
padding-top: ${({ booklist }) => (booklist ? '0' : '25px')};;
margin-top: 25px;
margin-bottom: 109px;
margin-left: auto;
margin-right: auto;
/* max-width: 430px; */
    .bookTitle {  
        margin-top: -15px !important;
    };
};

@media (max-width: 767px) {
    .bookList-form {
    padding-left: 25px;
    padding-right: 25px;
    }
/* margin-left: 25px;
margin-right: 25px; */

};





`
export default LibraryWrapper
