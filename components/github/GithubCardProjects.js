import { useGetUserGithub } from 'actions/social';
import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const GitHubCardProjects = () => {
  const { data, error } = useGetUserGithub();
  const numProjects = data?.numProjects ?? 120;
  return (
    <div>
      <Card style={{ padding: '5px' }} className='shadow-border'>
        <CardTitle>GitHub Repos</CardTitle>
        <CardText style={{ fontSize: '30px' }}>{numProjects}</CardText>
      </Card>
    </div>
  );
};

export default GitHubCardProjects;
