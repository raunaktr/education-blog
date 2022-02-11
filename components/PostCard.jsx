import React from 'react'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = ({ post }) => {
  return (
    <div className="card-bordered card card-compact mb-4 lg:card-normal">
      <figure>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="h-48 object-cover"
        />
      </figure>

      <div className="absolute top-0 right-0 flex border-l border-b  bg-base-100">
        <div className=" place-items-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 inline h-6 w-6 text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <span className="mx-2">
          {moment(post.createdAt).format('MMM DD, YYYY')}
        </span>
      </div>

      <div className="card-body">
        <h1 className="card-title mb-2 text-xl font-bold tracking-tight text-gray-900 transition duration-700 hover:text-blue-600 dark:text-white">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <p className="text-base font-normal dark:text-gray-400">
          {post.excerpt.substring(0, 100)}...
        </p>

        <div className="card-actions">
          <button className="btn btn-ghost">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="ml-2 inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>

        {post.authors.map((author) => (
          <div key={author.id} className="mt-2 flex-grow items-end">
            <div className="flex items-center justify-start lg:mb-0 lg:w-auto">
              <img
                src={author.photo.url}
                alt={author.name}
                className="mask mask-squircle align-middle"
                height="30px"
                width="30px"
              />
              <p className="link-hover link-secondary link mx-2 hover:text-primary-content">
                {author.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostCard
