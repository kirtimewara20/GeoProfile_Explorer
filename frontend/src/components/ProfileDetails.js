// ProfileDetails.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfileDetails = ({ match }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/users/${match.params.id}`);
        setProfile(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setLoading(false);
      }
    };

    fetchProfile();
  }, [match.params.id]);

  return (
    <div className="profile-details">
      {loading ? (
        <p>Loading...</p>
      ) : profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>Description: {profile.description}</p>
          <p>Latitude: {profile.latitude}</p>
          <p>Longitude: {profile.longitude}</p>
        </div>
      ) : (
        <p>Profile not found</p>
      )}
    </div>
  );
};

export default ProfileDetails;
