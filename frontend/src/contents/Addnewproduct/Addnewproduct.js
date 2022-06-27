import { useState } from 'react'
import Axios from "axios"

import "./../contents.css"
import "./Addnewproduct.css"
import { Link } from 'react-router-dom'

function Addnewproduct() {

    const [prod_name, setProd_name] = useState("")
    const [prod_desc, setProd_desc] = useState("")
    const [prod_price, setProd_price] = useState("")
    const [prod_barcode, setProd_barcode] = useState("")

    const adddata = () => {
        Axios.post('http://localhost:3001/product/create', {
            prod_name: prod_name,
            prod_desc: prod_desc,
            prod_price: prod_price,
            prod_barcode: prod_barcode
        })
    }

    return (
        <div className="content">
                <table>
                    <tbody>
                        <tr>
                            <th>รหัสสินค้า</th>
                            <td><input name="prod_id" type="text" onChange={(event)=> {setProd_barcode(event.target.value)}}/></td>
                        </tr>
                        <tr>
                            <th>ชื่อสินค้า</th>
                            <td><input name="prod_name" type="text" onChange={(event)=> {setProd_name(event.target.value)}}/></td>
                        </tr>
                        <tr>
                            <th>คำอธิบายสินค้า</th>
                            <td><input name="prod_desc" type="text" onChange={(event)=> {setProd_desc(event.target.value)}}/></td>
                        </tr>
                        <tr>
                            <th>ราคา</th>
                            <td><input name="prod_price" type="text" onChange={(event)=> {setProd_price(event.target.value)}}/></td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/warehouse"><button onClick={adddata}>เพิ่มสินค้าเข้าคลังสินค้า</button></Link>
        </div>
    )
}
export default Addnewproduct