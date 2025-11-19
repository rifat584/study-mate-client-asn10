import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import StudyPartnerCard from "./StudyPartnerCard";

const TopStudyPartners = () => {
  const [topPartners, setTopPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:3000/partners/top-rated").then((res) => {
      setTopPartners(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <h2 className="text-5xl my-20 text-center font-bold">Top Study Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topPartners.map((partner) => (
          <StudyPartnerCard key={partner._id} partner={partner} />
        ))}
      </div>
    </div>
  );
};

export default TopStudyPartners;
