import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

const PostList = ({ posts }) => (
  <tbody>
    { posts.map((post, index) => 
      <Post key={index} {...post}/>
    )}
  </tbody>
)

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default PostList