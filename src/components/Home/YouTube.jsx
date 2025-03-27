import React from 'react'

export default function YouTube() {
    return (
        <div className='my-10'>
            <iframe className='rounded-xl border-2 border-info' width="100%" height="400" src="https://www.youtube.com/embed/vaXbvICr_KU?si=yQj2Z9shUK7AkzT0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}
