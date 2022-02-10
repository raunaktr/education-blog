import React, { useEffect, useState } from 'react'
import { getCategories } from '../services'

import Link from 'next/link'

const Header = () => {
  const [categories, setCategories] = useState([])
  const [active, setActive] = useState(false)

  useEffect(() => {
    getCategories().then((latestCategories) => setCategories(latestCategories))
  }, [])

  const handleClick = () => {
    setActive(!active)
  }
  return (
    <nav className="navbar mb-2 flex flex-wrap py-10 px-4 shadow-lg">
      <Link href="/">
        <a className="mx-4 inline-flex items-center px-2 text-3xl font-bold ">
          Ascend
        </a>
      </Link>
      <button
        className="btn btn-ghost btn-square ml-auto outline-none lg:hidden"
        onClick={handleClick}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
      <div
        className={`${
          active ? '' : 'hidden'
        } w-full lg:inline-flex lg:w-auto lg:flex-grow`}
      >
        <div className="mx-3 flex w-full flex-col items-stretch lg:ml-auto lg:inline-flex lg:h-auto lg:w-auto lg:flex-row lg:items-center">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="mt-2 ml-4 cursor-pointer align-middle text-lg font-semibold tracking-tight text-gray-800 text-black transition duration-200 hover:text-blue-600 md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Header
