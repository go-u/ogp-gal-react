import Head from 'next/head';
import * as React from 'react';

type HeadProps = {
    title: string,
}

export default function head(props: HeadProps) {
  const { title } = props;

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
