import React, { Component } from "react"
import Button from "../../shared/button"
import "./universityCard.css"

function UniversityCard(props) {
    const { universityName, url, country, action, onCardClick, addToBucket } = props || {}
    const actionLabel = action && action.label
    return (
        <React.Fragment>
            <div className="divider"></div>
            <div
                onClick={() => {
                    window.location.href = url
                }}
                className="card flex col"
            >
                <div className="flex spaceBetween">
                    {universityName && <div>{universityName}</div>}
                    {actionLabel && addToBucket && (
                        <Button
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                addToBucket()
                            }}
                            actionLabel={actionLabel}
                            style={{ width: "40%" }}
                        />
                    )}
                </div>
                {country && <div className="marginTop">{country}</div>}
            </div>
        </React.Fragment>
    )
}
export default UniversityCard
