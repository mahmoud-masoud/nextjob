import { createBrowserRouter } from 'react-router';
import Home from '@/home/Home';
import BuildCVWrapper from '@/upload-cv/BuildCVWrapper';
import GenerateCVForm from '@/upload-cv/GenerateCvForm';
import Root from '@/Root';
import Jobs from '@/jobs/Jobs';
import CvViewer from './CvViewer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <div>Something went wrong</div>,
      },
      {
        path: '/choose-method',
        element: <BuildCVWrapper />,
        errorElement: <div>Something went wrong</div>,
      },
      {
        path: '/generate-cv',
        element: <GenerateCVForm />,
        errorElement: <div>Something went wrong</div>,
      },
      {
        path: '/jobs',
        element: <Jobs />,
        errorElement: <div>Something went wrong</div>,
      },
      {
        path: '/cv-viewer',
        element: <CvViewer />,
        errorElement: <div>Something went wrong</div>,
      },
    ],
  },
]);

export default router;
