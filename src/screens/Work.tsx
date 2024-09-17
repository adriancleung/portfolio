import React from "react";
import styled from "styled-components";
import FadeInWrapper from "../components/common/FadeIn";
import { media } from "../styles/breakpoints";
import { FullScreenLayout } from "../styles/layouts";

const WorkContainer = styled(FullScreenLayout)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
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
  startDate: Date;
  endDate?: Date;
}

const WorkInfo = ({
  title,
  company,
  achievements,
  startDate,
  endDate,
}: WorkInfoProps) => {
  return (
    <WorkInfoContainer>
      <WorkTitleContainer>
        <h3>
          {title} | {company}
        </h3>
        <span>{`${startDate.toLocaleString("default", {
          month: "long",
        })} ${startDate.getFullYear()} – ${
          endDate
            ? `${endDate.toLocaleString("default", {
                month: "long",
              })} ${endDate.getFullYear()}`
            : "Present"
        }`}</span>
      </WorkTitleContainer>
      <WorkAchievementList>
        {achievements.map((achievement) => (
          <WorkAchievementItem>{achievement}</WorkAchievementItem>
        ))}
      </WorkAchievementList>
    </WorkInfoContainer>
  );
};

const Work = () => {
  return (
    <FadeInWrapper>
      <WorkContainer>
        <h2>Work Experience</h2>
        <WorkInfo
          title="Software Engineer 2"
          company="Intuit"
          achievements={[
            "Developed, trained, and deployed a machine learning model in QuickBooks Online, creating hyper-personalized dashboards with 80-90% accuracy, significantly boosting user productivity and satisfaction",
            "Successfully migrated from inception to deployment of APIs handling 100M+ daily requests to new capabilities, enhancing application performance and achieving multimillion-dollar savings by reducing infrastructural costs",
            "Led ownership of key QuickBooks Online P0 login-related assets, building end-to-end login REST APIs in microservice environments, and creating technical architecture diagrams that significantly enhanced and streamlined the authentication process",
            "Led initiatives to enhance observability, availability, and monitoring for critical login assets, resulting in reduced incidents and improved system reliability",
            "Collaborated cross-functionally to implement new authentication resources, fortifying organizational security and operational efficiency",
          ]}
          startDate={new Date(2023, 7)}
        />
        <WorkInfo
          title="Software Engineer 1"
          company="Intuit"
          achievements={[
            "Designed and implemented a new global login system across QuickBooks products, delivering a streamlined user experience to over 7 million customers worldwide",
            "Implemented rigorous testing protocols and resolved critical bugs, significantly boosting customer satisfaction and overall experience",
            "Engineered and integrated a login solution that simplified user experience, reducing development and infrastructure overheads while improving support efficiency",
          ]}
          startDate={new Date(2022, 4)}
          endDate={new Date(2023, 6)}
        />
        <WorkInfo
          title="Software Engineer"
          company="Medi-Scribe"
          achievements={[
            "Created a comprehensive documentation and drug information tool that significantly reduced the time pharmacists spend on documenting prescriptions and clinical activities",
            "Successfully configured and provisioned cloud infrastructures on AWS, optimizing scalability, security, and performance for Medi-Scribe, ensuring robust and reliable service delivery",
            "Implemented a CI/CD pipeline that streamlined builds and deployments, accelerating time-to-market for Medi-Scribe products, and enhancing team efficiency and product quality",
          ]}
          startDate={new Date(2023, 7)}
        />
        <WorkInfo
          title="Student Software Developer"
          company="Arcurve"
          achievements={[
            "Contributed to developing, testing, and implementing critical software features for a multi-million-dollar project, ensuring functionality enhancements and on-time milestone delivery",
            "Successfully migrated applications to cloud infrastructures, enhancing reliability, performance, and achieving substantial operational cost savings",
            "Designed and implemented comparative testing platforms to ensure data reliability, streamline testing processes, and improve accuracy across applications",
            "Executed optimizations on existing applications, significantly improving system performance and responsiveness, thereby enhancing user experience and operational efficiency",
          ]}
          startDate={new Date(2020, 4)}
          endDate={new Date(2021, 7)}
        />
      </WorkContainer>
    </FadeInWrapper>
  );
};

export default Work;
