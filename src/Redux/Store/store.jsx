import Rootreducer from "../Reducers/rootReducer"
import { createStore } from "redux"
const storeFactory =()=>createStore(
    Rootreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   
  );

export default storeFactory