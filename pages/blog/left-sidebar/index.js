import React from 'react';
import PageBannerTwo from '../../../components/Common/PageBannerTwo';
import BlogLeftSidebarArea from '../../../components/Blog/BlogLeftSidebarArea';

const BlogLeftSidebar = () => {
  return (
    <>
      <PageBannerTwo
        bannerTitle='Blog Left Sidebar'
        pageName='Blog Left Sidebar'
      />
      
      <BlogLeftSidebarArea />
    </>
  );
};

export default BlogLeftSidebar;
