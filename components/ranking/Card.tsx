// import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { StatProps } from '../../types/stat';

export default function Card(props: StatProps) {
  const [hasError, setError] = useState(false);
  const { Stat } = props;

  if (!hasError) {
    return (
      <Link href="detail" as={`detail/${Stat.fqdn}`}>
        <div className="f-item rounded-md overflow-hidden shadow-2xl">
          <div className="ogimage-wrapper border-b border-gray-200">
            <img src={Stat.image} alt="ogp" onError={() => { setError(true); }} />
          </div>
          <div className="py-2 px-3 h-20 relative">
            <div className="absolute top-up-6 right-0 px-2 rounded text-center bg-blue-600 text-white">
              {Stat.count}
              シェア+
            </div>
            <p className="text-base font-bold truncate">
              {Stat.title}
            </p>
            <p className="text-xs text-gray-600 font-light truncate">
              {Stat.fqdn}
            </p>
            <p className="font-medium truncate pt-1">
              {Stat.description}
            </p>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <Link href="detail" as={`detail/${Stat.fqdn}`}>
      <div className="f-item rounded-md overflow-hidden shadow-2xl">
        <div className="on-error-img-wrapper relative border-b border-gray-200">
          <img src={`${window.location.origin}/901317.png`} alt="ogp" />
          <div className="absolute bottom-0 w-full text-center text-lg pb-3">画像エラー</div>
        </div>
        <div className="py-2 px-3 h-20 relative">
          <div className="absolute top-up-6 right-0 px-2 rounded text-center bg-blue-600 text-white">
            {Stat.count}
            シェア+
          </div>
          <p className="text-base font-bold truncate">
            {Stat.title}
          </p>
          <p className="text-xs text-gray-600 font-light truncate">
            {Stat.fqdn}
          </p>
          <p className="font-medium truncate pt-1">
            {Stat.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
