import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner.js';
import InfiniteScroll from 'react-infinite-scroll-component';

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
      async updatedata(){
        let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=in&apiKey=ac1c584b973048dc987f378a5dffd67e&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.setState({
          loading:true
        })
        let data=await fetch(url);
        let parsedata= await data.json();
        this.setState({
          article:parsedata.articles,
          totalresult:parsedata.totalResults,
          loading:false
         });
      }

    componentDidMount () {
        this.setState({
          page:this.state.page+1,
         })
         

      }


      handleNext=()=>{
       
      this.updatedata();
      this.setState({
        page:this.state.page+1,
       })}
      

      handlePrev=()=>{
        this.setState({
          page:this.state.page-1,
         })
        this.updatedata();
      }

      fetchData=async()=>{
        this.setState({
          page:this.state.page+1,
         })
        let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=in&apiKey=ac1c584b973048dc987f378a5dffd67e&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        let data=await fetch(url);
        let parsedata= await data.json();
        this.setState({
          article:this.parsedata.articles.concat(parsedata.articles),
          totalresult:parsedata.totalResults,
          loading:false,
          page:this.state.page+1
         });
      }
      
  
  
    render() {
    return (
      <div>
        <InfiniteScroll
  dataLength={this.state.article.length} //This is important field to render the next data
  next={this.fetchData}
  hasMore={!(this.state.page*this.props.pagesize===this.state.totalresult)}
  loader={<Spinner/>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }>
<div className="container my-3 ">
            <h2 style={{textAlign: "center" ,margin: "35px 0px"}} >{`This is ${this.props.category} NEWS Headlines`}</h2>
            <div className="row">
            {this.state.article.map((element)=>
        { 
                return  <div className="col-md-4 my-2" key={element.url}>
                <NewsItem source={element.source.name} author={element.author} date={element.publishedAt} title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url}/>
                </div>
                
        })
      }
            
                </div>
            </div>
</InfiniteScroll>
<div className="container my-3 ">
            <h2 style={{textAlign: "center" ,margin: "35px 0px"}} >{`This is ${this.props.category} NEWS Headlines`}</h2>
            <div className="row">
            {this.state.article.map((element)=>
        { 
                return  <div className="col-md-4 my-2" key={element.url}>
                <NewsItem source={element.source.name} author={element.author} date={element.publishedAt} title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url}/>
                </div>
                
        })
      }
            
                </div>
            </div>
      </div>
    )
  }
}
