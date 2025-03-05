import { useRouter } from 'next/router'
import React from 'react'

const imageId = () => {

    const router = useRouter();

    const id = router.query.image_id;

  return (
    <div>imageId: {id}</div>
  )
}

export default imageId