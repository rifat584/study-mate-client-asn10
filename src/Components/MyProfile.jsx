import React, { useContext, useRef } from "react";
import AuthContext from "../Providers/AuthContext";
import avatar from "../assets/default_avatar.jpg";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const modalRef = useRef();
  const handleModal = () => {
    console.log("clicked");
    modalRef.current.showModal();
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photourl.value;
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then((res) => {
        console.log(res.json);
        modalRef.current.close()
        setUser(user);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="min-h-screen ">
      <div className="card bg-base-100 w-96 shadow-sm mx-auto mt-20">
        <figure className="px-10 pt-10">
          <img src={user?.photoURL || avatar} alt="" className="rounded-full w-30" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user?.displayName || "Anonymous"}</h2>
          <p>{user?.email}</p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={handleModal}>
              Update Profile
            </button>
          </div>
        </div>
      </div>
      {/* daisyUI Modal */}
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-2xl text-center">
            Update Your Profile
          </h3>
          {/* update profile form */}
          <form onSubmit={handleUpdateProfile}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter your Name"
              />

              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photourl"
                className="input w-full"
                placeholder="Enter your Photo URL"
              />

              <button
                className="btn btn-accent mt-4 border-none text-white"
                type="submit"
              >
                Update Profile
              </button>
            </fieldset>
          </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyProfile;
