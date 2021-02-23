import React from 'react';
import { useGetUserStrava } from 'actions/social';
import { Card, CardTitle, CardText } from 'reactstrap';

const StravaCardElapsedTime = () => {
  const { data, error } = useGetUserStrava();
  const time = (data?.movingTime * 0.000277778).toFixed(2); // convert from seconds to hours
  return (
    <div>
      <Card style={{ padding: '5px' }} className='shadow-border'>
        <CardTitle>Strava Total Time</CardTitle>
        <CardText style={{ fontSize: '30px' }}>{time}</CardText>
      </Card>
    </div>
  );
};

export default StravaCardElapsedTime;
