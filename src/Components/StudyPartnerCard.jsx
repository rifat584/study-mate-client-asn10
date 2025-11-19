import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";
const StudyPartnerCard = ({ partner }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:scale-105 transition-all duration-100">
      <figure>
        <img src={partner.profileimage} className="aspect-3/2 object-cover" />
      </figure>

      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{partner.name}</h2>
          <div className="badge badge-secondary text-base-100 shadow-md">
            <span>
              <FaRegStar />
            </span>
            <span className="font-medium">{partner.rating}</span>
          </div>
        </div>
        <div className="badge badge-outline">{partner.subject}</div>
        <Link to={`/partners/details/${partner._id}`} className="btn btn-primary mt-2">View Profile</Link>
      </div>
    </div>
  );
};

export default StudyPartnerCard;
