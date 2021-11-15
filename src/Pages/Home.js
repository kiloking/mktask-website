import React from 'react'

function Home({data}) {
  return (
    <div className="container">
      {data ? 
        data.map((item,index)=>{
          const {description, upvote,  author, category, comment_count, host, partner, id, comments} = item
          return(
                <div className="article">
                  <div className="left"></div>
                  <div className="right">
                    <div className="post_info">單元類型 <span>{category}</span> 由 <span>{author}</span> 提出</div>
                    <div className="description"> {description}</div>
                  </div>
                </div>
                
            
          )
        }) : <div>目前還沒有</div>
      }
    </div>
  )
}

export default Home
