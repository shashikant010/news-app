import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner.js';

export default class News extends Component {
  
    article=[
       
    ]
      constructor(){
        super();
        this.state={
          article:this.article,
          page:1,

        }
    
      }

     async componentDidMount () {
        let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=in&apiKey=ac1c584b973048dc987f378a5dffd67e&page=1&pagesize=${this.props.pagesize}`;
        this.setState({
          loading:true
        })
        let data=await fetch(url);
        let parsedata= await data.json();
       this.setState({
        article:parsedata.articles,
        page:1,
        totalresult:parsedata.totalResults,
        loading:false
       });

      }


      handleNext=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=in&apiKey=ac1c584b973048dc987f378a5dffd67e&page=${this.state.page+1}&pagesize=${this.props.pagesize}`
        this.setState({
          loading:true
        })
        let data=await fetch(url);
        let parsedata= await data.json();
       this.setState({
        article:parsedata.articles,
        page:this.state.page+1,
        loading:false
       })}
      

      handlePrev=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=in&apiKey=ac1c584b973048dc987f378a5dffd67e&page=${this.state.page-1}&pagesize=${this.props.pagesize}`
        this.setState({
          loading:true
        })
        let data=await fetch(url);
        let parsedata= await data.json();
       this.setState({
        article:parsedata.articles,
        page:this.state.page-1,
        loading:false
       })
      }
      
  
  
    render() {
    return (
      <div>
       
        <div className="container my-3 ">
            <h2 style={{textAlign: "center" ,margin: "35px 0px"}} >This is NEWS Headlines</h2>
            {this.state.loading&&<Spinner/>}
            <div className="row">
            {!this.state.loading&&this.state.article.map((element)=>
        { 
                return  <div className="col-md-4 my-2" key={element.url}>
                <NewsItem  title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url}/>
                </div>
                
        })
            }
            
                </div>
                <div className='d-flex justify-content-between'>
                <button disabled={this.state.page===1}type="button" className="btn btn-dark"onClick={this.handlePrev}>&larr; Prev</button>
                <button disabled={this.state.page*this.props.pagesize>=this.state.totalresult}type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                </div>
            
        </div>
      </div>
    )
  }
}
