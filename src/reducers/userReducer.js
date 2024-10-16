// src/reducers/userReducer.js
const initialState = {
    user: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      // Define your action types and logic here
      default:
        return state;
    }
  };
  
  export default userReducer;
  