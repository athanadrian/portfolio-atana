import React from 'react';
import { Editor } from 'slate-simple-editor';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layouts/BaseLayout';
import withAuth from '@/hoc/withAuth';
import { useCreateBlog } from 'actions/blogs';

const BlogEditor = ({ user, loading }) => {
  const router = useRouter();
  const [createBlog, { error, loading: blogLoading }] = useCreateBlog();

  const saveBlog = async (data) => {
    const createdBlog = await createBlog(data);
    router.push('/blogs/editor/[id]', `/blogs/editor/${createdBlog._id}`);
  };

  if (error) {
    toast.error(error);
  }

  return (
    <BaseLayout className='cover' user={user} loading={loading}>
      <BasePage>
        <Editor onSave={saveBlog} loading={blogLoading} />
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(BlogEditor)('admin');
