
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import  Header  from '../components/Header';
import  Footer  from '../components/Footer';


export default function SimpleLayout() {

  return (
    <div className="overflow-x-hidden">
      <Header />
       <Suspense fallback={<div className="min-h-screen" />}>
    <Outlet />
  </Suspense>
      <Footer/>
    </div>
  );
}
