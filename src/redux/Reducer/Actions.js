const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  token: "",
  loggedIn: false,
};

function Actions(state = initialState, action) {
  const SignIn = "SignIn";
  const SignOut = "SignOut";
  const UpdateName = "UpdateName";

  switch (action.type) {
    case SignIn: {
      return {
        ...state,
        token: action.token,
        loggedIn: action.loggedIn,
      };
    }
    case SignOut: {
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        password: action.password,
        token: action.token,
        loggedIn: action.loggedIn,
      };
    }
    case UpdateName: {
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
      };
    }
    default:
      break;
  }
  return state;
}

export default Actions;
