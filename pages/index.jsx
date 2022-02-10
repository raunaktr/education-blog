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
    <div className="mt-4 w-full rounded p-6">
      <div className="container mx-auto mb-8 px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 ">
          {posts.map((post, index) => (
            <div className="col-span-1 md:col-span-6 lg:col-span-4">
              <PostCard key={index} post={post.node} />
              <PostCard key={index} post={post.node} />

              <PostCard key={index} post={post.node} />
            </div>
          ))}
          <div className="col-span-1 md:col-span-6 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
