import React, { Component } from 'react'

export default class NewsItem extends Component {
 
  render() {
    let {title,description,imgurl,newsurl}=this.props;
    
    return (
      <div>
        <div className="card">
  <img src={imgurl?imgurl:"https://cdn.ndtv.com/common/images/ogndtv.png"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title?title.slice(0,45):" "}...</h5>
    <p className="card-text">{description?description.slice(0,88):" "}...</p>
    <a href={newsurl} target='_blank' rel="noreferrer" className="btn btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
  }
}
