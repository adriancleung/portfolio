import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Hero from "./screens/Hero";
import Work from "./screens/Work";
import Projects from "./screens/Projects";
import firebase from "./services/firebase";
import LiquidGlassNavBar from "./components/common/LiquidGlassNavBar";

const WrapperContainer = styled.div`
  /* background-color: #fbfcf8; */
  background-image: url(https://images.unsplash.com/photo-1647346425804-34383b95644b?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    firebase.config
      .fetchAndActivate()
      .then(() => {
        firebase.analytics.logEvent("config_load_success");
        setIsLoading(false);
      })
      .catch((err) => firebase.analytics.logEvent("config_load_failure", err));
    firebase.analytics.logEvent("app_viewed");
  }, []);

  return isLoading ? (
    <></>
  ) : (
    <WrapperContainer>
      <Hero />
      <Work />
      <Projects />
      <LiquidGlassNavBar />
    </WrapperContainer>
  );
};

export default App;
