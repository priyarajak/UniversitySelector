import { connect } from "react-redux"
import Action from "./actions.js"
import bucketAction from "../universityBucket/action"
import Home from "./home"
const mapStateToProps = ({ home, universityBucket }) => {
    return {
        universities: home.universities,
        fetchingUniversities: home.fetchingUniversities,
        universitiesByCountry: home.universitiesByCountry,
        bucket: universityBucket.bucket,
        searching: home.searching,
        searchResults: home.searchResults
    }
}

const mapDispatchToProps = (dispatch) => ({
    getAllUniversity: () => dispatch(Action.getAllUniversity()),
    searchUniversities: (name, country) => dispatch(Action.searchUniversities(name, country)),
    getBucket: () => dispatch(bucketAction.getBucket()),
    updateBucket: (university) => dispatch(bucketAction.updateBucket(university)),
    clearSearchResults: () => dispatch(Action.setSearchResults(null))
})

const Container = connect(mapStateToProps, mapDispatchToProps)(Home)

export default Container
