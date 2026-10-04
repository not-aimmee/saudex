
import { Outlet } from 'react-router-dom';
import  Header  from '../components/Header';
import  Footer  from '../components/Footer';
import DeferredSection from '../components/DeferredSection';
import { lazy, Suspense } from 'react';

const CTA = lazy(() => import('../components/CTA'));

export default function MainLayout() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Outlet />
      <DeferredSection minHeight="600px">
        <Suspense fallback={null}>
          <CTA />
        </Suspense>
      </DeferredSection>
      <Footer/>
    </div>
  );
}
