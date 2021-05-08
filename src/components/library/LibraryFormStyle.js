import styled from 'styled-components'

const Wrapper = styled.div`
background-color: #F6F7FB;
display: block;


@media (max-width: 767px) {
margin-top: 52px;
margin-bottom: 109px;
margin-left: auto;
margin-right: auto;
max-width: 450px;
}

@media (max-width: 480px) {
margin-top: 52px;
margin-bottom: 109px;
margin-left: 25px;
margin-right: 25px;
max-width: 450px;
}


font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 2.714;
color: #898F9F;

    .bookLabel {
        display: block;
        height: 80px;
        margin-top: 10px;
        &.bookTitle {
            margin-top: 0;
        }
    }


    .bookInput {

        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #898F9F;
        
        height: 42px;
        padding: 2px 13px;
        width: 100%;
   
        background: #F6F7FB;
        border: 1px solid #A6ABB9;
        outline: none;
        
        &:focus {
        background: #FFFFFF;
        border: none;
        box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
        }
    }

    
    .bookButton {
        font-weight: 500;
        font-size: 14px;
        line-height: 2.714;
        
        display: block;
        width: 171px;
        height: 42px;
        margin-top: 37px;
        margin-left: auto;
        margin-right: auto;
        outline: none;
        cursor: pointer;
        
        color: #000000;
        background: #F6F7FB;
        border: 1px solid #242A37;
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

                
        &:hover:not([disabled]),
        &:focus:not([disabled]) {
            outline: none;
            border: 1px solid #6d7a8d;
            background-color: #6d7a8d;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
            color: #fff;


        }
        &:disabled {
            color: #6d7a8d;
            border: 1px solid #6d7a8d;
        }
    
    }

    .bookError {
        display: block;
        /* position: absolute; */
        color: #F25137;
        font-weight: bold;
        font-size: 8px;
    }

@media (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 594px;

    .planshetWrapper {
        display: flex;
        justify-content: space-between;
    }

    .bookAuthor {
        width: 250px;
    }
    .bookNumber {
        width: 145px
    }
    .bookButton {
        margin-top: 42px;
    }

}


@media (min-width: 1280px) {

    display: flex;
    flex-wrap: nowrap;
    align-items: center;
      
    margin-top: 30px;
    margin-bottom: 30px;
    width: 1202px;
    
    form {
        display: flex;
        width: 100%;
        align-items: flex-end;
        margin-left: auto;
        margin-right: auto;
    }
   

    .bookTitle {
        width: 346px;
        margin-right: 15px;
        margin-top: 0;
    }
    .bookAuthor {
        width: 250px;
        margin-right: 15px;
        margin-top: 0;
    }
    .bookNumber {
        width: 134px;
        margin-right: 15px;
        margin-top: 0;
        & .bookInput {
            width: 97%;
        }
    }
    .bookButton {
        margin-left: 26px;
        margin-top: 0;
        margin-bottom: 1px;
        margin-right: 85px;

    }

}




`

export default Wrapper
