import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

import Title from 'components/elements/Title';

const Software = () => {
  return (
    <div>
      <Card style={{ padding: '5px' }} className='shadow-border'>
        <CardTitle style={{ fontSize: '30px' }}>Software</CardTitle>
        <CardText>
          <Title label='IDE:' /> Visual Studio Code
        </CardText>
        <CardText>
          <Title label='API Tester:' /> Postman
        </CardText>
        <CardText>
          <Title label='Browser:' /> Google Chrome
        </CardText>
        <CardText>
          <Title label='IPhone Simulator:' /> XCode
        </CardText>
        <CardText>
          <Title label='Android Simulator:' /> Android Studio
        </CardText>
        <CardText>
          <Title label='Terminal:' /> Mac Terminal
        </CardText>
        <CardText>
          <Title label='Cloud DB:' /> Mongo Atlas
        </CardText>
        <CardText>
          <Title label='Local DB:' /> MongoDB, Robo 3T, MongoDB Compass
        </CardText>
      </Card>
    </div>
  );
};

export default Software;
