import React, { useState, useEffect } from "react";
import axios from "axios";

function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    console.log(data);
  };
  return <div></div>;
}

export default Test;
