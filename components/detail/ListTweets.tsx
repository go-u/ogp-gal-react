import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';

import { Tweet } from '../../types/tweet';
import variables from '../../config/variables';

export default function ListTweets() {
  const [tweets, setTweets] = useState([] as Tweet[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const f = async () => {
      if (typeof (window) !== 'undefined') {
        const url = new URL(window.location.href);
        const fqdn = url.pathname.split('/')[2];

        let apiUrl = `http://localhost:8080/api/ogps/${fqdn}`;
        if (typeof (window) !== 'undefined') {
          const isStg = variables.domainsStg.includes(document.domain);
          const isPrd = variables.domainsPrd.includes(document.domain);
          if (isStg) {
            apiUrl = `https://api.booost.app/api/ogps/${fqdn}`;
          } else if (isPrd) {
            apiUrl = `https://api.ogp-gal.com/api/ogps/${fqdn}`;
          }
        }

        const result = await axios(apiUrl);
        setTweets(result.data);

        const w = window as any;
        w.twttr.widgets.load();
        const sleep = (msec: number) => new Promise((resolve) => setTimeout(resolve, msec));
        await sleep(1500); // twitter oEmbed パーツの初期化待ち
      }
      setLoading(false);
    };
    f();
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        {
          loading
          && <div className="text-lg pb-4">Twitterと通信中</div>
        }
        {
          loading
          && Array.from(new Array(3)).map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Box key={index} className="w-64 max-w-full pb-6">
              <Skeleton variant="rect" height={200} />
              <Box pt={0.5}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>
          ))
        }

        {
          tweets.map((tweet: Tweet) => (
            <div key={tweet.url} dangerouslySetInnerHTML={{ __html: tweet.html }} className={loading ? 'hidden' : 'visible'} />
          ))
        }
      </div>
    </div>
  );
}
