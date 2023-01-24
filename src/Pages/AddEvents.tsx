import React, { useState } from "react";
import { Event } from "../Types/Event";
import { useNavigate } from "react-router-dom";
import { User } from "../Types/User";

export const AddEvents: AddEventsComponent = ({ user }) => {
  let navigate = useNavigate();

  const [newEvent, setNewEvent] = useState<Event>({
    title: "",
    description: "",
  });

  const addEvent: AddEventType = (event) => {
    const data: Event = { ...event, eventId: Math.random() };

    //call to create event and add to db
    fetch(
      `http://localhost:4000/api/v1/addEvents/${
        user?._id !== null ? user?._id : 1
      }`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((data) => {
      const res = data.json();

      res.then((item) => {
        navigate("/");
      });
    });
  };
  return (
    <div className="flex justify-center">
      <form className="mx-auto border rounded-lg p-4">
        <div className="flex w-full justify-center mb-2 text-lg ">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white">
            Create Event
          </h1>
        </div>
        <div>
          <div>
            <label>Event Title:</label>
            <input
              className="border rounded-md ml-2"
              type={"text"}
              onChange={(e) =>
                setNewEvent((prev) => {
                  return { ...prev, title: e.target.value };
                })
              }
              value={newEvent.title}
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              className="border rounded-md ml-2"
              type={"text"}
              onChange={(e) =>
                setNewEvent((prev) => {
                  return { ...prev, description: e.target.value };
                })
              }
              value={newEvent.description}
            />
          </div>
        </div>
        <div className="flex items-center mt-5">
          <div className="inline-block bg-blue-600 m-auto p-2 rounded-xl text-white font-mono ">
            {user === null ? (
              <div>
                <label>Cannot Create event please sign in and come back</label>
              </div>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addEvent(newEvent);
                }}
              >
                Add Event
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
type AddEventType = (event: Event) => void;
type AddEventsProps = {
  user: User | null;
  onAddEvent?: (event: Event) => void;
};
type AddEventsComponent = (props: AddEventsProps) => React.ReactElement;
