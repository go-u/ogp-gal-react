import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/Layout';
import PickUp from '../components/pickup/PickUp';
import ListWithPaging from '../components/ranking/ListWithPaging';

const Home: NextPage = () => (
  <Layout>
    <PickUp />
    <h1 className="text-center text-2xl py-4">
      シェアランキング
    </h1>
    <ListWithPaging />
  </Layout>
);

export default Home;
