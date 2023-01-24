import React, { useEffect, useState } from "react";
import { EventCard } from "../Components/EventCard";
import { Event } from "../Types/Event";
import { User } from "../Types/User";
export const Home: HomeProps = () => {
  const [events, setEvents] = useState<Array<Event>>([]);
  const [edit, setEdit] = useState<boolean>(false);

  const getEvents = () => {
    fetch("http://localhost:4000/api/v1/getAllEvents", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setEvents(data);
      });
  };
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <div className="grid grid-cols-3 m-2">
      {events.map((item) => {
        return (
          <div>
            <EventCard
              onEditSave={(events) => {}}
              event={item}
              edit={edit}
              title={item.title}
              description={item.description}
              creator={item.creatorId ?? 0}
            />
          </div>
        );
      })}
    </div>
  );
};

type HomeType = {};

type HomeProps = (prop: HomeType) => React.ReactElement;
