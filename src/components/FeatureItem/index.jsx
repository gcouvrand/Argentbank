import React from "react";


export default class FeatureItem extends React.Component {
  render() {
    return(
        <div className="feature-item">
          <img src={this.props.picture} alt="Icon" className="feature-icon" />
          <h3 className="feature-item-title">{this.props.title}</h3>
          <p>
            {this.props.text}
          </p>
        </div>
    )
}
}