import ActionTypes from "./actionTypes"
const bucket_id = "bucket"
const fetchingBucket = () => ({
    type: ActionTypes.FETCH_BUCKET,
})

const setBucket = (data) => ({
    type: ActionTypes.SET_BUCKET,
    data,
})

const updateBucket = (data) => ({
    type: ActionTypes.UPDATE_BUCKET,
    data,
})

const reorderBucket = (data) => ({
    type: ActionTypes.REORDER_BUCKET,
    data,
})

const getBucket = () => (dispatch) => {
    dispatch(fetchingBucket())
    try {
        const bucket = (typeof localStorage != "undefined" && JSON.parse(localStorage.getItem(bucket_id))) || []
        dispatch(setBucket(bucket))
    } catch (e) {
        dispatch(setBucket([]))
    }
}
export default {
    getBucket,
    setBucket,
    updateBucket,
    reorderBucket
}
