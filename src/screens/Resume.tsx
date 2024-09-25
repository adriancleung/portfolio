import React, { useEffect } from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import Button from '../components/common/Button';
import { createPortal } from 'react-dom';
import firebase from '../services/firebase';
import PDFViewerClient from '../services/PDFViewerClient';

const ResumeModalContainer = styled.div`
  background-color: #fbfcf8;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 150%;
  visibility: hidden;
  transition: top 0.7s ease-in-out, visibility 0.7s ease-in-out;
  will-change: top, visibility;
  z-index: 1;

  &.is-visible {
    visibility: visible;
    top: 0;
  }
`;

const ResumeTopBarContainer = styled.div`
  display: flex;
  justify-content: end;
`;

const ResumeContentContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ResumeModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isVisible, onClose }: ResumeModalProps) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflowY = 'hidden';
      firebase.analytics.logEvent('resume_viewed');
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [isVisible]);

  useEffect(() => {
    const pdfViewerClient = new PDFViewerClient('resume-content-container');
    pdfViewerClient.previewFile('https://api.adrianleung.dev/resume', {
      embedMode: 'SIZED_CONTAINER',
      showAnnotationTools: false,
      enableFormFilling: false,
      showDownloadPDF: true,
      showPrintPDF: false,
      showZoomControl: true,
      showFullScreenViewButton: false,
      showFullScreen: false,
      defaultViewMode: 'FIT_PAGE',
    });
  }, []);

  return createPortal(
    <ResumeModalContainer className={isVisible ? 'is-visible' : ''}>
      <ResumeTopBarContainer>
        <Button onClick={onClose}>{<CloseIcon />}</Button>
      </ResumeTopBarContainer>
      <ResumeContentContainer id='resume-content-container'></ResumeContentContainer>
    </ResumeModalContainer>,
    document.body
  );
};

export default ResumeModal;
