import { useRouter } from 'next/router'
import React from 'react'

const postId = ({data}) => {

    const router = useRouter();
    // const id = router.query.id;

    if(router.isFallback){
        return <>
        <h4>Loading data....</h4></>
    }

    return (
        <>
        <div>postId: {data.id}</div>
        <div>postTitle: {data.title}</div>
        </>
    )
}

export default postId;

export async function getStaticPaths() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    const paths = posts.map((post)=>{
        return {
            params:{
                id: post.id.toString()
            }
        }
    })
    return {
        paths,
        fallback: "blocking"
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await response.json();

    return {
        props: {
            data
        }
    }
}