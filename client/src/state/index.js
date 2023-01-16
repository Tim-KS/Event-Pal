import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    Events: [],
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
        setEvents: (state, action) => {
            state.Events = action.payload.Events;
        },
        setEvent: (state, action) => {
            const updatedEvents = state.Events.map((Event) => {
                if (Event._id === action.payload.Event._id) return action.payload.Event;
                return Event;
            });
            state.Events = updatedEvents;
        },
    },
});

export const { setMode, setLogin, setLogout, setFriends, setEvents, setEvent } =
    authSlice.actions;
export default authSlice.reducer;
