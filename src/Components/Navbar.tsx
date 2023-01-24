import React from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../Types/User";

export const NavBar: NavbarComponent = (props) => {
  let navigate = useNavigate();
  const routeChange = () => {
    if (props.user === null) {
      navigate("/signIn");
    } else {
      props.onSignOut();
      navigate("/");
    }
  };

  const goToCreateEvent = () => {
    navigate("/addEvents");
  };
  const onMainLinkClick = () => {
    props.onTitleClick(props.user);
    navigate("/");
  };

  return (
    <div className="bg-slate-900 w-full h-20">
      <div className="flex justify-between h-full w-full">
        <div className="my-auto">
          <button className={""} onClick={() => onMainLinkClick()}>
            <h1 className="text-white ml-2 text-lg hover:text-blue-400 cursor-pointer">
              Events
            </h1>
          </button>
        </div>

        <div className="flex">
          <div className="my-auto mr-2">
            {props.user !== null && (
              <button
                className="bg-blue-300 rounded  p-1"
                onClick={() => goToCreateEvent()}
              >
                Add Event
              </button>
            )}
            {/* <button
              className="bg-blue-300 rounded  p-1"
              onClick={() => goToCreateEvent()}
            >
              Add Event
            </button> */}
          </div>
          <div className="my-auto mr-2">
            <button className="bg-blue-300 rounded  p-1" onClick={routeChange}>
              {props.user !== null ? "Sign Out" : "Sign In"}
            </button>
          </div>
        </div>
      </div>

      <div className={"w-full h-full"}>{props.children}</div>
    </div>
  );
};

type NavProps = {
  children?: React.ReactNode;
  user: User | null;
  onTitleClick: (user: User | null) => void;
  onSignOut: () => void;
};

type NavbarComponent = (props: NavProps) => React.ReactElement;
