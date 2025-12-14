import { useParams } from 'react-router-dom';

function Blog() {
  const { id } = useParams();
  return <h2>Blog Post ID: {id}</h2>;
}

export default Blog;
