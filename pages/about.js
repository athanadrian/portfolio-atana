import { useEffect } from 'react';
import { Row, Col } from 'reactstrap';

import BasePage from '../components/BasePage';
import BaseLayout from '@/components/layouts/BaseLayout';
import { useGetUser } from '@/actions/user';

const About = () => {
  const { data, loading } = useGetUser();

  useEffect(() => {
    return () => {
      window.__isAboutLoaded = true;
    };
  });

  const createFadeInClass = () => {
    if (typeof window !== 'undefined') {
      return window.__isAboutLoaded ? '' : 'fadein';
    }

    return 'fadein';
  };

  return (
    <BaseLayout className='cover' user={data} loading={loading}>
      <BasePage className='about-page'>
        <Row className='mt-5'>
          <Col md='6'>
            <div className='left-side'>
              <h1 className={`title ${createFadeInClass()}`}>Hello, Welcome</h1>
              <h4 className={`subtitle fadein`}>To About Page</h4>
              <p className={`subsubTitle fadein`}>
                Feel free to read short description about me.
              </p>
            </div>
          </Col>
          <Col md='6'>
            <div className={`fadein`}>
              <p>
                My name is Athanasios Andrianesis, (Atana) and I am an
                experienced software engineer and freelance developer.
              </p>
              <p>
                I have a degree in Computer Science and several years of
                experience working on a wide range of technologies and projects
                from C# development for Document Management Projects, to modern
                mobile and web applications in React, React-Native and Angular.
              </p>
              <p>
                Throughout my career, I have acquired advanced technical
                knowledge and the ability to use several platforms, libraries,
                frameworks. I invite you to check my portfolios, where I have
                put a lot of effort to implement several projects.
              </p>
              <p>
                In addition I am a maniac rock climber having more than 2000
                assents and over 36 Km distance climbed. Mostly I prefer sport
                climbing but I do not miss the opportunity to go trad also!
              </p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default About;
