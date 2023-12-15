import React from 'react'

export default function ({comments}) {

const items=comments?.map((e,index)=>(
  <div className="comment" key={index}>
  <p>{e.body}</p>
</div>
))

  return (


    <div className="comments">
    <p>comments:</p>
   {items}
    </div>

  )
}
