import axios from "axios";
const POST_USER_DATA = "POST_USER_DATA";

export const postUserData = (message) => ({
  type: POST_USER_DATA,
  data: message,
});

const initialState = {
  response: "response",
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER_DATA:
      return {
        response: action.data,
      };
    default:
      return state;
  }
};

export const postFormThunk = (user) => {
  return (dispatch) => {
    const formData = new FormData();

    formData.append("action", user.action);
    formData.append("id", 1);
    formData.append("image", user.image);
    formData.append("contact", user.contact);

    axios
      .post("https://test-job.pixli.app/send.php", formData)
      .then((response) => {
        console.log("HERE RESPONSE -> ", response);
        dispatch(postUserData(response.data));
      });
  };
};
