import { connect } from 'react-redux';

import Space from '../components/Space';

const mapStateToProps = (state, ownProps) => ({
  children: state.spaces,
  isActive: state.activeSpace === ownProps.name,
});

export default connect(mapStateToProps)(Space);
