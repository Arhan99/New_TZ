const ADD_COLOR = "ADD_COLOR";
const REMOVE_COLOR = "REMOVE_COLOR";
const CHANGE_COLOR = "CHANGE_COLOR";

export const addColor = (color) => ({
  type: ADD_COLOR,
  payload: color,
});

export const removeColor = (id) => ({
  type: REMOVE_COLOR,
  payload: id,
});

export const changeColor = (id, newColor) => ({
  type: CHANGE_COLOR,
  payload: { id, color: newColor },
});

const initialState = {
  colors: {
    1: { id: 1, color: "#ff0000" },
    2: { id: 2, color: "#00ff00" },
  },
};

export const selectAllColors = (state) => Object.values(state.colors.colors);

export const colorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLOR: {
      const newState = { ...state };
      const id = Date.now();
      newState.colors[id] = { id, color: action.payload };
      return newState;
    }
    case REMOVE_COLOR: {
      const newState = { ...state };
      const id = action.payload;
      delete newState.colors[id];
      console.log(newState);
      return newState;
    }
    case CHANGE_COLOR: {
      const newState = { ...state };
      const { id, color } = action.payload;
      newState.colors[id].color = color;
      return newState;
    }
    default:
      return state;
  }
};
