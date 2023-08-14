import React from 'react';

import User from './User/User';
import Statistics from './Statistics/Statistics';
import Friends from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory/TransactionHistory';

import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

export const App = () => {
  return (
    <>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Upload stats'} data={data}/>
      <Friends friends={friends} />
      <TransactionHistory transactions={transactions}/>
    </>
    
  );
};
