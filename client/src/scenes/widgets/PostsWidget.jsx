import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEvents } from "state";
import EventWidget from "./PostsWidget";

const EventsWidget = ({ userId, isProfile = false }) => {
    const dispatch = useDispatch();
    const Events = useSelector((state) => state.Events);
    const token = useSelector((state) => state.token);

    const getEvents = async () => {
        const response = await fetch("http://localhost:3001/Events", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        dispatch(setEvents({ Events: data }));
    };

    const getUserEvents = async () => {
        const response = await fetch(
            `http://localhost:3001/Events/${userId}/Events`,
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        const data = await response.json();
        dispatch(setEvents({ Events: data }));
    };

    useEffect(() => {
        if (isProfile) {
            getUserEvents();
        } else {
            getEvents();
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {Events.map(
                ({
                    _id,
                    userId,
                    firstName,
                    lastName,
                    description,
                    location,
                    picturePath,
                    userPicturePath,
                    likes,
                    comments,
                }) => (
                    <EventWidget
                        key={_id}
                        EventId={_id}
                        EventUserId={userId}
                        name={`${firstName} ${lastName}`}
                        description={description}
                        location={location}
                        picturePath={picturePath}
                        userPicturePath={userPicturePath}
                        likes={likes}
                        comments={comments}
                    />
                )
            )}
        </>
    );
};

export default EventsWidget;
