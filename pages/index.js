import Link from 'next/link';
import React, { useState } from 'react'

const Home = (props) => {

  const posts = props.posts;
  console.log("post-rendering: ",props.posts);

  return (
    <div>
      <h2>Blog Posts</h2>
      <br/>
      <ul>
        {
          posts.map((item,index)=>{
            return <Link href={`posts/${item.id}`}><li key={index} style={{paddingBottom:8}}>{index+1}, {item.title}</li></Link>
          })
        }
        
      </ul>
    </div>
  )
}

export default Home;

export async function getStaticProps(){
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return {
    props:{
      posts: posts.slice(0,15)
    }
  }
}