import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Story = ({ storyId, val ,type }) => {
  const [story, setStory] = useState({});

  const getStory = async (storyId) => {
    const result = await axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
      .then(({ data }) => data)
      .then((data) => setStory(data));

    return result;
  };
  useEffect(() => {
    getStory(storyId);
  }, [storyId]);

  return (
    <div >
      <div className="card mt-4" >
        <div style={{ display: "flex" }}>
          <div style={{fontSize: "30px", margin:"auto 1%"}}>{val + 1}</div>
          <div className="card-body " style={{margin:'auto 0'}}>
            <h4 className="card-title">
              <a
                href={story.url} target="_blank" rel="noreferrer noopener"
                style={{color: "Black" }}>
                {story.title}
              </a>
            </h4><br/>
            <h6 className="card-subtitle mb-2 text-muted"><strong style={{color:'black'}}>Id:</strong> {story.id}</h6>
            <h5 className="card-text" style={{ color: "Grey" }}><strong style={{color:'black'}}>Author: </strong>{story.by}</h5>
            <a href={story.url} className="card-link" target="_blank" rel="noreferrer noopener">
              Reference
            </a>
          </div>
          <div className="card-subtitle mb-2 text-muted" style={{fontSize: "20px", margin:"1% 1%", minWidth:"31%"}}>
              Category: {type}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;