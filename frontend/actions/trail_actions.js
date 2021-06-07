import * as TrailAPIUtil from "../util/trail_api_util";

export const RECEIVE_TRAIL = "RECEIVE_TRAIL";

export const receiveTrail = (trail) => ({
  type: RECEIVE_TRAIL,
  trail,
});

export const fetchTrail = (trailId) => (dispatch) =>
  TrailAPIUtil.fetchTrail(trailId).then((trail) =>
    dispatch(receiveTrail(trail))
  );

