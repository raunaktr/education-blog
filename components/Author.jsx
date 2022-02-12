import React from 'react'
import Image from 'next/image'
const Author = ({ authors }) => {
  return (
    <div className="bg-base-neutral relative mt-20 mb-8 border p-12 text-center">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          src={authors[0].photo.url}
          alt={authors[0].name}
          height="100px"
          width="100px"
          className="mask mask-squircle align-middle"
        />
      </div>
      <h3 className="my-4 text-xl font-bold text-primary">{authors[0].name}</h3>
      <p className="text-lg text-base">{authors[0].bio}</p>
    </div>
  )
}

export default Author
