import { Cookies } from "react-cookie";

const cookies = new Cookies();

// 쿠키에 값 저장
export const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};

// 쿠키의 값 꺼내기
export const getCookie = (name) => {
  return cookies.get(name);
};

// 쿠키 삭제
export const removeCookies = (name) => {
  return cookies.remove(name);
};
