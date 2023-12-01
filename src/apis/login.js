import axios from "axios";
// import { Cookies } from "react-cookie";

const BASE_URL = "https://moneyfulpublicpolicy.co.kr";
const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InFxcXFxcXFxcSIsImlhdCI6MTcwMTQ0MDE3NCwiZXhwIjoxNzAxNDQzNzc0fQ.9yfpe5RsIUFt0MAx_YdZbhdm8WlFegjWwUWyZJcq8uw";

export const getData = async () => {
  //   const cookies = new Cookies();
  //   const accessToken = cookies.get("accessToken");
  console.log("accessToken :", accessToken);
  const response = await axios.get(`${BASE_URL}/user`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log("response :", response.data);
};

export const login = async (id, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/login`,
      {
        id,
        password,
      },
      { withCredentials: true }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Login request failed :", error);
  }
};
getData();
