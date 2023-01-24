import React from "react";

const navBarOptions: string[] = ["Add Event", "Sign In", "Edit Event"];

export const NavBar: NavbarComponent = (props) => {
  return (
    <div className="bg-slate-900 w-full h-20">
      <div className="flex justify-between h-full w-full">
        <div className="my-auto">
          <a className="" href="/">
            <h1 className="text-white ml-2 text-lg hover:text-blue-400 cursor-pointer">
              Events
            </h1>
          </a>
        </div>

        <div className="flex">
          {navBarOptions.map((item) => (
            <div className="my-auto mr-2">
              <button
                className="bg-blue-300 rounded  p-1"
                onClick={() => {
                  console.log("temp");
                }}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={"w-full h-full"}>{props.children}</div>
    </div>
  );
};

type NavProps = {
  children?: React.ReactNode;
};

type NavbarComponent = (props: NavProps) => React.ReactElement;
