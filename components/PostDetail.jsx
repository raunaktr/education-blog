import React, { Fragment } from 'react'
import moment from 'moment'
const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>
      }
    }

    switch (type) {
      case 'bulleted-list':
        return (
          <li key={index}>
            {modifiedText.map((item, i) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </li>
        )
      case 'heading-two':
        return (
          <h2 key={index} className="mb-4 text-2xl font-bold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        )
      case 'heading-three':
        return (
          <h3 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        )
      case 'heading-four':
        return (
          <h4 key={index} className="text-md mb-4 font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        )
      case 'paragraph':
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        )
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        )
      default:
        return modifiedText
    }
  }

  return (
    <div className="mb-8 bg-base-100 pb-12 shadow-sm lg:p-8">
      <div className="relative mb-6 overflow-hidden shadow-md">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="h-full w-full rounded-t-lg object-top"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="mb-8 flex w-full items-center">
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
                <p className="link-hover link-accent link mx-2 font-bold hover:text-primary-content">
                  {author.name}
                </p>
              </div>
            </div>
          ))}
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
          <span className="mx-2">
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          )
          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
      </div>
    </div>
  )
}

export default PostDetail
