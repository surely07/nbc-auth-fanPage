import axios from "axios";
import React from "react";

function Profile() {
  const BASE_URL = "https://moneyfulpublicpolicy.co.kr";

  const userData = async () => {
    const response = await axios.get(`${BASE_URL}/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("accessToken"),
      },
    });

    return response.data;
  };

  return <div>{userData.id}프로필페이지!!!</div>;
}

export default Profile;
