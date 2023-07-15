import React from 'react';
import user from "../user.json"
import User from './User/User'
import data from "../data.json"
import Statistics from './Statistics/Statistics'
import friends from "../friends.json"
import FriendList from './FriendList/FriendList'
import TransactionHistory from './TransactionHistory/TransactionHistory/TransactionHistory'
import transactions from "../transactions.json"

export const App = () => {
  return (
    <>
      <User user={ user } />
      <Statistics title={'Upload stats'} data={data}/>
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions}/>
    </>
    
  );
};
