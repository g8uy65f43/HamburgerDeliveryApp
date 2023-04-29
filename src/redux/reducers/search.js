import {SEARCH} from "../countant"

export default  function searchGoots  (pre = 0,action) {
    const { type, data } = action
switch (type) {
    case SEARCH:
return data.length === 0 ? null:data
    default:
        return pre
}
}