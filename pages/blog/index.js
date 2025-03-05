import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const blog = () => {

  const router = useRouter();

  const submitBtn = ()=>{
    router.push('/blog/title4');
  }

  return (
    <div style={{ marginLeft: 24 }}>
      <h4><Link href={'/blog/title1'}>title1</Link></h4>
      <br />
      <h4><Link replace href={'/blog/title2'}>title2</Link></h4>
      <br />
      <h4><Link href={'/blog/title3'}>title3</Link></h4>
      <br />
      <h4><button style={{width:70,height:30,background:'green',color:'white',cursor:'pointer'}} onClick={submitBtn}>title4</button></h4>
      <br />
      <h4><Link href={'/blog/title5'}>title5</Link></h4>
    </div>
  )
}

export default blog