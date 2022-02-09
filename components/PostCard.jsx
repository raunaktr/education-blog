import React from 'react'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
const PostCard = ({ post }) => {
  console.log({ post })
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      <img
        src={post.featuredImage.url}
        alt={post.title}
        className="rounded-t-lg"
      />
      <div className="p-5">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 transition duration-700 hover:text-blue-600 dark:text-white">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {post.excerpts}
        </p>
        <a
          href="#"
          className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="ml-2 -mr-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default PostCard
