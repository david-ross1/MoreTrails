import { connect } from "react-redux";
import { fetchParkTrails } from "../../actions/park_actions";
import { fetchTrail, fetchTrails } from "../../actions/trail_actions";
import TrailsInParkIndex from "./park_index";

const mSTP = (state, ownProps) => ({
  name: ownProps.name,
  trails: state.entities.trails.trail_list,
  parkTrails: state.entities.parks.parkTrails,
  ownProps: ownProps,
});

const mDTP = dispatch => ({
  fetchTrail: trailId => dispatch(fetchTrail(trailId)),
  fetchParkTrails: trailId => dispatch(fetchParkTrails(trailId)),
  fetchTrails: () => dispatch(fetchTrails()),
});

export default connect(mSTP, mDTP)(TrailsInParkIndex);
