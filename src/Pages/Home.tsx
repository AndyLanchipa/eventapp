import React, { useEffect, useState } from "react";
import { EventCard } from "../Components/EventCard";
import { Event } from "../Types/Event";
export const Home = () => {
  const [events, setEvents] = useState<Array<Event>>([]);

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
    <div>
      {events.map((item) => {
        return <EventCard title={item.title} description={item.description} />;
      })}
    </div>
  );
};
