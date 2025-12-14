import { useQuery } from "@tanstack/react-query"

// function مسؤولة عن جلب البيانات من الـ API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }

  return response.json()
}

function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching
  } = useQuery(
    ['posts'],  // Array key مناسب للنسخة الجديدة
    fetchPosts,
    {
      staleTime: 1000 * 60 * 5, // 5 دقائق
      cacheTime: 1000 * 60 * 10 // 10 دقائق
    }
  )

  if (isLoading) return <h2>Loading posts...</h2>
  if (isError) return <h2>Error: {error.message}</h2>

  return (
    <div>
      <h2>Posts</h2>

      <button onClick={refetch}>Refetch Posts</button>
      {isFetching && <p>Updating data...</p>}

      {posts.slice(0, 10).map(post => (
        <div key={post.id} style={{ marginBottom: '16px' }}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default PostsComponent
