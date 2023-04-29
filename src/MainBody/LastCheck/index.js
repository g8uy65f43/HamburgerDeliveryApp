import Backdrop from "../../UI/Backdrop/index"
import React from 'react'
import LastCheckCSS from "./LastCheck.module.css"

export default function LastCheck(props) {
    const { count } = props
    let alltoto = null
    function paygoots() {
        if (count instanceof Array && count !== 0 && alltoto !== 0) {
            const alltotoarr = []
            count.map(v => {
                return alltotoarr.push(v.price * v.count)
            })
            alltoto = alltotoarr.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
            })
            return true
        }
        return false
    }
    function MIX() {
        props.RESETCOUNT()
        props.CXL()
    }
    return (
        <div>
            <Backdrop onClick={props.CXL} />
            {paygoots()}
            <p className={LastCheckCSS.cslbt} onClick={v=> MIX()}><i className={"icofont-brand-nexus"}></i></p>
            <div className={LastCheckCSS.gootBox} >
                <span className={LastCheckCSS.gootBoxText}>訂單詳情</span>
                <hr />
                {count.map(v => {
                    return (
                        <div key={v.id} >
                            <ul className={LastCheckCSS.goots}>
                                <li className={LastCheckCSS.gootimg} >
                                    <img src={v.img} alt="gootsimg" />
                                </li>
                                <li className={LastCheckCSS.gootText}>
                                    <span className={LastCheckCSS.maney}><h3>{v.title} {v.count} x {v.price}</h3><h3>   $ {v.price * v.count}</h3></span>
                                </li>
                            </ul>
                        </div>
                    )
                })}
                <h2 className={LastCheckCSS.toto}>合計:{alltoto}元</h2>
            </div>
        </div>
    )
}