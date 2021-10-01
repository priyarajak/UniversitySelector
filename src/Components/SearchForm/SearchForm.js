import React, { useState } from "react"
import "./SearchForm.css"
import Button from "../../shared/button"

function SearchForm(props) {
    const { onClick, actionLabel, countries, handleSelect, selectedCountry } = props
    const [university, setUniversity] = useState("")
    const [country, setCountry] = useState("")

    return (
        <div>
            {countries && (
                <div className="marginTop">
                    <h2>Filter By Country</h2>
                    <select value={selectedCountry} name="country" id="country"  onChange={(e) => handleSelect(e.target.value)}>
                        {countries.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))}
                    </select>
                </div>
            )}
            <h2 className="marginTop">Search Your Universities</h2>
            <label htmlFor="university_name">University Name</label>
            <input type="text" onChange={(e) => setUniversity(e.target.value)} />
            <label htmlFor="country_name">Country Name</label>
            <input type="text" onChange={(e) => setCountry(e.target.value)} />
            <Button
                onClick={() => (country || university) && onClick(university, country)}
                actionLabel={actionLabel}
            />
        </div>
    )
}
export default SearchForm
