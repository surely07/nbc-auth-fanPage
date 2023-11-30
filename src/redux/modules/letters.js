// 레터 추가
const ADD_LETTER = "ADD_LETTER";

// 레터 삭제
const DELETE_LETTER = "DELETE_LETTER";

// 레터 수정
const EDIT_LETTER = "EDIT_LETTER";

const SET_LETTER = "SET_LETTER";

export const addLetter = (payload) => {
  return {
    type: ADD_LETTER,
    payload,
  };
};

export const deleteLetter = (payload) => {
  return {
    type: EDIT_LETTER,
    payload,
  };
};

export const editLetter = (payload) => {
  return {
    type: EDIT_LETTER,
    payload,
  };
};

export const setLetter = (payload) => {
  return {
    type: SET_LETTER,
    payload,
  };
};

const initialValue = [];

const letters = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_LETTER:
      const newLetter = action.payload;
      return [newLetter, ...state];
    case DELETE_LETTER:
      const letterId = action.payload;
      return state.filter((letter) => letter.id !== letterId);
    case EDIT_LETTER:
      const { id, editedContent } = action.payload;
      return state.map((letter) => {
        if (letter.id === id) {
          return { ...letter, content: editedContent };
        }
        return letter;
      });
    case SET_LETTER:
      return action.payload;

    default:
      return state;
  }
};

export default letters;
