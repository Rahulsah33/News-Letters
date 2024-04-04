import React, { Component } from 'react';

export class NewsItems extends Component {
  render() {
    const { title, description, imgurl, newsurl , author , date} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imgurl} className="card-img-top" alt="News" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date (date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
