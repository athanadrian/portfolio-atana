import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const CragCardAccents = () => {
  const total = 2125;
  const successful = 1767;
  const percentage = (successful * 100) / total;
  return (
    <div>
      <Card style={{ padding: '5px' }} className='shadow-border'>
        <CardTitle>Crag Assents {percentage} %</CardTitle>
        <CardText style={{ fontSize: '30px' }}>
          {total} -{' '}
          <span style={{ fontSize: '30px', color: 'teal' }}>{successful}</span>{' '}
          /{' '}
          <span style={{ fontSize: '30px', color: 'tomato' }}>
            {total - successful}
          </span>
        </CardText>
      </Card>
    </div>
  );
};

export default CragCardAccents;
