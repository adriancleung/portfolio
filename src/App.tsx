import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Hero from './screens/Hero';
import Work from './screens/Work';
import Projects from './screens/Projects';
import firebase from './services/firebase';

const WrapperContainer = styled.div`
  background-color: #fbfcf8;
`;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    firebase.config
      .fetchAndActivate()
      .then(() => {
        firebase.analytics.logEvent('config_load_success');
        setIsLoading(false);
      })
      .catch(err => firebase.analytics.logEvent('config_load_failure', err));
    firebase.analytics.logEvent('app_viewed');
  }, []);

  return isLoading ? (
    <></>
  ) : (
    <WrapperContainer>
      <Hero />
      <Work />
      <Projects />
    </WrapperContainer>
  );
};

export default App;
