import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import Axios from "axios"

import "./Editproduct.css"
import "./../contents.css"

function Editproduct() {

    const { editvalueid } = useParams()

    // state get data
    const [editproduct, seteditproduct] = useState([])
    // state edit data
    const [prod_id, setprod_id] = useState("")
    const [prod_name, setProd_name] = useState("")
    const [prod_desc, setProd_desc] = useState("")
    const [prod_price, setProd_price] = useState("")
    const [prod_barcode, setProd_barcode] = useState("")

    const geteditproduct = () => {
        Axios.get('http://localhost:3001/product/geteditproduct', {
            params: { editdata_id: editvalueid }
        })
        .then((response) => {
            seteditproduct(response.data)
            setprod_id(response.data[0].prod_id)
            setProd_name(response.data[0].prod_name)
            setProd_desc(response.data[0].prod_desc)
            setProd_price(response.data[0].prod_price)
            setProd_barcode(response.data[0].prod_barcode)
        })
    }

    const editdata = () => {
        Axios.patch('http://localhost:3001/product/editproduct', {
            prod_id: prod_id,
            prod_name: prod_name,
            prod_desc: prod_desc,
            prod_price: prod_price,
            prod_barcode: prod_barcode
        })
    }

    useEffect(() => {
        geteditproduct()
    }, [])

    return (
        <div className="content">
            <table>
                {editproduct.map((val) => {
                    return (
                        <tbody key={val.prod_id}>
                            <tr>
                                <th>รหัสสินค้า</th>
                                <td><input name="prod_id" type="text" defaultValue={val.prod_id} onChange={(event) => { setprod_id(event.target.value) }} disabled /></td>
                            </tr>
                            <tr>
                                <th>รหัสสินค้า</th>
                                <td><input name="prod_barcode" type="text" defaultValue={val.prod_barcode} onChange={(event) => { setProd_barcode(event.target.value) }} /></td>
                            </tr>
                            <tr>
                                <th>ชื่อสินค้า</th>
                                <td><input name="prod_name" type="text" defaultValue={val.prod_name} onChange={(event) => { setProd_name(event.target.value) }} /></td>
                            </tr>
                            <tr>
                                <th>คำอธิบายสินค้า</th>
                                <td><input name="prod_desc" type="text" defaultValue={val.prod_desc} onChange={(event) => { setProd_desc(event.target.value) }} /></td>
                            </tr>
                            <tr>
                                <th>ราคา</th>
                                <td><input name="prod_price" type="text" defaultValue={val.prod_price} onChange={(event) => { setProd_price(event.target.value) }} /></td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
            <Link to="/warehouse"><button onClick={editdata}>แก้ไขข้อมูลสินค้า</button></Link>
        </div>
    )
}
export default Editproduct