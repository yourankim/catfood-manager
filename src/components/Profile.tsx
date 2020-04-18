import React from "react";
// @ts-ignore
import profile from "../assets/cat_profile.jpg";

function Profile() {
  return (
    <div className='profile'>
      <img
        className='profile-image'
        src={profile}
        alt='곳간 주인 고양이의 사진'
      />
      <div>곳간 주인: 노랑이</div>
    </div>
  );
}

export default Profile;
