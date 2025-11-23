import React, { useContext, useState } from "react";
import ContentContainer from "../Containers/ContentContainer";
import { useLoaderData, useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { LuBadgeCheck, LuBadgeX } from "react-icons/lu";
import axios from "axios";
import Swal from "sweetalert2";
import AuthContext from "../Providers/AuthContext";

const StudyPartnerDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const partnerDetails = useLoaderData();
  const {
    availabilityTime,
    email,
    experienceLevel,
    location,
    name,
    patnerCount,
    profileimage,
    rating,
    studyMode,
    subject,
    _id,
  } = partnerDetails;
  const [partner, setPartner] = useState(patnerCount);

  // console.log(id, partner);
  const handlePartnerRequest = () => {
    const partnerData = {
      email: user?.email,
      partnerInfo: {
        name,
        profileimage,
        subject,
        studyMode,
      },
    };

    axios
      .post(`http://localhost:3000/connections`, partnerData)
      .then((res) => {
        console.log(res.data);
        axios.patch(`http://localhost:3000/partner/${id}`).then((res) => {
          if (res.data.modifiedCount) {
            setPartner(partner + 1);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your Partner Request has been Sent!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      });
  };
  // console.log(partner);

  return (
    <ContentContainer>
      <div className="px-6 py-10 min-h-screen">
        <div className="flex flex-col items-start lg:flex-row gap-10">
          <div className="lg:w-1/2 w-full">
            <div className="relative mb-8">
              <img
                src={profileimage}
                className="w-full rounded-lg shadow-xl object-cover max-h-[480px]"
                alt={name}
              />
              <div className="absolute top-4 left-4 bg-accent text-base-100 px-4 py-1 rounded-full font-semibold shadow-lg flex gap-1 items-center text-xl">
                <FaStar /> {rating}
              </div>
            </div>
            <button
              className="btn btn-primary btn-lg w-full my-auto"
              onClick={handlePartnerRequest}
            >
              Send Partner Request
            </button>
          </div>

          <div className="lg:w-1/2 w-full space-y-6">
            <div>
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="mt-2 text-lg opacity-80">
                Subject:
                <span className="ml-2 badge badge-outline">{subject}</span>
              </p>

              {studyMode === "Online" ? (
                <div className="flex gap-2 items-center">
                  <p className="mt-2 text-lg opacity-80">Study Mode :</p>
                  <div className="badge badge-success mt-2">
                    <LuBadgeCheck />
                    Online
                  </div>
                </div>
              ) : (
                <div className="flex gap-2 items-center">
                  <p className="mt-2 text-lg opacity-80">Study Mode :</p>
                  <div className="badge badge-warning mt-2">
                    <LuBadgeX />
                    Offline
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="stat bg-base-200 rounded-xl shadow p-4 w-40">
                <div className="stat-title text-sm">Experience</div>
                <div className="stat-value text-lg">{experienceLevel}</div>
              </div>
              <div className="stat bg-base-200 rounded-xl shadow p-4 w-40">
                <div className="stat-title text-sm">Partners</div>
                <div className="stat-value text-lg">{partner}</div>
              </div>
            </div>
            <div className="p-4 bg-base-200 rounded-xl shadow">
              <p className="font-semibold text-lg">📍 Location</p>
              <p className="opacity-80">{location}</p>
            </div>
            <div className="p-4 bg-base-200 rounded-xl shadow">
              <p className="font-semibold text-lg">⏰ Availability</p>
              <p className="opacity-80">{availabilityTime}</p>
            </div>
            <div className="p-4 bg-base-200 rounded-xl shadow">
              <p className="font-semibold text-lg">📧 Email</p>
              <p className="opacity-80">{email}</p>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default StudyPartnerDetails;
