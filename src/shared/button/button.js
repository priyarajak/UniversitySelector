import React, { Component } from "react"
import './button.css'
function Button(props) {
    const { actionLabel, onClick, style } = props
    return <div className="button" onClick={onClick} style={style|| {}}>{actionLabel} </div>
}
export default Button
