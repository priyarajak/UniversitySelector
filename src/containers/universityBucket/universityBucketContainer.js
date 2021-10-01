import { connect } from 'react-redux';
import Action from './action';
import universityBucket from './universityBucket';
const mapStateToProps = ({ universityBucket }) => {
  return {
    bucket:universityBucket.bucket,
    fetchingBucket: universityBucket.fetchingBucket
  };
};

const mapDispatchToProps = dispatch => ({
  getBucket: () => dispatch(Action.getBucket()),
  reorderBucket: (item) => dispatch(Action.getBucket(item))
});

const Container = connect(mapStateToProps, mapDispatchToProps)(universityBucket);

export default Container;