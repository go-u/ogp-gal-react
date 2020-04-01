import React, { useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import { stat } from '../../types/stat';
import { RootState } from '../../stores';
import { getStats } from '../../stores/stat';

export default function ListWithPaging() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const stats = useSelector((state: RootState) => state.stat.stats);

  useEffect(() => {
    const f = async () => {
      await dispatch(getStats());
      setLoading(false);
      const url = new URL(window.location.href);
      const p = url.searchParams.get('page');
      if (p) {
        setPage(parseInt(p, 10));
      }
    };
    f();
  }, []);

  const itemsPerPage = 21;
  function maxPage(items: stat[]) {
    return Math.floor(items.length / itemsPerPage) + 1;
  }

  function onClickNumber(pageTo: number) {
    setPage(pageTo);
    const url = new URL(window.location.href);
    createBrowserHistory().push(`${url.pathname}?page=${pageTo}`);
  }

  return (
    <div className="w-full">
      <div className="w-full flex flex-row flex-wrap justify-start">
        {
          loading
          && Array.from(new Array(3)).map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Box key={index} className="f-item">
              <Skeleton variant="rect" height={200} />
              <Box pt={0.5}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>
          ))
        }

        {
          stats.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((item: stat) => (
            <Card Stat={item} key={item.fqdn} />
          ))
        }
      </div>
      <div className="flex justify-center">
        <Pagination
          count={maxPage(stats)}
          page={page}
          onChange={(e, offset) => onClickNumber(offset)}
        />
      </div>
    </div>
  );
}
