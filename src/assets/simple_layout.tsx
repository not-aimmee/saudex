
import { Outlet } from 'react-router-dom';
import  Header  from '../components/Header';
import  Footer  from '../components/Footer';


export default function SimpleLayout() {

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
}
