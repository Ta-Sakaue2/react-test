import React from 'react';
import Moment from 'moment';

function Table(props) { 
  console.log(props.qiitaData);
  return (
    <table>
      <thead>
        <tr>
          <th>タイトル</th>
          <th>更新日時</th>
        </tr>
      </thead>
      <tbody>
        {props.qiitaData.map((qiitaData) => (
          <tr key={qiitaData.id}>
            <td><a href={qiitaData.url}>{qiitaData.title}</a></td>
            <td>{Moment(qiitaData.updated_at).format('YYYY-MM-DD HH:mm:ss')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;