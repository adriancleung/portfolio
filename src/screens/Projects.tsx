import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FullScreenLayout } from "../styles/layouts";
import FadeInWrapper from "../components/common/FadeIn";
import github, { GetRepoResponse } from "../services/github";
import { media } from "../styles/breakpoints";

const ProjectsContainer = styled(FullScreenLayout)`
  max-width: 100vw;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  
  ${media.md`
    font-size: 0.7rem;
  `}
`;

const HeaderContainer = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  ${media.lg`
    width: unset;
  `}
`;

const ProjectCarouselContainer = styled.div`
  overflow-x: scroll;
  display: flex;
  padding: 0 20px;
  gap: 40px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ProjectCard = styled.div`
  width: 380px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  flex-grow: 0;
  flex-shrink: 0;
  margin: 10px 0;
  padding: 0 10px;
  border: 1px black solid;
  border-radius: 24px;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.1);

  ${media.md`
    width: 300px;
    height: 400px;
  `}
`;

const Projects = () => {
  const [repos, setRepos] = useState<GetRepoResponse[]>();
  useEffect(() => {
    github.repos.get().then((res) => setRepos(res));
  }, []);

  return (
    <FadeInWrapper>
      <ProjectsContainer>
        <HeaderContainer>
          <h2>Projects</h2>
          <p>
            Check out some of the publicly available projects I've worked on
            previously!
          </p>
        </HeaderContainer>

        <ProjectCarouselContainer>
          {repos?.map((repo) => (
            <ProjectCard key={repo.full_name}>
              <div>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={repo.html_url}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <GitHubIcon />
                </a>

                <p>{repo.language}</p>
              </div>
            </ProjectCard>
          ))}
        </ProjectCarouselContainer>
      </ProjectsContainer>
    </FadeInWrapper>
  );
};

export default Projects;
