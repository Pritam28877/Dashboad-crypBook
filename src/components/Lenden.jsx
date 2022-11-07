import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Lenden = () => {
  const { id } = useParams();
  const [lenden, setLenden] = useState([]);
  async function getLenden() {
    const response = await fetch(`http://localhost:3001/lenden/${id}`);
    const data = await response.json();
    setLenden(data);
  }

  useEffect(() => {
    getLenden();
  }, [])

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {lenden.map((lende, index) => (
        <div key={index}>
            <pre>{JSON.stringify(lende, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
};

export default Lenden;
