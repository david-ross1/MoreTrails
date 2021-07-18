import React from "react";
import ReviewItem from "./review_item";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: this.props.reviews,
    };
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.trailId);
  }

  render() {
    let { reviews } = this.props;

    if (!this.props.reviews) {
      return null;
    }

    return (
      <div>
        {this.props.reviews.reverse().map(review => {
          return (
            <ReviewItem
              key={review.id}
              review={review}
              deleteReview={this.props.deleteReview}
            />
          );
        })}
      </div>
    );
  }
}
export default ReviewIndex;
