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

  return <div>{userData.id}ddddddd</div>;
}

export default Profile;
