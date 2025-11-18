import React from "react";
import Hero from "../Components/Hero/Hero";
import TopStudyPartners from "../Components/TopStudyPartners";
import HowItWorks from "../Components/HowItWorks";
import Review from "../Components/Review";
import ContentContainer from "../Containers/ContentContainer";

const Home = () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <ContentContainer>
        <section>
          <TopStudyPartners />
        </section>
        <section>
          <HowItWorks />
        </section>
        <section>
          <Review />
        </section>
      </ContentContainer>
    </>
  );
};

export default Home;
