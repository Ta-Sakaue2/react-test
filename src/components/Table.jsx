import React from 'react';
import GetPostList from '../containers/GetPostListContainer'

function Table() { 
  return (
    <table>
      <thead>
        <tr>
          <th>タイトル</th>
          <th>更新日時</th>
        </tr>
      </thead>
      <GetPostList />
    </table>
  )
}

export default Table;