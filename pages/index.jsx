import { PostCard, PostWidget, Categories } from '../components'
import { getPosts } from '../services'

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: { posts },
  }
}

export default function Home({ posts }) {
  console.log(posts)
  return (
    // <div className="mt-4 w-full rounded bg-gradient-to-r from-blue-400/10 via-indigo-500/10 to-green-500/10 p-6">
    // <div className="mt-4 p-6">
    //   <div className="container mx-auto mb-8 px-10">
    //     <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 ">
    //       {posts.map((post, index) => (
    //         <div className="col-span-1 lg:col-span-8">
    //           <PostCard key={index} post={post.node} />
    //         </div>
    //       ))}
    //       <div className="col-span-1 lg:col-span-4">
    //         <div className="relative top-8 lg:sticky">
    //           <PostWidget />
    //           <Categories />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    <div className="flex items-center justify-evenly">
      {/* Grid System */}
      <div className="grid w-full max-w-screen-lg basis-3/4 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-1 lg:col-span-2 lg:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 basis-1/4 lg:col-span-1">
          <div className="relative top-8 md:sticky lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
