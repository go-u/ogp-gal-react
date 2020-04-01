import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/Layout';
import ListTweets from '../components/detail/ListTweets';

const Detail: NextPage = () => (
  <Layout>
    <h1 className="text-center text-2xl pb-4">
      シェアサンプル
    </h1>
    <ListTweets />
  </Layout>
);

export default Detail;
