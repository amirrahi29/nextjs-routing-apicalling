import { useRouter } from 'next/router'
import React from 'react'

const blogSlug = () => {

    const router = useRouter();
    const slug = router.query.blog_slug;

  return (
    <div>this is {slug}</div>
  )
}

export default blogSlug