import { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const Profile = () => {
  const { user, logOutUser, updateProfileUser } = use(AuthContext);
  const { email, photoURL, displayName, phoneNumber } = user || {};

  const handlelogOutUser = () => {
    logOutUser()
      .then(() => {
        alert("Logout Successful");
      })
      .catch(() => {
        alert("Logout not Successful");
      });
  };

  const [userData, setUserData] = useState({
    name: displayName || "User Name",
    email: email || "Email not added",
    phone: phoneNumber || "Phone Number not added",
    address: "123 Pet Care Street, Dhaka 1212",
    profilePicture: photoURL || "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState({ ...userData });
  const handleEdit = () => {
    setTempData({ ...userData });
    setIsEditing(true);
  };

  const handleSave = () => {
    const updateName = tempData.name;
    const updatePhoto = tempData.profilePicture;
    // Name validation
    if (updateName.length < 3 || updateName.length > 16) {
      alert("Name must be between 3 and 16 characters.");
      setIsEditing(false);
    } else {
      updateProfileUser(updateName, updatePhoto)
        .then(() => {
          alert(" Profile updated");
          setUserData({ ...tempData });
          setIsEditing(false);
        })
        .catch((error) => {
          alert("❌ Failed to update profile:", error.message);
        });
    }
  };

  const handleCancel = () => {
    setTempData({ ...userData });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">
            My Profile
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your account information and preferences
          </p>
        </div>

        <div data-aos="fade-right" className="card bg-white shadow-2xl border border-cyan-200">
          <div className="card-body p-8">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="flex-shrink-0">
                {isEditing ? (
                  <>
                    <img
                      className="w-32 h-32 rounded-full border object-cover mb-4"
                      alt="Profile"
                      src={
                        tempData.profilePicture ||
                        "https://via.placeholder.com/128"
                      }
                    />
                    <input
                      type="url"
                      name="profilePicture"
                      value={tempData.profilePicture}
                      onChange={handleChange}
                      placeholder="Enter image URL"
                      className="input input-bordered w-full max-w-xs text-cyan-600"
                    />
                  </>
                ) : (
                  <img
                    className="w-32 h-32 rounded-full border object-cover"
                    alt="Profile"
                    src={
                      userData.profilePicture ||
                      "https://via.placeholder.com/128"
                    }
                  />
                )}
              </div>

              <div className="text-center md:text-left flex-1">
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={tempData.name}
                    onChange={handleChange}
                    className="text-3xl font-bold bg-transparent border-b-2 border-cyan-500 focus:outline-none focus:border-cyan-700 text-gray-800 text-center md:text-left w-full"
                  />
                ) : (
                  <h2 className="text-3xl font-bold text-gray-800">
                    {userData.name}
                  </h2>
                )}
                <p className="text-gray-600 mt-2">Pet Care Enthusiast</p>
                <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                  <span className="badge badge-cyan">Premium Member</span>
                  <span className="badge badge-blue">Pet Owner</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold">
                    Email Address
                  </span>
                </label>
                <p className="text-gray-800 bg-gray-50 p-3 rounded-lg border border-gray-200">
                  {userData.email}
                </p>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold">
                    Phone Number
                  </span>
                </label>
                <p className="text-gray-800 bg-gray-50 p-3 rounded-lg border border-gray-200">
                  {userData.phone}
                </p>
              </div>

              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold">
                    Address
                  </span>
                </label>
                <p className="text-gray-800 bg-gray-50 p-3 rounded-lg border border-gray-200">
                  {userData.address}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-between mt-8 pt-6 border-t border-gray-200">
              {isEditing ? (
                <>
                  <button
                    onClick={handleCancel}
                    className="btn btn-outline btn-gray flex-1 sm:flex-none"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-600 border-none hover:from-cyan-600 hover:to-blue-700 text-white flex-1 sm:flex-none"
                  >
                    Save Changes
                  </button>
                </>
              ) : (
                <button
                  onClick={handleEdit}
                  className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-600 border-none hover:from-cyan-600 hover:to-blue-700 text-white"
                >
                  Edit Profile
                </button>
              )}
              <button
                onClick={handlelogOutUser}
                className="btn btn-primary bg-gradient-to-r from-red-500 to-yellow-500 border-none hover:from-yellow-600 hover:to-red-500 text-white"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="card bg-white shadow-lg border border-cyan-200">
            <div className="card-body text-center">
              <div className="text-3xl text-cyan-500 mb-2">🐕</div>
              <h3 className="font-bold text-gray-800">Pets Registered</h3>
              <p className="text-2xl font-bold text-cyan-600">2</p>
            </div>
          </div>
          <div className="card bg-white shadow-lg border border-cyan-200">
            <div className="card-body text-center">
              <div className="text-3xl text-blue-500 mb-2">📅</div>
              <h3 className="font-bold text-gray-800">Upcoming Appointments</h3>
              <p className="text-2xl font-bold text-blue-600">1</p>
            </div>
          </div>
          <div className="card bg-white shadow-lg border border-cyan-200">
            <div className="card-body text-center">
              <div className="text-3xl text-green-500 mb-2">⭐</div>
              <h3 className="font-bold text-gray-800">Member Since</h3>
              <p className="text-xl font-bold text-green-600">Jan 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
