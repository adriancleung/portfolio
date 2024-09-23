import React from 'react';
import styled from 'styled-components';
import FadeInWrapper from '../components/common/FadeIn';
import { media } from '../styles/breakpoints';
import { FullScreenLayout } from '../styles/layouts';
import firebase from '../services/firebase';

const WorkContainer = styled(FullScreenLayout)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  ${media.md`
    font-size: 0.7rem;
  `}
`;

const WorkInfoContainer = styled.div``;

const WorkTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.md`
    flex-direction: column;
    align-items: baseline;
  `}
`;

const WorkAchievementList = styled.ul`
  margin: 0;
  padding: 20px;
`;

const WorkAchievementItem = styled.li`
  text-align: justify;
  line-height: 1.7rem;
`;

interface WorkInfoProps {
  title: string;
  company: string;
  achievements: string[];
  startDate: string;
  endDate?: string;
}

const WorkInfo = ({
  title,
  company,
  achievements,
  startDate,
  endDate,
}: WorkInfoProps) => {
  const startMonth = Intl.DateTimeFormat('default', { month: 'long' }).format(
    new Date(startDate.split('-')[1])
  );
  const startYear = startDate.split('-')[0];
  const endMonth =
    endDate &&
    Intl.DateTimeFormat('default', { month: 'long' }).format(
      new Date(endDate.split('-')[1])
    );
  const endYear = endDate && endDate.split('-')[0];
  return (
    <WorkInfoContainer>
      <WorkTitleContainer>
        <h3>
          {title} | {company}
        </h3>
        <span>{`${startMonth} ${startYear} – ${
          endDate ? `${endMonth} ${endYear}` : 'Present'
        }`}</span>
      </WorkTitleContainer>
      <WorkAchievementList>
        {achievements.map((achievement, index) => (
          <WorkAchievementItem key={`achievement-${index}`}>
            {achievement}
          </WorkAchievementItem>
        ))}
      </WorkAchievementList>
    </WorkInfoContainer>
  );
};

interface WorkExperience {
  title: string;
  company: string;
  achievements: string[];
  startDate: string;
  endDate?: string;
}

const Work = () => {
  const workExperiences: WorkExperience[] = firebase.config.get('work');
  return (
    <FadeInWrapper>
      <WorkContainer>
        <h2>Work Experience</h2>
        {workExperiences.map(workExperience => (
          <WorkInfo
            key={`${workExperience.title}-${workExperience.company}`}
            title={workExperience.title}
            company={workExperience.company}
            achievements={workExperience.achievements}
            startDate={workExperience.startDate}
            endDate={workExperience.endDate}
          />
        ))}
      </WorkContainer>
    </FadeInWrapper>
  );
};

export default Work;
