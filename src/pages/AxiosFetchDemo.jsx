import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosFetchDemo = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => setData(response.data));
  }, []);

  return <div>{data ? data.title : "Loading..."}</div>;
};

export default AxiosFetchDemo;
