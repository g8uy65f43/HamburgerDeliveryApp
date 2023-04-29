import { ADD, MINUS, RESET } from "../countant"

export default function countReducer(pre = [], action) {
    const { type, data } = action
    switch (type) {
        case ADD:
            if (pre !== "" && pre !== "initialization" && pre instanceof Array) {
                let arr = [data, ...pre]
                let map = new Map();
                for (let item of arr) {
                    if (!map.has(item.id)) {
                        map.set(item.id, item);
                    } else {
                        const newarr = { id: item.id, count: item.count + 1, price: item.price, title: item.title, img: item.img }
                        map.set(item.id, newarr);
                    }
                }
                const mapdata = [...map.values()]
                const aftmapdata = mapdata.filter(v => {
                    return v.count !== 0
                })
                pre = [...aftmapdata]
                return pre;
            } else {
                return pre = [data]
            }
        case MINUS:
            if (pre !== "" && pre !== "initialization" && pre instanceof Array) {
                let arr = [data, ...pre]
                let map = new Map();
                for (let item of arr) {
                    if (!map.has(item.id)) {
                        map.set(item.id, item);
                    } else {
                        const newarr = { id: item.id, count: item.count - 1, price: item.price, title: item.title, img: item.img }
                        if (item.count - 1 >0){
                        map.set(item.id, newarr);
                    }else{
                    map.delete(item.id)
                    }
                    }
                }
                const mapdata = [...map.values()]
                const aftmapdata = mapdata.filter(v => {
                    return v.count !== []
                })
                pre = [...aftmapdata]
                return pre;
            } else {
                return pre = [data]
            }
        case RESET:
            return pre = []
        default:
            return pre

    }

}
