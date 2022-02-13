import React, { useState, useRef, useEffect } from 'react'

import { submitComment } from '../services'

/*
 * @params slug
 */
const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const nameEl = useRef()
  const emailEl = useRef()
  const commentEl = useRef()
  const storeDataEl = useRef()

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email')
  }, [])

  const handleSubmission = () => {
    setError(false)

    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { checked: storeData } = storeDataEl.current
    if (!comment || !email || !name) {
      setError(true)
      return
    }

    const commentObj = { name, email, comment, slug }

    if (storeData) {
      window.localStorage.setItem('email', email)
      window.localStorage.setItem('name', name)
    } else {
      window.localStorage.removeItem('email', email)
      window.localStorage.removeItem('name', name)
    }
    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000)
    })
  }

  return (
    <div className="bg-base-neutral mt-20 mb-8 border p-8 pb-12">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        Leave a Reply
      </h3>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Comment</span>
        </label>
        <textarea
          className="textarea-bordered textarea h-24"
          placeholder="Comment"
          ref={commentEl}
          name="comment"
        />
      </div>
      <div className="form-control mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <label className="input-group">
          <span className="border-b border-l border-t">Name</span>
          <input
            type="text"
            placeholder="John Doe"
            className="input-bordered input w-full"
            ref={nameEl}
            name="name"
          />
        </label>
        <label className="input-group">
          <span className="border-b border-l border-t">Email&nbsp;</span>
          <input
            type="email"
            placeholder="john.doe@email.com"
            className="input-bordered input w-full"
            ref={emailEl}
            name="email"
          />
        </label>
      </div>
      {error && (
        <div className="alert alert-error">
          <div className="flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="mx-2 h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              ></path>
            </svg>
            <label>All fields are required.</label>
          </div>
        </div>
      )}
      <div className="form-control mt-4">
        <div className="flex">
          <input
            type="checkbox"
            value="true"
            className="checkbox-primary checkbox"
            htmlFor="storeData"
            ref={storeDataEl}
            id="storeData"
          />
          <span className="label-text mx-2">Remember me</span>
        </div>
      </div>
      <div className="mt-8">
        <button
          type="button"
          onClick={handleSubmission}
          className="btn btn-ghost btn-block"
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <div className="alert alert-success">
            <span className="mt-3 text-xl">Comment Submitted for review</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default CommentsForm
