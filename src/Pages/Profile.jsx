import { useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    password: "••••••••",
    address: "123 Pet Care Street, Dhaka 1212",
    profilePicture: ""
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState({ ...userData });

  const handleEdit = () => {
    setTempData({ ...userData });
    setIsEditing(true);
  };

  const handleSave = () => {
    setUserData({ ...tempData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData({ ...userData });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const defaultProfilePic = (
    <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
      {userData.name.split(' ').map(n => n[0]).join('')}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">
            My Profile
          </h1>
          <p className="text-gray-600 text-lg">Manage your account information and preferences</p>
        </div>

        {/* Profile Card */}
        <div className="card bg-white shadow-2xl border border-cyan-200">
          <div className="card-body p-8">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              {/* Profile Picture */}
              <div className="flex-shrink-0">
                {userData.profilePicture ? (
                  <img
                    src={userData.profilePicture}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-cyan-200 shadow-lg"
                  />
                ) : (
                  defaultProfilePic
                )}
                {isEditing && (
                  <button className="btn btn-sm btn-ghost text-cyan-600 mt-2">
                    Change Photo
                  </button>
                )}
              </div>

              {/* User Info */}
              <div className="text-center md:text-left flex-1">
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={tempData.name}
                    onChange={handleChange}
                    className="text-3xl font-bold bg-transparent border-b-2 border-cyan-500 focus:outline-none focus:border-cyan-700 text-gray-800 text-center md:text-left"
                  />
                ) : (
                  <h2 className="text-3xl font-bold text-gray-800">{userData.name}</h2>
                )}
                <p className="text-gray-600 mt-2">Pet Care Enthusiast</p>
                <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                  <span className="badge badge-cyan">Premium Member</span>
                  <span className="badge badge-blue">Pet Owner</span>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold">Email Address</span>
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={tempData.email}
                    onChange={handleChange}
                    className="input input-bordered bg-gray-50 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                ) : (
                  <p className="text-gray-800 bg-gray-50 p-3 rounded-lg border border-gray-200">{userData.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold">Phone Number</span>
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={tempData.phone}
                    onChange={handleChange}
                    className="input input-bordered bg-gray-50 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                ) : (
                  <p className="text-gray-800 bg-gray-50 p-3 rounded-lg border border-gray-200">{userData.phone}</p>
                )}
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold">Password</span>
                </label>
                {isEditing ? (
                  <input
                    type="password"
                    name="password"
                    value={tempData.password}
                    onChange={handleChange}
                    placeholder="Enter new password"
                    className="input input-bordered bg-gray-50 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                ) : (
                  <p className="text-gray-800 bg-gray-50 p-3 rounded-lg border border-gray-200">{userData.password}</p>
                )}
              </div>

              {/* Address */}
              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold">Address</span>
                </label>
                {isEditing ? (
                  <textarea
                    name="address"
                    value={tempData.address}
                    onChange={handleChange}
                    rows="3"
                    className="textarea textarea-bordered bg-gray-50 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                ) : (
                  <p className="text-gray-800 bg-gray-50 p-3 rounded-lg border border-gray-200">{userData.address}</p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end mt-8 pt-6 border-t border-gray-200">
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
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
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