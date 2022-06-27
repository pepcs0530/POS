import { useState, useEffect } from 'react'
import Axios from "axios"

import "./../contents.css"
import "./Order.css"

import Tableorder from '../../components/Tableorder/Tableorder'

import { useDispatch, useSelector } from 'react-redux'

let ordernumber = 1

function Order() {

    const [orderitem, setorderitem] = useState("")

    // const [balance, setbalance] = useState(0)

    const dispatch = useDispatch()

    const OrderTable = useSelector((state) => state.product?.OrderTable)

    const onChange = (event) => {
        setorderitem(event.target.value)
    }

    const onKeyDown = (event) => {
        if (event.key === "Enter") {

            dispatch.product.fetchOrderlist(orderitem)
            setorderitem("")

            // ordernumber += 1
            // setbalance(balance + item.number)
        }
    }

    return (
        <div className="content">
            <div className="divinputorder">
                <input className="inputbox" value={orderitem} onChange={onChange} onKeyDown={onKeyDown} />
            </div>
            <Tableorder OrderTable={OrderTable} />
        </div>
    )
}
export default Order