import React, { useState } from "react";
import categoryData from "./Data";

function TopicList() {
  // const [topic, setTopic] = useState(categoryData)

  return (
    <div className="container">
      <div className="box">
        {/* <input
          type="text"
          placeholder="Recommended Topics"
          className="form-control ps-4 h-35 w-92 mt-3"
        /> */}
        <div className="form-control ps-4 h-35 w-92 mt-3">Recommended Topics</div>
      </div>
      <div className="list pt-4 ps-4">
        {categoryData.map((list) => (
          <div className="topic d-flex align-items-center gap-5">
            <div key={list.id}>
              <h3 className="fs-5">{list.topic}</h3>
              <div className="pt-2 pb-4">
                {list.keywords.map((keyword) => (
                  
                  <button key={keyword} className="btn btn-outline-success me-2">
                    {keyword}
    
                  </button>
                ))}
                {/* <button type="button" class="btn btn-outline-primary">{list.keywords[0]}</button>
<button type="button" class="btn btn-outline-secondary">{list.keywords[1]}</button>
<button type="button" class="btn btn-outline-success">{list.keywords[2]}</button>
<button type="button" class="btn btn-outline-danger">{list.keywords[3]}</button>
<button type="button" class="btn btn-outline-danger">{list.keywords[4]}</button> */}
              </div>
            </div>
            <div className="button">
              <button class="btn-add"> {list.editor} </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicList;
