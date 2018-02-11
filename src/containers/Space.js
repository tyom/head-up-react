import { connect } from 'react-redux';

import { activateSpace } from '../actions';
import Space from '../components/Space';

const mapStateToProps = (state, ownProps) => ({
  children: state.spaces,
});

export const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Space);
