import React from 'react'

export default function SideBar({posts,handlePostIndex}) {
    const items=posts?.map((e,index)=>(
        <li key={index} onClick={()=>handlePostIndex(index)}>{e.title}</li>
    ))
    return (
        <aside>
            <ul>
               {items}
            </ul>
        </aside>
    )
}
