import React, { useState, useEffect } from "react";
import { Edit, Save, Camera } from "lucide-react";

const Settings = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [profile, setProfile] = useState({
    name: "Pratham Khandelwal",
    email: "prathamkhandelwal1320@gmail.com",
    rollNo: "........."
  });

  useEffect(() => {
    // Generate default avatar using UI Avatars API
    const generateAvatar = () => {
      const name = profile.name.replace(/\s+/g, '+');
      const avatarUrl = `https://ui-avatars.com/api/?name=${name}&background=000000&color=ffffff&bold=true`;
      setProfileImage(avatarUrl);
    };

    generateAvatar();
  }, [profile.name]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="h-[100%] w-[100%] bg-white flex flex-col items-center justify-center p-6">
      <div className="w-[100%] max-w-md bg-white rounded-2xl shadow-lg p-8 relative border-2 border-black">
        {/* Profile Image Upload */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-40 h-40 rounded-full object-cover border-4 border-black shadow-lg"
            />
            <input 
              type="file" 
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden" 
              id="profile-image-upload"
            />
            <label 
              htmlFor="profile-image-upload"
              className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-gray-800 transition-colors"
            >
              <Camera className="w-5 h-5" />
            </label>
          </div>
        </div>

        {/* Profile Details */}
        <div className="mt-24 space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            {isEditing ? (
              <input 
                type="text"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            ) : (
              <div className="w-full px-3 py-2 border-2 border-transparent">{profile.name}</div>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            {isEditing ? (
              <input 
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            ) : (
              <div className="w-full px-3 py-2 border-2 border-transparent">{profile.email}</div>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            {isEditing ? (
              <input 
                type="text"
                name="rollNo"
                value={profile.rollNo}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            ) : (
              <div className="w-full px-3 py-2 border-2 border-transparent">{profile.rollNo}</div>
            )}
          </div>

          {/* Edit/Save Button */}
          <div className="mt-6">
            <button 
              onClick={toggleEditMode}
              className="w-full py-3 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors flex items-center justify-center"
            >
              {isEditing ? (
                <>
                  <Save className="w-5 h-5 mr-2" /> Save
                </>
              ) : (
                <>
                  <Edit className="w-5 h-5 mr-2" /> Edit Profile
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

