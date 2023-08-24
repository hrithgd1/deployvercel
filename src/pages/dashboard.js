// pages/dashboard.js

import React from 'react';

import { useRouter } from 'next/router';




const Dashboard = () => {

  const router = useRouter();

  const { email } = router.query;

  const username = email ? email.split('@')[0] : null;




  return (

    <div>

      <h1>Dashboard</h1>

      {username ? (

        <p>Hello {username}, welcome to our portal!</p>

      ) : (

        <p>Loading...</p>

      )}

    </div>

  );

};




export default Dashboard;