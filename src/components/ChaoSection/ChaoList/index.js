import React from 'react';
import Chao from '../Chao';

const ChaoList = (props) => {
  const { users } = props;
  const mapUsers = ({ fname, id }) => (
        <Chao key={id} name={fname} />)
  return (
    <div>
      {users.map(mapUsers)}
    </div>
  );
}

export default ChaoList;
