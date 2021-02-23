import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

import Title from 'components/elements/title';

const Software = () => {
  return (
    <div>
      <Card style={{ padding: '5px' }} className='shadow-border'>
        <CardTitle style={{ fontSize: '30px' }}>Hardware</CardTitle>
        <CardText>
          <Title label='Laptop:' /> Apple MacBook Pro (15-Inch, 16GB RAM, 512GB
          Storage, 2.6GHz Intel Core i7)
        </CardText>
        <CardText>
          <Title label='Adaptor:' /> HyperDrive USB C Hub
        </CardText>
        <CardText>
          <Title label='Monitor:' /> Samsung CF390 Series 27 inch FHD 1920x1080
          Curved Desktop Monitor
        </CardText>
        <CardText>
          <Title label='Smartphone:' /> Iphone XS Max
        </CardText>
        <CardText>
          <Title label='Smartphone:' /> Iphone XS Max
        </CardText>
      </Card>
    </div>
  );
};

export default Software;
