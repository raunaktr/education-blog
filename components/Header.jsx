import React, { useContext } from 'react'

import Link from 'next/link'

const categories = [
  { name: 'Economy', slug: 'economy' },
  { name: 'Geography', slug: 'geography' },
]
const Header = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="border-blue inline-block w-full border-b py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-black">
              Ascend
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="hover: primary mt-2 ml-4 cursor-pointer align-middle font-semibold text-black md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
    // <>
    //   <div class="container mx-auto mb-8 px-10">
    //     <div class="flex w-full items-center justify-center border-b border-black">
    //       <a class="mr-8 flex h-16 items-center" href="#">
    //         Menu Item 1
    //       </a>
    //       <a class="mr-8 flex h-16 items-center" href="#">
    //         Menu Item 2
    //       </a>

    //       {/* <!-- Component Start --> */}
    //       <button class="group relative flex flex-col items-center focus:outline-none">
    //         <div class="flex h-16 items-center">
    //           Mega Menu
    //           <svg
    //             class="mt-px ml-1 h-4 w-4"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //               clip-rule="evenodd"
    //             />
    //           </svg>
    //         </div>
    //         <div class="absolute top-0 mt-16 hidden w-screen max-w-3xl border border-black bg-white shadow-lg group-focus:visible">
    //           <div class="grid grid-cols-2 gap-10 p-8">
    //             <a class="flex" href="#">
    //               <span class="h-12 w-12 flex-shrink-0 bg-gray-300"></span>
    //               <div class="ml-4 flex flex-col">
    //                 <span class="text-left font-medium leading-none">
    //                   Heading
    //                 </span>
    //                 <span class="mt-1 text-left text-sm">
    //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //                 </span>
    //               </div>
    //             </a>
    //             <a class="flex" href="#">
    //               <span class="h-12 w-12 flex-shrink-0 bg-gray-300"></span>
    //               <div class="ml-4 flex flex-col">
    //                 <span class="text-left font-medium leading-none">
    //                   Heading
    //                 </span>
    //                 <span class="mt-1 text-left text-sm">
    //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //                 </span>
    //               </div>
    //             </a>
    //             <a class="flex" href="#">
    //               <span class="h-12 w-12 flex-shrink-0 bg-gray-300"></span>
    //               <div class="ml-4 flex flex-col">
    //                 <span class="text-left font-medium leading-none">
    //                   Heading
    //                 </span>
    //                 <span class="mt-1 text-left text-sm">
    //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //                 </span>
    //               </div>
    //             </a>
    //             <a class="flex" href="#">
    //               <span class="h-12 w-12 flex-shrink-0 bg-gray-300"></span>
    //               <div class="ml-4 flex flex-col">
    //                 <span class="text-left font-medium leading-none">
    //                   Heading
    //                 </span>
    //                 <span class="mt-1 text-left text-sm">
    //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //                 </span>
    //               </div>
    //             </a>
    //           </div>
    //           <div
    //             class="col-span-2 flex items-center justify-between border-t border-black px-8 py-4"
    //             href="#"
    //           >
    //             <div class="flex flex-col">
    //               <span class="text-left font-medium leading-none">
    //                 Heading
    //               </span>
    //               <span class="mt-1 text-left text-sm">
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //               </span>
    //             </div>
    //             <a href="#" class="flex h-10 items-center bg-gray-200 px-3 ">
    //               Button
    //             </a>
    //           </div>
    //         </div>
    //       </button>
    //       {/* <!-- Component End --> */}
    //     </div>
    //   </div>

    //   <a
    //     class="fixed bottom-0 right-0 mr-4 mb-4 flex h-8 items-center justify-center rounded-full bg-blue-600 pr-2 pl-1 text-blue-100 shadow-lg hover:bg-blue-600"
    //     href="https://twitter.com/lofiui"
    //     target="_top"
    //   >
    //     <div class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
    //       <svg
    //         class="h-4 w-4 fill-current"
    //         viewBox="0 0 24 24"
    //         class="r-jwli3a r-4qtqp9 r-yyyyoo r-16y2uox r-1q142lx r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"
    //       >
    //         <g>
    //           <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
    //         </g>
    //       </svg>
    //     </div>
    //     <span class="ml-1 text-sm leading-none">@lofiui</span>
    //   </a>
    // </>
  )
}

export default Header
