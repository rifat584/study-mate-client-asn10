import React, { useContext, useEffect, useState } from "react";
import ContentContainer from "../Containers/ContentContainer";
import axios from "axios";
import AuthContext from "../Providers/AuthContext";
import Spinner from "../Components/Spinner";
import PartnerCard from "../Components/PartnerCard";

const FindPartners = () => {
  const [partners, setPartners] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/partners/query", {
        params: {
          sort: sortValue,
          search: searchValue,
        },
      })
      .then((res) => {
        setPartners(res.data);
        setLoading(false);
      });
  }, [searchValue, sortValue]);

  return (
    <ContentContainer>
      <main className="min-h-screen">
        <h2 className="text-5xl font-bold text-center my-20">
          Find your Study Partners
        </h2>
        <div className="flex items-center justify-between my-8">
          <div className="">
            <select
              className="select appearance-none"
              value={sortValue}
              onChange={(e) => setSortValue(e.target.value)}
            >
              <option disabled={true} value="">
                Sort by Experience
              </option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                placeholder="Search your Subject"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </label>
          </form>
        </div>

        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <PartnerCard key={partner._id} partner={partner} />
            ))}
          </div>
        )}
      </main>
    </ContentContainer>
  );
};

export default FindPartners;
