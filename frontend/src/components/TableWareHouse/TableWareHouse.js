import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import Axios from "axios"

import "./../components.css"
import "./TableWareHouse.css"

import { useDispatch, useSelector } from 'react-redux'

function TableWareHouse({ ProductTable }) {

    const dispatch = useDispatch()

    const delete_product = (prod_id) => {
        Axios.delete('http://localhost:3001/product/delete', {
            data: {
                delete_prod_id: prod_id
            }
        })
        ProductTable = dispatch.product.fetchProductlist()
    }

    const modal = () => {
        return (
            <div>modal</div>
        )
    }

    return (
        <div className="divtable">
            <table className="product_table table">
                <thead>
                    <tr>
                        <th width="5%">prod_id</th>
                        <th width="5%">prod_id</th>
                        <th width="10%">prod_barcode</th>
                        <th width="30%">prod_name</th>
                        <th width="30%">prod_desc</th>
                        <th width="10%">prod_price</th>
                        <th width="10%">action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ProductTable?.map((val, index) => {
                            const pathname = "/warehouse/editproduct/" + val.prod_id
                            return (
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{val.prod_id}</td>
                                    <td>{val.prod_barcode}</td>
                                    <td>{val.prod_name}</td>
                                    <td>{val.prod_desc}</td>
                                    <td>{val.prod_price}</td>
                                    <td>
                                        <Link to={pathname}><button>แก้ไข</button></Link>
                                        <button onClick={() => { delete_product(val.prod_id) }}>ลบ</button>
                                        <button onClick={modal}>modal</button>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}

export default TableWareHouse