import React from "react";

const EventsDemo = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click me</button>;
};

export default EventsDemo;
