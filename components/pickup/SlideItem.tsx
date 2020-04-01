import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { PickUpProps } from '../../types/pickup';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '400px!important',
    objectFit: 'none',
  },
});

export default function SlideItem(props: PickUpProps) {
  const classes = useStyles();
  const { PickUpItem } = props;
  return (
    <div className="static">
      <img src={PickUpItem.image} className={classes.root} alt="pick up" />
      <div className="absolute container bottom-0 bg-gray-900 text-white py-2 px-4 ">
        <p className="text-lg truncate">
          今週のピックアップ
        </p>
        <p className="font-medium truncate pt-1">
          {PickUpItem.title}
        </p>
      </div>
    </div>
  );
}
