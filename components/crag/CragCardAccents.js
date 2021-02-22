import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const CragCardAccents = () => {
  return (
    <div>
      <Card style={{ padding: '5px' }} className='shadow-border'>
        <CardTitle>Crag Assents</CardTitle>
        <CardText style={{ fontSize: '30px' }}>
          2015 - <span style={{ fontSize: '30px', color: 'teal' }}>1666</span> /{' '}
          <span style={{ fontSize: '30px', color: 'tomato' }}>
            {2015 - 1666}
          </span>
        </CardText>
      </Card>
    </div>
  );
};

export default CragCardAccents;
