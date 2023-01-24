import React from "react";

import { Popover } from "./PopOver";

export const EventCard: EventCardProps = ({ description, image, title }) => {
  return (
    <div className="w-72">
      <img src={require("../pizzaunsplash.jpg")} />

      <div className="bg-gray-300 p-4">
        <div className="my-2">
          <div className="mb-2">
            <p>Title: {title}</p>
          </div>
          <div>
            <p>Description: {description}</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="mr-2 bg-orange-400 p-1 font-mono rounded-lg text-md">
              <Popover content="This is the popover content">
                <button>Creator</button>
              </Popover>
            </div>
            <div className="bg-blue-900 p-1 mr-2 rounded-lg">
              <p className="font-mono text-white text-md ">Members</p>
            </div>
          </div>
          <div>
            <button className="p-1 bg-slate-600 rounded-lg text-md">
              Join Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

type EventCardType = {
  title?: String;
  members?: Array<String>;
  description?: String;
  image?: string;
};

type EventCardProps = (props: EventCardType) => React.ReactElement;
