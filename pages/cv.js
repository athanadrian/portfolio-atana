import React from 'react';
import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layouts/BaseLayout';
import { useGetUser } from '@/actions/user';
import { Col, Row } from 'reactstrap';
import GitHubCardFollowers from 'components/github/GithubCardFollowers';
import GitHubCardForks from 'components/github/GithubCardForks';
import GithubCardProjects from 'components/github/GithubCardProjects';
import CragCardDistance from 'components/crag/CragCardDistance';
import CragCardAccents from 'components/crag/CragCardAccents';
import CragCardFollowers from 'components/crag/CragCardFollowers';
import StravaCardElapsedTime from 'components/strava/StravaCardElapsedTime';
import StravaCardMiles from 'components/strava/StravaCardMiles';
import StravaCardRuns from 'components/strava/StravaCardRuns.js';

const Cv = () => {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout
      className='cover'
      user={data}
      loading={loading}
      title='My Experience - Atana'
    >
      <BasePage>
        <h1 className='pb-2'>Social</h1>
        <Row className='my-2'>
          <Col md>
            <GithubCardProjects />
          </Col>
          <Col md>
            <GitHubCardFollowers />
          </Col>
          <Col md>
            <GitHubCardForks />
          </Col>
        </Row>
        <Row className='my-2'>
          <Col md>
            <StravaCardElapsedTime />
          </Col>
          <Col md>
            <StravaCardMiles />
          </Col>
          <Col md>
            <StravaCardRuns />
          </Col>
        </Row>
        <Row className='my-2'>
          <Col md>
            <CragCardAccents />
          </Col>
          <Col md>
            <CragCardDistance />
          </Col>
          <Col md>
            <CragCardFollowers />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default Cv;
