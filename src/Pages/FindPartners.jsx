import React, { useContext, useEffect, useState } from "react";
import ContentContainer from "../Containers/ContentContainer";
import axios from "axios";
import AuthContext from "../Providers/AuthContext";
import Spinner from "../Components/Spinner";
import PartnerCard from "../Components/PartnerCard";

const FindPartners = () => {
  const [partners, setPartners] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const { loading, setLoading } = useContext(AuthContext);

  useEffect(() => {
    const handleSearch = () => {
      const value = searchValue.toLowerCase();
      axios.get(`http://localhost:3000/partners/${value}`).then((res) => {
        setPartners(res.data);
        setLoading(false);
      });
    };

    handleSearch();
  }, [searchValue, setLoading]);
  
  const handleSort = (e)=>{
    console.log(e.target.value);
  }
  if (loading) {
    return <Spinner />;
  }

  return (
    <ContentContainer>
      <main>
        <h2 className="text-5xl font-bold text-center my-20">
          Find your Study Partners
        </h2>
        <div className="flex items-center justify-between my-8">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort by Experience
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              onClick={handleSort}
            >
              <li>
                <a value="Beginner">Beginner</a>
              </li>
              <li>
                <a>Intermediate</a>
              </li>
              <li>
                <a>Advanced</a>
              </li>
            </ul>
          </div>
          <form>
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
                required
                placeholder="Search your Subject"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </label>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <PartnerCard key={partner._id} partner={partner} />
          ))}
        </div>
      </main>
    </ContentContainer>
  );
};

export default FindPartners;
