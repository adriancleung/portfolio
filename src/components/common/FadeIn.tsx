import { createRef, useEffect, useState } from "react";
import styled from "styled-components";

const FadeInContainer = styled.div`
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s ease-in, visibility 1s ease-in;
  will-change: opacity, visibility;

  &.is-visible {
    opacity: 1;
    visibility: visible;
  }
`;

interface FadeInWrapperProps {
  children: React.ReactNode;
}

const FadeInWrapper = ({ children }: FadeInWrapperProps) => {
  const [isVisible, setVisibility] = useState(false);
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setVisibility(entry.isIntersecting));
      },
      { threshold: 0.2 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <FadeInContainer ref={ref} className={isVisible ? "is-visible" : ""}>
      {children}
    </FadeInContainer>
  );
};

export default FadeInWrapper;
