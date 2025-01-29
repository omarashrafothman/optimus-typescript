const initialState = {
    id: null,
    name: "",
    email: "",
    isAuthenticated: false,
};

type UserAction =
    | { type: "LOGIN"; payload: { id: string; name: string; email: string } }
    | { type: "LOGOUT" };

const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, ...action.payload, isAuthenticated: true };
        case "LOGOUT":
            return initialState;
        default:
            return state;
    }
};

export default userReducer;
