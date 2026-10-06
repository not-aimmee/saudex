import Hero from "./components/Home";
import Services from "./components/Services";
import HowItWorks from "./components/How_it_works";
import Industries from "./components/Industries";
import Stats from "./components/Stats";                         



export default function LandingPage(){
              return (
    <main>
      <Hero />
      <Services />
        <HowItWorks />
        <Industries />
        <Stats />
      
    </main>
  );
}