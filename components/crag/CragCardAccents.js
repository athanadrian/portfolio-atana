import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const CragCardAccents = () => {
  const total = 2137;
  const successful = 1771;
  const percentage = (successful * 100) / total;
  return (
    <div>
      <Card style={{ padding: '5px' }} className='shadow-border'>
        <CardTitle>
          Crag Assents <strong>{Math.ceil(percentage)} %</strong>
        </CardTitle>
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
