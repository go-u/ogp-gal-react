import * as React from 'react';

import Slider, { Settings } from 'react-slick';
import pickUp from './pickup.json';
import { pickUpItem } from '../../types/pickup';
import SlideItem from './SlideItem';


export default function PickUp() {
  const settings: Settings = {
    infinite: true,
    speed: 300,
    autoplaySpeed: 5000,
    autoplay: true,
  };

  return (
    <div className="container">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...settings}>
        {
          pickUp.map((item: pickUpItem) => (
            <div key={item.fqdn}>
              <SlideItem PickUpItem={item} />
            </div>
          ))
        }
      </Slider>
    </div>
  );
}
