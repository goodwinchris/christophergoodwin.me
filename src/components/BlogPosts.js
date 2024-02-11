import React from 'react';

function BlogPosts(props) {
  return (
    <div className="page__blog blog">
      <h2 className="t-heading blog__heading">Blog Posts</h2>
      <a className="blog__post" target="_blank" href="https://medium.com/@christophergoodwin.me/accessible-file-uploads-9ecacac17276" rel="noopener noreferrer">
        <h3 className="t-heading-small blog__post__heading">Accessible File Uploads</h3>
        <p className="t-body">Browser native functionality styled to look great</p>
      </a>
      <a className="blog__post" target="_blank" href="https://dockyard.com/blog/2020/02/19/svgs-and-selects-the-accessible-and-semantic-way" rel="noopener noreferrer">
        <h3 className="t-heading-small blog__post__heading">SVGs and Selects</h3>
        <p className="t-body">An accessible way to work with images and selects</p>
      </a>
      <a className="blog__post" target="_blank" href="https://dockyard.com/blog/2019/05/22/the-digital-desk-deep-dive" rel="noopener noreferrer">
        <h3 className="t-heading-small blog__post__heading">The Digital Desk Deep Dive</h3>
        <p className="t-body">Tips, tricks, and tools to keep your digital desk clean</p>
      </a>
      <a className="blog__post" target="_blank" href="https://dockyard.com/blog/2019/02/14/introducing-hover-hover" rel="noopener noreferrer">
        <h3 className="t-heading-small blog__post__heading">Introducing Hover: Hover</h3>
        <p className="t-body">Using Interaction Media Queries to manage hover states</p>
      </a>
      <a className="blog__post" target="_blank" href="https://dockyard.com/blog/2018/06/27/customizing-slack-to-work-for-you" rel="noopener noreferrer">
        <h3 className="t-heading-small blog__post__heading">Customizing Slack to Work for You</h3>
        <p className="t-body">A few tweaks to make Slack more usable</p>
      </a>
      <a className="blog__post" target="_blank" href="https://dockyard.com/blog/2017/12/20/first-child-last-child-nth-child-and-not-nth-child" rel="noopener noreferrer">
        <h3 className="t-heading-small blog__post__heading">Pseudo-class Crash Course</h3>
        <p className="t-body">An intro to :first-child, :last-child, :nth-child, and :not</p>
      </a>
    </div>
  )
}

export default BlogPosts;