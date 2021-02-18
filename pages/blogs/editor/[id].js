import React from 'react';
import { Editor } from 'slate-simple-editor';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layouts/BaseLayout';
import withAuth from '@/hoc/withAuth';
import { useGetBlog, useUpdateBlog } from 'actions/blogs';

const BlogUpdateEditor = ({ user, loading }) => {
  const router = useRouter();
  const { data } = useGetBlog(router.query.id);
  const [updateBlog, { error, loading: isBlogSaving }] = useUpdateBlog();

  const _updateBlog = async (data) => {
    await updateBlog(router.query.id, data);
    toast.success('Blog updated!');
  };

  if (error) {
    toast.error(error);
  }

  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        {/* <Editor header='Update Your Blog...' onSave={() => {}} /> */}
        {data && data.content && (
          <Editor
            header='Update Your Blog...'
            initialContent={data.content}
            onSave={_updateBlog}
            loading={isBlogSaving}
          />
        )}
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(BlogUpdateEditor)('admin');
