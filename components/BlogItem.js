import Link from 'next/link';
import { formatDate } from 'utils/functions';

const BlogItem = ({ blog }) => (
  <div>
    <div className='post-preview clickable'>
      <Link href='/blogs/[slug]' as={`/blogs/${blog.slug}`}>
        <a>
          <h2 className='post-title'>{blog.title}</h2>
          <h3 className='post-subtitle'>{blog.subTitle}</h3>
        </a>
      </Link>
      <p className='post-meta'>
        Posted by
        <a href='#'> Atana </a>- {formatDate(blog.createdAt, 'LLLL')}
      </p>
    </div>
  </div>
);

export default BlogItem;
