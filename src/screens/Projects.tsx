import React from "react";
import styled from "styled-components";
import { FullScreenLayout } from "../styles/layouts";
import FadeInWrapper from "../components/common/FadeIn";

const ProjectsContainer = styled(FullScreenLayout)``;

const Projects = () => {
  return (
    <FadeInWrapper>
      <ProjectsContainer />
    </FadeInWrapper>
  );
};

export default Projects;
