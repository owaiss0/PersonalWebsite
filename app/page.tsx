import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        owais
      </h1>
      <p className="mb-4">
        {`Personal website for Owais. Use the gym-workout page for the updated
        Next.js workout plan, or check the blog posts below.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
