import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
 const [articles, setArticles] = useState([]);
 const [loading, setLoading] = useState(true);
 const [page, setPage] = useState(1);
 const [totalResults, setTotalResults] = useState(0);
  const captilize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  
  const updateNews = async()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }
  useEffect(() => {
  document.title = `${captilize(props.category)}-NewsMonkey`;
   updateNews();
   //eslint-disable-next-line
  }, [])
  // handlePrevClick = async () => {
  //   console.log("Previous");
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };
  // handleNextClick = async () => {
  //   console.log("next");
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };
  const fetchMoreData=async()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false);
  };
  
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px" ,marginTop:"90px"}}>
          {`NewsHive-Top ${captilize(props.category)} Headlines`}{" "}
        </h1>
        
        {loading && <Spinner/>}
        {articles && ( 
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading && <Spinner/>}
        >
          <div className="container">
          <div className="row">
            {articles.map((element,index) => {
              return <div className="col-md-4" key={index}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
            })}
          </div>
          </div>
        </InfiniteScroll>
        )}
       
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1} type="button" className="btn btn-dark"onClick={this.handlePrevClick}>&larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)}type="button"className="btn btn-dark"nClick={this.handleNextClick}> Next &rarr;
          </button>
        </div> */}
     </>
    );
  }

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;


