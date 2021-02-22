import { useGetUserGithub } from 'actions/social';
import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const GitHubCardFollowers = () => {
  const { data, error } = useGetUserGithub();
  const numFollowers = data?.numFollowers ?? 476;
  return (
    <div>
      <Card style={{ padding: '5px' }} className='shadow-border'>
        <CardTitle>GitHub Followers</CardTitle>
        <CardText style={{ fontSize: '30px' }}>{numFollowers}</CardText>
      </Card>
    </div>
  );
};

export default GitHubCardFollowers;
