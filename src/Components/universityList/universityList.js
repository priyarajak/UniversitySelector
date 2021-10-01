import React, { Component } from "react"
import "./universityList.css"
import UniversityCard from "../universityCard"
import Button from "../../shared/button"
function UniversityList(props) {
    const { title, subTitle, universityArray, updateBucket, showClearButton, onClear} = props
    return (
        <div>
            {title && (
                <div className="flex spaceBetween">
                    <h2 className="marginTop">{title}</h2>
                    {showClearButton && <Button actionLabel="Clear Results" style={{ width: '50%', radius:'8px'}}  onClick={onClear}/>}
                </div>
            )}
            {subTitle && <div className="marginTop">{subTitle}</div>}
            {universityArray && (
                <div className="marginTop">
                    {universityArray.map((university, index) => (
                        university && <UniversityCard {...university} key={index} addToBucket={updateBucket && (() => updateBucket(university))} />
                    ))}
                </div>
            )}
        </div>
    )
}
export default UniversityList
