import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import { login } from "../../actions/session_actions";
import { fetchReviews } from "../../util/reviews_api_util";
import ReviewForm from "./review_form";

const mapStateToProps = (state, ownProps) => {
  return {
    review: {
      date: "",
      rating: 1,
      text: "",
      user_id: state.session.id,
      trail_id: ownProps.trail_id,
    },
    currentUserId: state.session.id,
  };
};
const mapDispatchToProps = dispatch => ({
  action: review => dispatch(createReview(review)),
  fetchReviews: trail_id => dispatch(fetchReviews(trail_id)),
  login: user => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
