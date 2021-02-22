import React from 'react';
import { useGetUserStrava } from 'actions/social';
import { Card, CardTitle, CardText } from 'reactstrap';

const StravaCardRuns = () => {
  const { data, error } = useGetUserStrava();
  const count = data?.count ?? '4,789';
  return (
    <div>
      <Card style={{ padding: '5px' }} className='shadow-border'>
        <CardTitle>Total Runs</CardTitle>
        <CardText style={{ fontSize: '30px' }}>{count}</CardText>
      </Card>
    </div>
  );
};

export default StravaCardRuns;
