
import { Outlet } from 'react-router-dom';
import  Header  from '../components/Header';
import  Footer  from '../components/Footer';
import CTA from '../components/CTA';



export default function MainLayout() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Outlet />
      <CTA />
      <Footer/>
    </div>
  );
}
