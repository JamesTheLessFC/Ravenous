import React from 'react';
import './Business.css';

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container" onClick={() => {
          window.open(this.props.business.url, '_blank');
        }}>
          <img src={this.props.business.imageSrc} alt=''/>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-location">
            <div className="Business-address" onClick={() => {
              window.open(`https://www.google.com/maps/place/${this.props.business.address},+${this.props.business.city},+${this.props.business.state}+${this.props.business.zipCode}`, '_blank');
              }}>
              <p>{this.props.business.address}</p>
              <p>{this.props.business.city}, {this.props.business.state}</p>
              <p>{this.props.business.zipCode}</p>
            </div>
            <div className="Business-distance">
              <p>{(this.props.business.distance / 1609).toFixed(2)} miles</p>
            </div>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">{`${this.props.business.rating} stars`}</h3>
            <p>{`${this.props.business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Business;
