import React, { Component } from "react"
import "./header.css"

function Header() {
    return (
        <div className="fixed-header">
            <div className="container">
                <nav>
                    <a href="/">Home</a>
                    <a href="/my-bucket">My Bucket</a>
                </nav>
            </div>
        </div>
    )
}

export default Header
