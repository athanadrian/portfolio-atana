import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const CragCardDistance = () => {
  return (
    <div>
      <Card style={{ padding: '5px' }} className='shadow-border'>
        <CardTitle>Crag Distance Climbed</CardTitle>
        <CardText style={{ fontSize: '30px' }}>37,7 Km</CardText>
      </Card>
    </div>
  );
};

export default CragCardDistance;
