import React from 'react';
import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';
/* 
export default () => (
  <div>
    <Route exec path='/' component={Home} />
    <Route exec path='/users' component={UsersList} />
  </div>
); */

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    loadData,
    path: '/users',
    component: UsersList,
  },
];
