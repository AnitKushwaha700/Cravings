import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import api from "../../config/api.config.js";
import toast from "react-hot-toast";
import { MdEdit } from "react-icons/md";
import { MdOutlineAddAPhoto } from "react-icons/md";

const Settings = () => {
  const { user, setUser } = useAuth();

  const [isEditable, setIsEditable] = useState(false);
  const [tempUser, setTempUser] = useState(user || {});
  const [profilePicPreview, setProfilePicPreview] = useState({
    fullName: user?.fullName || "",
    email: user?.email.toLowerCase || "",
    phone: user?.phone || "",
    phone: user?.photo.url || "https://placehold.co/600x400?text=",
  });

  React.useEffect(() => {
    setTempUser(user || {});
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTempUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setIsEditable(false);

    const payLoad = {
      email: tempUser.email.toLowerCase(),
      fullName: tempUser.fullName,
      phone: tempUser.phone,
    };

    console.log(payLoad);

    try {
      const res = await api.put("/user/edit-profile", payLoad);
      setUser(res.data.data);
      setIsEditable(false);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(
        `${error.response?.status || ""} | ${
          error.response?.data?.message || error.message
        }`,
      );
    }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const fileURL = URL.createObjectURL(file);

    setProfilePicPreview(fileURL);
  };

  return (
    <div className="space-y-6 rounded-3xl bg-[var(--surface)] p-6 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.2)]">
      <div className="flex flex-col gap-4 rounded-3xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Profile Information
          </p>
          <h2 className="mt-3 text-2xl font-bold text-[var(--text)]">
            Your account details
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-light)]">
            Update your profile, keep your contact details current, and manage
            your account information.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {isEditable ? (
            <>
              <button
                onClick={() => {
                  setTempUser(user);
                  setIsEditable(false);
                }}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[var(--surface-2)]"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-[var(--text-white)] transition hover:bg-[var(--primary-hover)]"
              >
                Save Changes
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditable(true)}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-[var(--text-white)] transition hover:bg-[var(--primary-hover)]"
            >
              <MdEdit />
              Edit Profile
            </button>
          )}
        </div>
      </div>

      <div className="grid gap-6  lg:grid-cols-[360px_1fr]">
        <div className="space-y-6 flex rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
          <div className="flex items-center gap-4 ">
            <div className="h-30 w-30 overflow-hidden rounded-full border-2 border-[var(--primary)] bg-white">
              <img
                src={profilePicPreview || user.photo}
                alt="Profile"
                className="h-full w-full object-cover "
                // onChange={handleProfilePictureChange}
              />
              <label htmlFor="profilePic" className="">
                <MdOutlineAddAPhoto className="text-2xl bg-base-100 absolute left-105 top-112 border rounded-2xl p-1" />
              </label>

              <input
                type="file"
                accept="image/*"
                name="profilePic"
                id="profilePic"
                className="hidden"
                onChange={handleProfilePictureChange}
              />
            </div>
            <div>
              <p className="text-lg font-semibold text-[var(--text)]">
                {user.fullName}
              </p>
              <p className="text-sm text-[var(--text-light)]">
                Cravings customer
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
          <div className="grid gap-4 rounded-3xl bg-[var(--surface-2)] p-6">
            <div className="flex gap-3 whitespace-nowrap items-center">
              <label className="text-sm font-medium text-[var(--text-light)]">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={tempUser.fullName || ""}
                onChange={handleChange}
                disabled={!isEditable}
                className="w-full rounded-md border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)] disabled:cursor-not-allowed disabled:bg-[var(--surface-2)]"
              />
            </div>
            <div className="flex gap-10 whitespace-nowrap items-center">
              <label className="text-sm font-medium text-[var(--text-light)]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={tempUser.email || ""}
                disabled
                className="w-full rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm text-[var(--text-light)] outline-none"
              />
            </div>
            <div className="flex gap-9 whitespace-nowrap items-center">
              <label className="text-sm font-medium text-[var(--text-light)]">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={tempUser.phone || ""}
                onChange={handleChange}
                disabled={!isEditable}
                className="w-full rounded-md border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)] disabled:cursor-not-allowed disabled:bg-[var(--surface-2)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
