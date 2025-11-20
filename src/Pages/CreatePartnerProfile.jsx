import React, { useContext } from "react";
import AuthContext from "../Providers/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const CreatePartnerProfile = () => {
  const { user } = useContext(AuthContext);
  const handleProfileCreate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const profileimage = e.target.profileimage.value;
    const subject = e.target.subject.value;
    const studyMode = e.target.studyMode.value;
    const availabilityTime = e.target.availabilityTime.value;
    const location = e.target.location.value;
    const experienceLevel = e.target.experienceLevel.value;
    const rating = Number(e.target.rating.value);
    const patnerCount = Number(e.target.patnerCount.value);
    const email = e.target.email.value;

    const partnerProfileInfo = {
      name,
      email,
      profileimage,
      subject,
      studyMode,
      availabilityTime,
      location,
      experienceLevel,
      rating,
      patnerCount,
    };

    axios
      .post(`http://localhost:3000/partners`, partnerProfileInfo)
      .then((res) => {
        if (res.data.insertedId) {
          e.target.reset();
          Swal.fire({
            position: "center",
            title: "Your profile has been created successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 min-h-screen">
      <h1 className="text-5xl font-bold mb-12 text-center">
        Create Partner Profile
      </h1>

      <form
        onSubmit={handleProfileCreate}
        className="bg-base-200 p-8 rounded-md shadow-lg space-y-6"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Full Name</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your full name"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Profile Image URL</span>
          </label>
          <input
            type="url"
            name="profileimage"
            required
            placeholder="https://example.com/photo.jpg"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Subject</span>
          </label>
          <input
            type="text"
            name="subject"
            required
            placeholder="Math, English, Programming..."
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Study Mode</span>
          </label>
          <select
            name="studyMode"
            className="select select-bordered w-full"
            required
          >
            <option>Online</option>
            <option>Offline</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Availability Time</span>
          </label>
          <input
            type="text"
            name="availabilityTime"
            required
            placeholder="Evening 6-9 PM"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Location</span>
          </label>
          <input
            type="text"
            name="location"
            required
            placeholder="Dhaka, Mirpur..."
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Experience Level</span>
          </label>
          <select
            name="experienceLevel"
            className="select select-bordered w-full"
            required
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Expert</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Rating</span>
          </label>
          <input
            type="number"
            name="rating"
            placeholder="0"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Partner Count</span>
          </label>
          <input
            type="number"
            name="patnerCount"
            readOnly
            value={0}
            className="input input-bordered w-full bg-base-300"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input
            type="email"
            name="email"
            readOnly
            value={user?.email}
            className="input input-bordered w-full bg-base-300"
          />
        </div>

        <button className="btn btn-primary w-full text-lg" type="submit">
          Create Profile
        </button>
      </form>
    </div>
  );
};

export default CreatePartnerProfile;
