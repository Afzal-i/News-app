import React,{useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'

const News =(props)=> {
    const [articles, setarticles] = useState([]);
    const [page, setpage] = useState(1);
    const [loading, setloading] = useState(true);
    const [totalResults, settotalResults] = useState(0);
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    

    const updatepage=async()=> {
        setloading(true)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
       setloading(false)
        //console.log(url)
        let data = await fetch(url);
        let parsedData = await data.json()
       
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)
        
    }
    useEffect(() => {    
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
      updatepage();
    },);

    
   /* const handlePrevClick = async () => {
        setpage(page-1)
       
        updatepage();
    }


    const handleNextClick = async () => {
        setpage(page+1)
        updatepage();

    }*/
    const fetchMoreData = async () => {
            setpage(page+1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        //console.log(url)
        let data = await fetch(url);
        let parsedData = await data.json()
       setloading(false)
       setarticles(articles.concat(parsedData.articles));
       totalResults(parsedData.totalResults)
       
        
      };

        return (

            <>
                <h1 className="text-center">Top News-Today on {capitalizeFirstLetter(props.category)}</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                    
                >
                    <div className="container">
                <div className="row" >

                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.title ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} name={element.source.name} />  {/*category={category}*/} 
                        </div>
                    })}
                    
                </div>
                </div>
                </InfiniteScroll>

            </>

        )
    
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    //category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News