import React from "react";
import styled, { keyframes } from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FadeInWrapper from "../components/common/FadeIn";
import Headshot from "../assets/headshot.jpg";
import { media } from "../styles/breakpoints";
import { FullScreenLayout } from "../styles/layouts";

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
  background-image: url("${Headshot}");
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

const Hero = () => {
  return (
    <FadeInWrapper>
      <HeroContainer>
        <ProfileContainer>
          <ProfilePicture />
          <IntroContainer>
            <TitleContainer>
              <h1>Adrian Leung</h1>
              <p> | </p>
              <code>Software Engineer @ Intuit</code>
            </TitleContainer>
            <div style={{ textAlign: "justify" }}>
              <p>Thanks for dropping by!</p>
              <p>
                My name is <strong>Adrian</strong> and I’m a{" "}
                <strong>full-stack software engineer</strong> with an emphasis
                in backend development. I hold a{" "}
                <strong>BSc. - Computing Science</strong> from the University of
                Alberta. I have <strong>2+ years of experience</strong> working
                in consulting and financial technologies. My previous works
                include authentication, monolithic development and migration,
                GTM initatives, as well as AI/ML development.
              </p>
              <p>
                I’m passionate about finding innovative ways to problem-solving
                and using my skills to help others achieve their full potential.
              </p>
              <p>
                In my free time, I’m passionate about hiking, camping, playing
                volleyball, bouldering, skiing, and snowboarding, golfing, and
                cycling. I also enjoy hanging out with friends and exploring the
                great outdoors. Feel free to connect with me on my various
                platforms and I look forward to hearing from you!
              </p>
            </div>
          </IntroContainer>
        </ProfileContainer>
        <SocialContainer>
          <SocialLink
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/adriancleung"
          >
            <LinkedInIcon fontSize="large" />
          </SocialLink>
          <SocialLink
            target="_blank"
            rel="noreferrer"
            href="https://github.com/adriancleung"
          >
            <GitHubIcon fontSize="large" />
          </SocialLink>
          <SocialLink
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/adriancleung"
          >
            <InstagramIcon fontSize="large" />
          </SocialLink>
          <SocialLink href="mailto:leung.c.adrian@gmail.com?subject=Inquiry%20-%20Adrian%20L">
            <EmailOutlinedIcon fontSize="large" />
          </SocialLink>
        </SocialContainer>
      </HeroContainer>
    </FadeInWrapper>
  );
};

export default Hero;
