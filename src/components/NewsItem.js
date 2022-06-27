import React, { Component } from 'react'

const NewsItem =(props)=> {
    
    
        let {title , description, imageUrl, newsUrl, author, date, name}= props;
        return (
            <div className='my-5'>
                <div className="card text-center" style={{width:"18rem"}}>
                    <img src={!imageUrl?"https://s0.2mdn.net/simgad/12148679293250887914?sqp=-oaymwEOCKwCEPoBIAFIZFABWAE&rs=AOga4qkIWSiSC8YMgAZQ15blZkNELxaSQg":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-danger">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
                            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1'}} >{name}</span>
                            <a rel='noreferrer' href={newsUrl}  target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                        
                </div>
            </div>
        )
    
}

export default NewsItem