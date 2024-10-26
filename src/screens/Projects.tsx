import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FullScreenLayout } from '../styles/layouts';
import FadeInWrapper from '../components/common/FadeIn';
import github, { GetRepoResponse } from '../services/github';
import { media } from '../styles/breakpoints';
import firebase from '../services/firebase';

const ProjectsContainer = styled(FullScreenLayout)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  ${media.md`
    font-size: 0.7rem;
  `}
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const ProjectCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  gap: 20px;
`;

const ProjectCard = styled.div<{ large?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  width: ${props => (props.large ? '300px' : '200px')};
  flex-grow: 1;
  flex-shrink: 0;
  gap: 10px;
  padding: 20px;
  border-radius: 30px;
  background-color: #f5f5f7;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    background-color: #f0f0f0;
  }
`;

const Projects = () => {
  const [repos, setRepos] = useState<GetRepoResponse[]>();
  useEffect(() => {
    github.repos
      .get()
      .then(res => {
        firebase.analytics.logEvent('repos_fetch_success');
        setRepos(res);
      })
      .catch(err => firebase.analytics.logEvent('repos_fetch_failed', err));
    firebase.analytics.logEvent('projects_viewed');
  }, []);

  const handleProjectLinkClick = useCallback(
    (repo_name: string, repo_url?: string) => {
      firebase.analytics.logEvent(`project_link_clicked`, { repo_name });
      repo_url && window.open(repo_url, '_blank');
    },
    []
  );

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

        <ProjectCardsContainer>
          {repos?.map(repo => (
            <ProjectCard
              key={repo.full_name}
              large={repo.description.split(' ').length > 7}
              onClick={e => {
                e.stopPropagation();
                handleProjectLinkClick(repo.full_name, repo.html_url);
              }}>
              <div>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <a
                  target='_blank'
                  rel='noreferrer'
                  onClick={e => {
                    e.stopPropagation();
                    handleProjectLinkClick(repo.full_name);
                  }}
                  href={repo.html_url}
                  style={{ textDecoration: 'none', color: '#1d1d1f' }}>
                  <GitHubIcon />
                </a>

                <p>{repo.language}</p>
              </div>
            </ProjectCard>
          ))}
        </ProjectCardsContainer>
      </ProjectsContainer>
    </FadeInWrapper>
  );
};

export default Projects;
