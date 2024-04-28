// ProfileList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileDetails from "./ProfileDetails";

const ProfileList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get("/users");
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profiles:", error);
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div className="profile-list">
      {loading ? (
        <p>Loading...</p>
      ) : users.length > 0 ? (
        users.map((user) => <ProfileDetails key={user._id} profile={user} />)
      ) : (
        <p>No profiles found</p>
      )}
    </div>
  );
};

export default ProfileList;
