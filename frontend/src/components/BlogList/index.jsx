import {Link} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const BlogList = ({blogs}) => {
  return (
    <div className="blog-list">
      {/* eslint-disable-next-line react/prop-types */}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p><b>Written by</b> { blog.author?.full_name }</p>
            <p><b>Category</b> { blog.category?.title }</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
