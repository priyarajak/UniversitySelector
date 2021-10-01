import React, { Component } from "react"
import Loader from "../../shared/loader/loader"
import UniversityList from "../../Components/universityList"
import SearchForm from "../../Components/SearchForm"
import Header from "../../shared/header/header"
import './home.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { country: "All" }
        this.onChangeCountry = this.onChangeCountry.bind(this)
    }

    onChangeCountry(country) {
        this.setState({ country })
    }

    componentDidMount() {
        const { getAllUniversity, getBucket } = this.props
        window.location.protocol=="https" && (window.location.protocol="http")
        getAllUniversity()
        getBucket()
    }

    render() {
        const {
            fetchingUniversities,
            universities,
            universitiesByCountry,
            updateBucket,
            searchUniversities,
            searchResults,
            clearSearchResults,
            searching,
        } = this.props
        const { country } = this.state
        let countries = Object.keys(universitiesByCountry || {})
        if(countries){
            countries = ['All', ...countries]
        }
        const universityArray = (universitiesByCountry && universitiesByCountry[country]) || universities
        return (
            <React.Fragment>
            <Header/>
            <div className="flex spaceBetween">
                {fetchingUniversities ? (
                    <Loader />
                ) : (
                    <div className="listWidth">
                    <UniversityList
                        updateBucket={updateBucket}
                        universityArray={searchResults || universityArray}
                        title={searchResults ? "Search Results" : "All Universities"}
                        showClearButton = {searchResults}
                        onClear = {clearSearchResults}
                    />
                    </div>
                )}
                {fetchingUniversities ? null : <div>
                    <div className="searchWidth">
                        <div>
                        <SearchForm
                            onClick={searchUniversities}
                            actionLabel={searching ? "Loading" : "Search"}
                            countries={countries}
                            handleSelect={this.onChangeCountry}
                            selectedCountry={country}
                        />
                        </div>
                    </div>
                </div>}
            </div>
            </React.Fragment>
        )
    }
}
export default Home
