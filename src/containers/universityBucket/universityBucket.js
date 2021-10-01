import React, { Component } from 'react';
import Loader from '../../shared/loader/loader'
import Header from "../../shared/header/header"
import UniversityList from "../../Components/universityList"

class UniversityBucket extends Component {

    componentDidMount () {
       const { getBucket }  = this.props 
window.location.protocol=="https" && (window.location.protocol="http")
       getBucket();
    }

    render() {
        const { fetchingUniversities, bucket } = this.props; 
        return <div>
            <Header/>
        <div>{ fetchingUniversities ? <Loader/> : <UniversityList title = {"Item in your bucket"} universityArray = {bucket}/>}
        </div>
        </div>
    }
}
export default UniversityBucket;