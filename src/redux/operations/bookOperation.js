import { postBookRequest, postBookSuccess, postBookError} from '../actions/bookAction';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000/api';

const bookOperation = data => async dispatch => {
   dispatch(postBookRequest());
   try {
       const result  = await axios.post(`/library`, data)
       console.log("result", result.data)
       dispatch(postBookSuccess(result.data))

   }catch (error) {
       dispatch(postBookError(error))
   }
}

export default bookOperation;