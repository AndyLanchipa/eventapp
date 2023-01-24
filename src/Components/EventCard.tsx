import React, { useState } from "react";
import { Event } from "../Types/Event";
import { User } from "../Types/User";

import { Popover } from "./PopOver";

export const EventCard: EventCardProps = ({
  description = "",
  image,
  title = "",
  creator,
  user,
  event,
}) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [editEvent, setEditEvent] = useState<Event>({
    title: title,
    description: description,
  });
  const onEditSave = () => {
    setEditing(false);
    const data: Event = {
      ...event,
      title: editEvent.title,
      description: editEvent.description,
    };
    console.log(data);

    //call to create event and add to db
    fetch(
      `http://localhost:4000/api/v1/editEvent/${
        event._id !== null ? event._id : 1
      }`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((data) => {
      const res = data.json();

      // res.then((item) => {
      //   navigate("/");
      // });
    });
  };
  return (
    <div className="w-96">
      <img src={require("../pizzaunsplash.jpg")} />

      <div className="bg-gray-300 p-4">
        <div className="my-2">
          <div className="mb-2">
            {editing ? (
              <div>
                <label>Title:</label>
                <input
                  onChange={(e) =>
                    setEditEvent((prev) => {
                      return { ...prev, title: e.target.value };
                    })
                  }
                  value={editEvent.title}
                />
              </div>
            ) : (
              <p>Title: {title}</p>
            )}
          </div>
          <div>
            {editing ? (
              <div>
                <label>Description:</label>
                <input
                  onChange={(e) =>
                    setEditEvent((prev) => {
                      return { ...prev, description: e.target.value };
                    })
                  }
                  value={editEvent.description}
                />
              </div>
            ) : (
              <p>Description: {description}</p>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="mr-2 bg-orange-400 p-1 font-mono rounded-lg text-md">
              <Popover content={`Creator of event: ${creator} fsad`}>
                <button>Creator</button>
              </Popover>
            </div>
            <div className="bg-blue-900 p-1 mr-2 rounded-lg">
              <p className="font-mono text-white text-md ">Members</p>
            </div>
          </div>
          <div>
            <button className="p-1 bg-slate-600 rounded-lg text-md mr-2">
              Join Event
            </button>
          </div>
          <div className="p-1 bg-red-400 rounded-lg text-md">
            {editing ? (
              <div>
                <button onClick={() => onEditSave()}>Save Edit</button>
              </div>
            ) : (
              <button onClick={() => setEditing(true)}>Edit Event</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

type EventCardType = {
  title?: string;
  members?: Array<string>;
  description?: string;
  image?: string;
  user?: User;
  creator: Number;
  event: Event;
  edit: boolean;
  onEditSave: (events: Event[]) => void;
};

type EventCardProps = (props: EventCardType) => React.ReactElement;
