import { useGetUserGithub } from 'actions/social';
import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const GitHubCardForks = () => {
  const { data, error } = useGetUserGithub();
  const forksCount = data?.forksCount ?? 12;
  return (
    <div>
      <Card style={{ padding: '5px' }} className='shadow-border'>
        <CardTitle>GitHub Forks</CardTitle>
        <CardText style={{ fontSize: '30px' }}>{forksCount}</CardText>
      </Card>
    </div>
  );
};

export default GitHubCardForks;
