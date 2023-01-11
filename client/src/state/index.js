import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    events: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends;
            } else {
                console.error("user friends non-existent :(");
            }
        },
        setevents: (state, action) => {
            state.events = action.payload.events;
        },
        setevent: (state, action) => {
            const updatedevents = state.events.map((event) => {
                if (event._id === action.payload.event._id) return action.payload.event;
                return event;
            });
            state.events = updatedevents;
        },
    },
});

export const { setMode, setLogin, setLogout, setFriends, setevents, setevent } =
    authSlice.actions;
export default authSlice.reducer;
