import React, { Component } from 'react';
import SelectedUsers from './SelectedUsers';
import UserList from './UserList';


const userDB = [
  {
    id: 1,
    fname: 'Elon'
  },
  {
    id: 2,
    fname: 'Rob'
  },
  {
    id: 3,
    fname: 'Tom'
  },
  {
    id: 4,
    fname: 'Alex'
  },
  {
    id: 5,
    fname: 'Max'
  },
];

class UsersSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:userDB.map((user)=>( {...user,isSelected:false})),
    }
  }

  setUserSelector =(newUsers)=>{this.setState({users:newUsers})}

  render() {
    const { users } = this.state;
    return <>
      <SelectedUsers users={users} />
      <UserList users={users} setUserSelector={this.setUserSelector} />
    </>
  }
}

export default UsersSection;
