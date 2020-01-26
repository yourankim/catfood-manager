import React from 'react';
import profile from '../assets/cat_profile.jpg';

function Profile() {

  return (
    <div className="profile">
      <img className="profile-image" src={profile}/>
      <div>곳간 주인: 노랑이</div>
    </div>
  );
}

export default Profile;