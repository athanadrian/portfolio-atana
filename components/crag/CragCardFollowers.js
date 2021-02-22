import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const CragCardFollowers = () => {
  return (
    <div>
      <Card style={{ padding: '5px' }} className='shadow-border'>
        <CardTitle>Crag Followers</CardTitle>
        <CardText style={{ fontSize: '30px' }}>5</CardText>
      </Card>
    </div>
  );
};

export default CragCardFollowers;
