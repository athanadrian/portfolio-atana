import React from 'react';
import { useGetUserStrava } from 'actions/social';
import { Card, CardTitle, CardText } from 'reactstrap';

const StravaCardMiles = () => {
  const { data, error } = useGetUserStrava();
  const distance = (data?.distance / 1000).toFixed(2) ?? 5500; //given in meters so we need to convert to miles
  return (
    <div>
      <Card style={{ padding: '5px' }} className='shadow-border'>
        <CardTitle>Strava Total Kilometers Run</CardTitle>
        <CardText style={{ fontSize: '30px' }}>{distance} Km</CardText>
      </Card>
    </div>
  );
};

export default StravaCardMiles;
