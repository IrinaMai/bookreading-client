import styled from 'styled-components'

const BeenReadStyles = styled.li`
list-style-type: none;

.list-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: var(--secondary-background);
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
}

.item {
  display: inline-block;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 14px;
}

.list-header {
  display: flex;
  list-style-type: none;
  margin-bottom: 14px;
} 

.header-item {
  color: var(--secondary-text);
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
}

.grayIcon {
  fill: #6D7A8D;
}

.item-icon {
  display: flex;
  align-items: center;
  margin-right: 18px;
}

.description-container {
  display: flex;
}

.summaryBtn {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 38px;
  color: var(--secondary-background);
  border: none;
  background: #6D7A8D;
  padding: 1px 35.7px 1px 35.7px  ;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}

.summaryBtn:hover {
  cursor: pointer;
  background: #47566F;
}

@media screen and (max-width: 767px) {
  .item, .header-item {
    font-size: 12px;
  }

  .item:not(:last-child),
  .list-item {
    margin-bottom: 15px;
  }

  .header-item {
    display: inline-block;
    width: 70px;
  }

  .list-header {
    flex-direction: column;
    margin-right: 30px;
    margin-bottom: 0;
  }

  .list-item {
    flex-direction: column;
    align-items: start;
    position: relative;
    flex-wrap: wrap;
    margin-bottom: 15px;
    margin-left: auto;
    margin-right: auto;
    max-width: 270px;
    padding: 18px 5px 25px 55px;
  }

  .list-item li {
    margin-bottom: 0;
  }

  .header-name {
    display: none;
  }
  
  .item-icon {
    position: absolute;
    top: 21px;
    left: 20px;
    margin-right: 13px;
    margin-bottom: auto;
  }

  .description-container {
    width: 100%;
    flex-direction: column;
    margin-bottom: 24px;
  }

  .item-book {
    width: 100%;
    padding-right: 20%;
    margin-bottom: 17px;
  }

  .item-pages {
    margin: 0;
  }

  .item-rating {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }

  .ratingHidden {
    display: none;
  }
  
  .summaryBtn {
    width: 127px;
    margin-left: 16px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1279px) {
  .list-item {
    padding: 11px 26px 11px 20px;
  }

  .header-name {
    width: 217px;
  }

  .header-author {
    width: 128px;
  }

  .header-year {
    width: 60px
  }

  .header-pages {
    width: 60px;
  }

  .ratingHidden {
    display: none;
  }

  .item-book {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    min-width: 155px;
    max-width: 155px;
    padding-right: 25px;
    height: 34px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .item-author {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 34px;
    width: 125px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .item-year {
    width: 71px;
  }

  .item-pages {
    text-align: end;
    padding-right: 25px;
    width: 58px
  }

  .item-rating {
    width: 108px;
  }

  .summaryBtn {
    padding: 1px 11px 1px 11px  ;
  }

  .dots {
    display: none;
  }

  .description-container {
    display: flex;
    align-items: center;
    width: 442px;
  }
}

@media screen and (min-width: 1280px) {
  .list-item {
    padding: 11px 85px 11px 20px;
  }

  .header-name {
    width: 362px;
  }

  .header-author {
    width: 230px;
  }

  .header-year {
    width: 96px;
  }

  .header-pages {
      width: 149px;
  }

  .item-book {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 300px;
    max-width: 300px;
    padding-right: 40px;
  }

  .item-author {
    width: 225px;
  }

  .item-year {
    min-width: 90px;
  }

  .item-pages {
      display: flex;
      justify-content: flex-end;
      width: 165px;
      padding-right: 110px;
  }

  .item-rating {
      width: 150px;
  }

  .dots {
    display: none;
  }

  .description-container {
    display: flex;
    align-items: center;
    width: 756px;
  }
}
`

export default BeenReadStyles