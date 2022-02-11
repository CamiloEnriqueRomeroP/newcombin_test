import './App.css';
import React from 'react';
import axios from 'axios';

export default class connectBack extends React.Component {
  state = {
   posts: []
  }
 
  componentDidMount() {
   axios.get(`http://localhost:8081/api/members`,
        { headers: { 'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsIm5hbWUiOiJzYXJhaCIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjQ0NTQ4MTEyLCJleHAiOjE2NDQ1NDkwMTJ9.iBg0A52SioBodSG8pPQi-HwdMBV1GXzZlly0onPKbVU'}})
  .then(res => {
     const posts = res.data;
     this.setState({ posts });
    })
  }

  render() {
    return (
      <table>
         <tr>
             <th>First Name</th>
             <th>Last Name</th>
             <th>Address</th>
             <th>SSN</th>
         </tr>
         <tr>
         { this.state.posts.map(post => <td>{post.firstName}</td>)}
         </tr>
     </table>
    )
   }
  }