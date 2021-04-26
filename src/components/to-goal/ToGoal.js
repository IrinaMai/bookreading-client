import { connect } from 'react-redux'
import ToGoalStyled from "./ToGoalStyled"

/////////////////////////////////////////////// selectors test ////////////////////
// const getTrainingBooksCount = state => state.training.booksCount;
// const getTrainingUnreadBooksCount = state => state.training.unreadBooksCount;


const Goal = () => {

    // const {
    //     showBooksLeft,
    //     booksToRead,
    //     trainingPeriodDays,
    //     booksLeft,
    // } = this.props;

    return (
        <ToGoalStyled>
            <h2 className="bookTitle">Моя мета прочитати</h2>
            <div className="booksCounterContainer">
                <div className="booksCounter"><p className="counterNumber">2</p></div>
                {/* <div className="booksCounter">{booksToRead}</div> */}
                {/* <div className="booksCounter">
        {trainingPeriodDays}
      </div> */}
                <div className="booksCounter">
                    <p className="counterNumber">25</p>

                </div>
                {/* {showBooksLeft && ( */}
                {/* // <div className="booksCounterColor">
        //   {booksLeft}
        // </div> */}
                {/* //   )} */}
                {/* <div className="booksCounter">
                    <p className="counterNumber">3 </p>
                </div> */}
                <div className="counterLabelContainer">
                    <p className="counterLabel">Кількість книжок</p>
                    <p className="counterLabel">Кількість днів</p>
                    {/* {showBooksLeft && ( */}
                    {/* <p className="counterLabel">Залишилось книжок</p> */}
                    {/* )} */}
                </div>
            </div>
        </ToGoalStyled>
    );
}

// const mapStateToProps = state => ({
//     booksToRead: getTrainingBooksCount(state),
//     // trainingPeriodDays: getTrainingDaysGoal(state),
//     booksLeft: getTrainingUnreadBooksCount(state),
// });
// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Goal);
export default Goal