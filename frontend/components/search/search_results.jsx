import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faMapSigns } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class SearchResults extends React.Component {
  render() {
    // const parent = this.props.parent === "sub" ? "sub-" : "";

    const noResults = (
      <li className={`${parent}search-result-item`}>No Results Found</li>
    );

    const yesResults = this.props.results.map((result, idx) => (
      <div className='result-container'> 
      <li className={`${parent}search-result-item`} key={idx}>
        {result.category === "Trail" ? (
          <Link to={`/trails/${result.id}`}>
            <div className="result-hike-icon">
              <FontAwesomeIcon icon={faMapSigns} />
            </div>
            {result.name}
          </Link>
        ) : (
          <Link to={`/parks/${result.id}`}>
            <div className="result-park-icon">
              {" "}
              <FontAwesomeIcon icon={faTree} />
            </div>
            {result.name}
          </Link>
        )}
      </li>
      </div>
    ));

    return (
      <div className="search-res-container">
        <ul className={`${parent}search-results`}>
          {this.props.results.length ? yesResults : noResults}
        </ul>
      </div>
    );
  }
}

export default SearchResults;
