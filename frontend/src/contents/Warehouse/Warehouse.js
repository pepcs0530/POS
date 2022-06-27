import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import Axios from "axios"

import TableWareHouse from "../../components/TableWareHouse/TableWareHouse"
import "./../contents.css"
import "./Warehouse.css"

import { useDispatch, useSelector } from 'react-redux'

function Search() {

    const dispatch = useDispatch()

    const ProductTable = useSelector((state) => state.product?.ProductTable)

    useEffect(() => {
        dispatch.product.fetchProductlist()
    }, [])

    return (
        <div className="content">
            <div className="divoperate">
                <input className="search_item" name="search_item" type="text" />
                <Link to="addnewproduct"><button>+ เพิ่มข้อมูล</button></Link>
            </div>
            <TableWareHouse ProductTable={ProductTable} />
        </div>
    )
}
export default Search