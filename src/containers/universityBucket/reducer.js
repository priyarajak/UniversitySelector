import objectAssign from 'object-assign';
import ActionTypes from './actionTypes';

const initialState = {
};

const updateBucket = (bucket, item) => {
  console.log(bucket, item)
for( let uni of bucket) {
  if(uni && uni.url === item.url && item.country == uni.country &&  item.universityName == uni.universityName) {
    return bucket
  }
}
bucket.push(item);
typeof localStorage != "undefined" && localStorage.setItem("bucket",JSON.stringify(bucket))
return bucket;
}

const reorderBucket = (bucket, item) => {

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.FETCH_BUCKET:
        return objectAssign({}, state, {
          fetchingBucket: true
        });
      case ActionTypes.SET_BUCKET:
        return objectAssign({}, state, {
          bucket: action.data,
          fetchingBucket: false
        });
        case ActionTypes.UPDATE_BUCKET:
          return objectAssign({}, state, {
            bucket: updateBucket(state.bucket, action.data),
          });
          case ActionTypes.REORDER_BUCKET:
          return objectAssign({}, state, {
            bucket: reorderBucket(state.bucket, action.data),
          });
      default:
        return state;
    }
  };
  
  export default reducer;