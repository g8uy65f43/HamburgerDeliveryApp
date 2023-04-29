
export default function countReducer(pre = 0, action) {
    const { type } = action
    switch (type) {
        case "gopay":
            return pre = 1
        case "lastcheck":
            return pre = 2
        case "cxl":
            return pre = 0
        default:
            return pre
    }
}
