
import { Outlet } from 'react-router-dom';
import  Header  from '../components/Header';
import  Footer  from '../components/Footer';
import DeferredSection from '../components/DeferredSection';
import AsyncErrorBoundary from '../components/AsyncSectionBoundary';
import CTA from '../components/CTA';

export default function MainLayout() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Outlet />
      <AsyncErrorBoundary>
        <DeferredSection minHeight="600px">
          <CTA />
        </DeferredSection>
      </AsyncErrorBoundary>
      <Footer/>
    </div>
  );
}
