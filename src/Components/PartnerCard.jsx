import React from "react";
import { Link } from "react-router";
import { LuBadgeCheck } from "react-icons/lu";
import { LuBadgeX } from "react-icons/lu";

const PartnerCard = ({ partner }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:scale-105 transition-all duration-100">
      <figure>
        <img src={partner.profileimage} className="aspect-3/2 object-cover" />
      </figure>

      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{partner.name}</h2>
        </div>
        <div className="flex justify-between">
          <div className="badge badge-outline">{partner.subject}</div>
          {partner.studyMode === "Online" ? (
            <div className="badge badge-success">
              <LuBadgeCheck />
              Online
            </div>
          ) : (
            <div className="badge badge-warning">
              <LuBadgeX />
              Offline
            </div>
          )}

          {partner.experienceLevel === "Beginner" ? (
            <div className="badge badge-primary">Beginner</div>
          ) : partner.experienceLevel === "Intermediate" ? (
            <div className="badge badge-secondary">Intermediate</div>
          ) : (
            <div className="badge badge-accent">Advanced</div>
          )}
        </div>
        <Link
          to={`/partner/details/${partner._id}`}
          className="btn btn-primary mt-4"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default PartnerCard;
