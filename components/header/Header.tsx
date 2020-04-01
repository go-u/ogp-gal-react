import React from 'react';
import Link from 'next/link';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles(() => createStyles({
  homeBtn: {
    paddingLeft: '0!important',
  },
  menuBtn: {
    color: 'black',
    backgroundColor: '#E7C352',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <header className="fixed top-0 w-full bg-gray-800 text-white z-50">
      <Toolbar disableGutters variant="dense" className="container mx-auto flex justify-between bg-gray-800">
        <Button
          href="/"
          color="inherit"
          className={classes.homeBtn}
        >
          <BookmarkBorderIcon fontSize="large" />
          <span className="text-lg font-bold pl-1">
            OGPギャラリー
          </span>
        </Button>

        <Link href="/">
          <Button color="secondary" variant="contained">メニュー</Button>
        </Link>
      </Toolbar>
    </header>
  );
}
