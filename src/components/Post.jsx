import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment';


const Post = ({ id, url, title, updated_at }) => (
  <tr key={id}>
    <td><a href={url} rel="noreferrer noopener" target="_blank">{title}</a></td>
    <td>{Moment(updated_at).format('YYYY-MM-DD HH:mm:ss')}</td>
  </tr>
)

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired
  })
}

export default Post