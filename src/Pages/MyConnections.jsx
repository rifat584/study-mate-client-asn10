import React, { useContext, useEffect, useRef, useState } from "react";
import ContentContainer from "../Containers/ContentContainer";
import axios from "axios";
import AuthContext from "../Providers/AuthContext";
import { LuBadgeCheck, LuBadgeX } from "react-icons/lu";
import Swal from "sweetalert2";

const MyConnections = () => {
  const { user } = useContext(AuthContext);
  const [connections, setConnections] = useState([]);
  const [id, setId] = useState(null);
  const modalRef = useRef();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/connections?email=${user?.email}`)
      .then((res) => setConnections(res.data));
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Remove this connection?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/connections/${id}`).then((res) => {
          console.log(res.data);
          setConnections(connections.filter((con) => con._id !== id));
        });
        Swal.fire({
          title: "Deleted!",
          text: "Your connection has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleUpdateConnection = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const profileimage = e.target.profileimage.value;
    const subject = e.target.subject.value;
    const studyMode = e.target.studyMode.value;
    const connectionInfo = {
      name,
      profileimage,
      subject,
      studyMode,
    };

    axios
      .patch(`http://localhost:3000/connections/${id}`, connectionInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          modalRef.current.close();
          const data = connections.filter((con) => con._id !== id);

          const newData = {
            email: user?.email,
            partnerInfo: {
              name: name,
              profileimage: profileimage,
              subject: subject,
              studyMode: studyMode,
            },
            _id: id,
          };
          const newConnections = [newData, ...data];
          setConnections(newConnections);

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your connection has been updated!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleUpdateBtn = (id) => {
    setId(id);
    modalRef.current.showModal();
  };

  return (
    <ContentContainer>
      <div className="mt-10 p-6 bg-base-100 rounded-xl shadow min-h-screen">
        <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h1 className="text-3xl font-bold my-6 text-center">
              Update Connection Profile
            </h1>

            <form onSubmit={handleUpdateConnection} className="space-y-6 mb-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Partner name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Profile Image URL
                  </span>
                </label>
                <input
                  type="url"
                  name="profileimage"
                  placeholder="https://example.com/photo.jpg"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Math, English, Programming..."
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Study Mode</span>
                </label>
                <select
                  name="studyMode"
                  className="select select-bordered w-full"
                >
                  <option>Online</option>
                  <option>Offline</option>
                </select>
              </div>

              <div className="flex gap-4">
                <button className="btn btn-accent text-lg" type="submit">
                  Update Connection
                </button>
                <button
                  className=" btn"
                  type="button"
                  onClick={() => modalRef.current.close()}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </dialog>
        <h2 className="text-5xl font-bold mb-6">My Connections</h2>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="text-base font-semibold">
                <th>Partner</th>
                <th>Subject</th>
                <th>Study Mode</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            {connections.map((connection) => (
              <tbody key={connection._id}>
                <tr>
                  <td>
                    <div className="flex items-center gap-4">
                      <div className="avatar">
                        <div className="w-12 rounded-full">
                          <img
                            src={connection.partnerInfo.profileimage}
                            alt="profile"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          {connection.partnerInfo.name}
                        </h3>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="font-medium">
                      {connection.partnerInfo.subject}
                    </span>
                  </td>
                  <td>
                    {connection.partnerInfo.studyMode === "Online" ? (
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
                  </td>

                  {/* Actions */}
                  <td>
                    <div className="flex items-center justify-center gap-3">
                      <button
                        className="btn btn-sm btn-accent text-base-100"
                        onClick={() => {
                          handleUpdateBtn(connection._id);
                        }}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => handleDelete(connection._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </ContentContainer>
  );
};

export default MyConnections;
