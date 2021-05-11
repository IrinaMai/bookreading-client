import styled from 'styled-components'

const LibraryWrapper = styled.div`
@media (max-width: 767px) {
padding-top: ${({ booklist }) => (booklist ? '0' : '42px')};;
margin-top: 25px;
margin-bottom: 109px;
margin-left: auto;
margin-right: auto;
    .bookTitle {  
        margin-top: -12px !important;
    };
};






`
export default LibraryWrapper
