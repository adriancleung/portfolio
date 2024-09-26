interface ViewConfig {
  embedMode?: 'FULL_WINDOW' | 'IN_LINE' | 'LIGHT_BOX' | 'SIZED_CONTAINER';
  showAnnotationTools?: boolean;
  enableFormFilling?: boolean;
  showDownloadPDF?: boolean;
  showPrintPDF?: boolean;
  showZoomControl?: boolean;
  showFullScreenViewButton?: boolean;
  showFullScreen?: boolean;
  defaultViewMode?:
    | 'FIT_PAGE'
    | 'FIT_WIDTH'
    | 'TWO_COLUMN'
    | 'TWO_COLUMN_FIT_PAGE';
}

interface FileContent {
  content: {
    location: {
      url: string;
    };
  };
  metaData: {
    fileName: string;
  };
}

interface AdobeDCView {
  previewFile: (fileContent: FileContent, viewConfig: ViewConfig) => void;
}

class PDFViewerClient {
  config: object = {
    clientId: '0a9ee814afca46bea00a4ffee3734224',
  };

  adobeDCView: AdobeDCView | undefined = undefined;

  constructor(divId?: string) {
    this.config = { ...this.config, divId };
    if ((window as any).AdobeDC) {
      this.adobeDCView = new (window as any).AdobeDC.View(this.config);
    } else {
      document.addEventListener('adobe_dc_view_sdk.ready', () => {
        this.adobeDCView = new (window as any).AdobeDC.View(this.config);
      });
    }
  }

  previewFile(url: string, viewConfig: ViewConfig) {
    if (this.adobeDCView) {
      this.adobeDCView.previewFile(
        {
          content: {
            location: {
              url,
            },
          },
          metaData: {
            fileName: 'Resume_AdrianLeung.pdf',
          },
        },
        viewConfig
      );
    }
  }
}
export default PDFViewerClient;
