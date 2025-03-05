import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <>
            <div style={{ color: 'red' }}>Page is not available!</div>
            <br />
            <Link href={'/'}>Go back to home page</Link>
        </>
    )
}

export default NotFound