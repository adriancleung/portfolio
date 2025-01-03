import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import FadeInWrapper from "../components/common/FadeIn";
import { media } from "../styles/breakpoints";
import { FullScreenLayout } from "../styles/layouts";
import firebase from "../services/firebase";
import Button from "../components/common/Button";
import ResumeModal from "./Resume";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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

const ResumeButtonContainer = styled.div`
  margin: 0 auto;
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
  console.log(new Date(startDate.split("-")[1]));
  const startMonth = MONTHS[Number(startDate.split("-")[1]) - 1];
  const startYear = startDate.split("-")[0];
  const endMonth = endDate && MONTHS[Number(endDate.split("-")[1]) - 1];
  const endYear = endDate && endDate.split("-")[0];
  return (
    <WorkInfoContainer>
      <WorkTitleContainer>
        <h3>
          {title} | {company}
        </h3>
        <span>{`${startMonth} ${startYear} – ${
          endDate ? `${endMonth} ${endYear}` : "Present"
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

const Work = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const workExperiences: WorkInfoProps[] = firebase.config.get("work");

  useEffect(() => {
    firebase.analytics.logEvent("work_viewed");
  });

  const handleResumeButtonClick = useCallback(() => {
    setShowResumeModal(true);
    firebase.analytics.logEvent("resume_link_clicked");
  }, []);

  const handleResumeModalClose = useCallback(() => {
    setShowResumeModal(false);
    firebase.analytics.logEvent("resume_modal_closed");
  }, []);

  return (
    <FadeInWrapper>
      <WorkContainer>
        <h2>Work Experience</h2>
        {workExperiences.map((workExperience) => (
          <WorkInfo
            key={`${workExperience.title}-${workExperience.company}`}
            {...workExperience}
          />
        ))}
        <ResumeButtonContainer>
          <Button
            onClick={handleResumeButtonClick}
            styleOverride={{ textDecorationLine: "underline" }}
          >
            View resume
          </Button>
        </ResumeButtonContainer>
      </WorkContainer>
      <ResumeModal
        isVisible={showResumeModal}
        onClose={handleResumeModalClose}
      />
    </FadeInWrapper>
  );
};

export default Work;
