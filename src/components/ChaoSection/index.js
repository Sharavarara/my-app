import React, { Component } from 'react';
import ChaoList from './ChaoList'
const userDB = [
  {
    id: 4,
    fname: 'Elon'
  },
  {
    id: 5,
    fname: 'Rob'
  },
  {
    id: 3,
    fname: 'Tom'
  },
  {
    id: 1,
    fname: 'Alex'
  },
  {
    id: 2,
    fname: 'Max'
  },
];
class ChaoSection extends Component {
  constructor(props) {
    super(props);
        this.state = {
      isStraightSordName: true,
      isStraightSordId: true,
      users: userDB,
    }
  }
  
  sortUsersById = () => {
    const { users,isStraightSordId } = this.state;
    const copyUsers = JSON.parse(JSON.stringify(users));
    copyUsers.sort((prev, next) => {
      return isStraightSordId?prev.id - next.id:next.id-prev.id;
    })
    this.setState({ users: copyUsers,isStraightSordId:!isStraightSordId });
  }

  sortUsersByName = () => {
    const { users,isStraightSordName } = this.state;
    const copyUsers = JSON.parse(JSON.stringify(users));
    copyUsers.sort((prev, next) => {
      if (prev.fname < next.fname) {
        return isStraightSordName ? -1 : 1;
      };
      if (prev.fname > next.fname) {
        return isStraightSordName ? 1 : -1;
      }
    })
    this.setState({ users: copyUsers,isStraightSordName:!isStraightSordName });
  }
  render() {
    const { users,isStraightSordId:isIdUp,isStraightSordName:isNameUp} = this.state;
    return <>
      <button onClick={this.sortUsersByName}>Sort by Name {isNameUp?'up':'down'}</button>
      <button onClick={this.sortUsersById}>Sort by ID {isIdUp ? 'up' : 'down'}</button>
      <ChaoList users={users} />
      {/* {users.map(({fname,id}) => <Chao key={id} name={fname} /> )} */}
    </>
  }
}

export default ChaoSection;
