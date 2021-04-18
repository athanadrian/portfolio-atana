import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const CragCardFollowers = () => {
  return (
    <div>
      <Card>
        <div className='d-flex'>
          <div>
            <CardTitle>Crag Followers</CardTitle>
            <CardText style={{ fontSize: '30px' }}>5</CardText>
          </div>
          <div>
            <CardTitle>Crag Following</CardTitle>
            <CardText style={{ fontSize: '30px' }}>8</CardText>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CragCardFollowers;
