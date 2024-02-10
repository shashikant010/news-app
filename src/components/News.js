import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner.js';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  
    articles=[
       
    ]
      constructor(){
        super();
        this.state={
          articles:this.articles,
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
          articles:parsedata.articles,
          totalresult:parsedata.totalResults,
          loading:false
         });
      }

   async componentDidMount () {
        this.setState({
          page:this.state.page+1,
         })
        let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=in&apiKey=ac1c584b973048dc987f378a5dffd67e&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        let data=await fetch(url);
        let parsedata= await data.json();
        this.setState({
          articles:parsedata.articles,
          totalresult:parsedata.totalResults,
          page:this.state.page+1
         });
         

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

      fetchData = async () => {
        // increment the page number
        this.setState({ page: this.state.page + 1 });
      
        // construct the API URL
        let url = `https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=in&apiKey=ac1c584b973048dc987f378a5dffd67e&page=${this.state.page}&pagesize=${this.props.pagesize}`;
      
        // fetch the data
        let data = await fetch(url);
        let parsedData = await data.json();
      
        // check if there are more articles to fetch
        if (parsedData.articles.length > 0) {
          // update the state with the new articles
          this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalresult: parsedData.totalResults,
          });
        } else {
          // no more articles to fetch, show a message
          console.log("No more articles");
        }
        
      };
      
      
  
  
    render() {
    return (
      <div>
        <InfiniteScroll
  dataLength={this.state.articles.length} //This is important field to render the next data
  next={this.fetchData}
  hasMore={!(this.state.articles.length===this.state.totalresult)}
  loader={<Spinner/>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }>

            <h2 style={{textAlign: "center" ,margin: "35px 0px"}} >{`This is ${this.props.category} NEWS Headlines total result = ${this.state.totalresult} datalength=${this.state.articles.length}`}</h2>
            <div className="row">
            {this.state.articles.map((element)=>
        { 
                return  <div className="col-md-4 my-2" key={element.url}>
                <NewsItem source={element.source.name} author={element.author} date={element.publishedAt} title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url}/>
                </div>
                
        })
      }
            
                </div>
           
</InfiniteScroll>
      </div>
    )
  }
}
