import React from "react";


function Result(props){
    return(
        <div>
            <div className="card mb-3" style={{maxWidth: "600px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={props.image} alt="book cover" />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <span><p>Title:</p></span><p className="card-text">{props.title}</p>  
                    <span><p></p>Author:</span><p className="card-text">{props.author}</p>
                    <span><p>Description:</p></span><p className="card-text">{props.description}</p>
                    <a href={props.url} className="btn btn-secondary" role="button" data-bs-toggle="button">View</a>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Result;