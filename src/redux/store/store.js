import { legacy_createStore as createStore,combineReducers } from "redux";
import Count from '../reducers/count'
import Gootsinfo from "../reducers/gootsinfo"
import Gopay from "../reducers/car"
import Search from "../reducers/search"
const allReducer = combineReducers({
Count,
Gootsinfo,
Gopay,
Search
})
export default  createStore(allReducer)
