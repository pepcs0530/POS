import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import $ from "jquery";

import "./../components.css"
import "./Layout.css"

function Layout() {
    const clock = () => {
        setInterval(function () {
            var hours = new Date().getHours();
            $(".hours").html((hours < 10 ? "0" : "") + hours);
        }, 1000)
        setInterval(function () {
            var minutes = new Date().getMinutes();
            $(".min").html((minutes < 10 ? "0" : "") + minutes);
        }, 1000)
        setInterval(function () {
            var seconds = new Date().getSeconds();
            $(".sec").html((seconds < 10 ? "0" : "") + seconds);
        }, 1000)
    }

    useEffect(() => {
        clock()
    }, [])

    return (
        <div>
            <div className="header">
                <Link to="/home">
                    <div className="header_item">
                        <img className="banner_img" alt="banner img" src="/image/banner.jpg" />
                    </div>
                    <div className="header_item" style={{ marginLeft: "10px", marginTop: "7px" }}>
                        <h2>อยากขาย ซื้อหน่อย</h2>
                    </div>
                </Link>
                <div className="header_item" style={{ marginLeft:"10px" }}>
                    <h3>
                        <div className="d-flex flex-wrap justify-content-center">
                            <a><span className="badge hours"></span></a> :
                            <a><span className="badge min"></span></a> :
                            <a><span className="badge sec"></span></a>
                        </div>
                    </h3>
                </div>
            </div>
            <div className="sidebar">
                <Link to="/home"><div className="sidebar_item">Home</div></Link>
                <Link to="/warehouse"><div className="sidebar_item">Warehouse</div></Link>
                <Link to="/order"><div className="sidebar_item">Order</div></Link>
            </div>
        </div>
    )
}
export default Layout