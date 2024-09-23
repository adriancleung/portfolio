import React from 'react';
import styled, { keyframes } from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FadeInWrapper from '../components/common/FadeIn';
import Headshot from '../assets/headshot.jpg';
import { media } from '../styles/breakpoints';
import { FullScreenLayout } from '../styles/layouts';
import firebase from '../services/firebase';

const animate = keyframes`
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
`;

const HeroContainer = styled(FullScreenLayout)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  align-items: center;

  ${media.md`
    flex-direction: column;
    font-size: 0.7rem;
  `}
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const ProfilePicture = styled.div`
  height: 500px;
  width: 500px;
  background-image: url('${Headshot}');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.3);
  animation: ${animate} 5s ease-in-out infinite;

  ${media.md`
    height: 250px;
    width: 250px;
  `}
`;

const IntroContainer = styled.div`
  flex: 1;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: black;
`;

interface AboutInfo {
  name: string;
  title: string;
  background: string;
  socialLinks: {
    type: 'LinkedIn' | 'GitHub' | 'Instagram' | 'Mail';
    url: string;
  }[];
  email: string;
}

const Hero = () => {
  const info: AboutInfo = firebase.config.get('about');
  return (
    <FadeInWrapper>
      <HeroContainer>
        <ProfileContainer>
          <ProfilePicture />
          <IntroContainer>
            <TitleContainer>
              <h1>{info.name}</h1>
              <p> | </p>
              <code>{info.title}</code>
            </TitleContainer>
            <div
              style={{ textAlign: 'justify' }}
              dangerouslySetInnerHTML={{ __html: info.background }}
            />
          </IntroContainer>
        </ProfileContainer>
        <SocialContainer>
          <SocialLink
            target='_blank'
            rel='noreferrer'
            href='https://linkedin.com/in/adriancleung'>
            <LinkedInIcon fontSize='large' />
          </SocialLink>
          <SocialLink
            target='_blank'
            rel='noreferrer'
            href='https://github.com/adriancleung'>
            <GitHubIcon fontSize='large' />
          </SocialLink>
          <SocialLink
            target='_blank'
            rel='noreferrer'
            href='https://instagram.com/adriancleung'>
            <InstagramIcon fontSize='large' />
          </SocialLink>
          <SocialLink href='mailto:leung.c.adrian@gmail.com?subject=Inquiry%20-%20Adrian%20L'>
            <EmailOutlinedIcon fontSize='large' />
          </SocialLink>
        </SocialContainer>
      </HeroContainer>
    </FadeInWrapper>
  );
};

export default Hero;
