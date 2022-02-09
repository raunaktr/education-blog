import { PostCard, PostWidget, Categories } from '../components'

const posts = [
  { title: 'Test title 1', excerpts: 'test description 1' },
  { title: 'Test title 2', excerpts: 'test description 2' },
]

export default function Home() {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
