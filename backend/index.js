const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

const { Client } = require('pg')
const db = new Client({
    host: "localhost",
    user: "postgres",
    port: "5432",
    password: "123456",
    database: "Store"
})
db.connect()

app.get('/product', (req, res) => {
    db.query("SELECT * FROM product;", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result.rows)
        }
    })
})

app.get("/product/geteditproduct", (req, res) => {
    const editdata_id = req.query.editdata_id
    db.query("SELECT * FROM product WHERE prod_id=" + editdata_id + ";", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result.rows)
        }
    })
})

app.get("/product/orderitem", (req, res) => {
    const orderitem = "'" + req.query.orderitem + "'"
    db.query("SELECT * FROM product WHERE prod_barcode=" + orderitem + ";",
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result.rows)
            }
        }
    )
})

app.post("/product/create", (req, res) => {
    const prod_name = "'" + req.body.prod_name + "'"
    const prod_desc = "'" + req.body.prod_desc + "'"
    const prod_price = req.body.prod_price
    const prod_barcode = "'" + req.body.prod_barcode + "'"
    db.query("INSERT INTO product (prod_name, prod_desc, prod_price, prod_barcode) VALUES (" + prod_name + "," + prod_desc + "," + prod_price + "," + prod_barcode + ");",
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result.rows)
            }
        }
    )
})

app.patch("/product/editproduct", (req, res) => {
    const prod_id = req.body.prod_id
    const prod_name = "'" + req.body.prod_name + "'"
    const prod_desc = "'" + req.body.prod_desc + "'"
    const prod_price = req.body.prod_price
    const prod_barcode = "'" + req.body.prod_barcode + "'"
    db.query("UPDATE product SET prod_name = " + prod_name + ", prod_desc = " + prod_desc + ", prod_price = " + prod_price + ", prod_barcode = " + prod_barcode + " WHERE prod_id = " + prod_id + ";")
})

app.delete("/product/delete", (req, res) => {
    const delete_prod_id = req.body.delete_prod_id
    db.query("DELETE FROM product WHERE prod_id=" + delete_prod_id + ";")
})

app.listen('3001', () => {
    console.log('runing in port 3001')
})
