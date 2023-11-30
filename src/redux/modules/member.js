const SET_MEMBER = "SET_MEMBER";

export const setMember = (payload) => {
  return {
    type: SET_MEMBER,
    payload,
  };
};

const initialState = "all";

const member = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEMBER:
      return action.payload;
    default:
      return state;
  }
};

export default member;
