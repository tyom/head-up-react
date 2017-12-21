import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';

const mapStateToProps = (state, ownProps) => ({
  isActive: ownProps.name === state.headup.activeDashboard
});

export default connect(mapStateToProps)(Dashboard);
