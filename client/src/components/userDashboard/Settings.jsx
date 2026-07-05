import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import api from "../../config/api.config.js";
import toast from "react-hot-toast";
import { MdEdit } from "react-icons/md";

const Settings = () => {
  const { user, setUser } = useAuth();

  const [isEditable, setIsEditable] = useState(false);
  const [tempUser, setTempUser] = useState(user || {});

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
      toast.success(res.data.message);
    } catch (error) {
      toast.error(
        error.response.status + " | " + error.response?.data?.message ||
          error.message,
      );
    }
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
            Update your profile, keep your contact details current, and manage your account information.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {isEditable ? (
            <>
              <button
                onClick={() => setIsEditable(false)}
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

      <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
        <div className="space-y-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-[var(--primary)] bg-white">
              <img src={user.photo} alt="Profile" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-lg font-semibold text-[var(--text)]">{user.fullName}</p>
              <p className="text-sm text-[var(--text-light)]">Cravings customer</p>
            </div>
          </div>
          <div className="space-y-2 rounded-3xl bg-[var(--surface-2)] p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Account status</p>
            <p className="text-sm text-[var(--text-light)]">Your profile is active and ready for orders.</p>
          </div>
          <div className="space-y-3 rounded-3xl bg-[var(--surface-2)] p-4">
            <p className="text-sm font-semibold text-[var(--text)]">Quick links</p>
            <div className="grid gap-2 text-sm text-[var(--text-light)]">
              <button className="text-left rounded-2xl bg-[var(--background)] px-4 py-3 transition hover:bg-[var(--surface)]">Manage addresses</button>
              <button className="text-left rounded-2xl bg-[var(--background)] px-4 py-3 transition hover:bg-[var(--surface)]">View orders</button>
            </div>
          </div>
        </div>

        <div className="space-y-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
          <div className="grid gap-4 rounded-3xl bg-[var(--surface-2)] p-6">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-[var(--text-light)]">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={tempUser.fullName || ""}
                onChange={handleChange}
                disabled={!isEditable}
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)] disabled:cursor-not-allowed disabled:bg-[var(--surface-2)]"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-[var(--text-light)]">Email</label>
              <input
                type="email"
                name="email"
                value={tempUser.email || ""}
                disabled
                className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm text-[var(--text-light)] outline-none"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-[var(--text-light)]">Phone</label>
              <input
                type="number"
                name="phone"
                value={tempUser.phone || ""}
                onChange={handleChange}
                disabled={!isEditable}
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)] disabled:cursor-not-allowed disabled:bg-[var(--surface-2)]"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-2)] p-6">
            <p className="text-sm font-semibold text-[var(--text)]">Address Book</p>
            <p className="mt-2 text-sm text-[var(--text-light)]">No addresses added yet. Add your address to save delivery details for faster checkout.</p>
            <button className="mt-4 inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-[var(--text-white)] transition hover:bg-[var(--primary-hover)]">
              Add Your First Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
