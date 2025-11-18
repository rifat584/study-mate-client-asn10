import React from 'react';
import Hero from '../Components/Hero';
import TopStudyPartners from '../Components/TopStudyPartners';
import HowItWorks from '../Components/HowItWorks';
import Review from '../Components/Review';

const Home = () => {
  return (
    <>
     <section>
      <Hero/>
     </section>
     <section>
      <TopStudyPartners/>
     </section>
     <section>
      <HowItWorks/>
     </section>
     <section>
      <Review/>
     </section>
    </>
  );
};

export default Home;