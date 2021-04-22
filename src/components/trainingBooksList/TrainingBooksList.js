import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import Wrapper  from "./TrainingBooksListStyled";

const TrainingBooksList = () => {

  const dispatch = useDispatch();


  return (
    <Wrapper>
      <ul>
        hey
      </ul>
    </Wrapper>
  );
};

export default TrainingBooksList;