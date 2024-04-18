import React from "react";
import { useState } from "react";

import contentData from "./utlis/Content";

const Body = () => {
  const [activeId, setActiveId] = useState(0);

  const handleContent = (index) => {
    setActiveId(index - 1);
  };

  return (
    <div className="flex flex-col min-h-screen items-center w-full justify-center p-2 ">
      
        <div className="flex p-5  w-[80%] justify-between rounded-lg bg-gray-400 ">

        <div className="m-5 align-middle bg-black">
            {}
            <img
              className="h-[400px] w-[300px]"
              src={contentData[activeId].img}
              alt="logo"
            />
        </div> 
        <div className="w-[60%] h-[400px] mt-3 bg-blue-300 overflow-y-scroll rounded-lg p-5">
            {}
            {contentData.map((data) => (
              <ul
                key={data.id}
                onMouseEnter={() => handleContent(data.id)}
                style={{ cursor: "pointer" }}
              >
                <li>
                  <h1 className="font-bold text-[20px]">{data.heading}</h1>
                  <p>{data.content}</p>
                </li>
              </ul>
            ))}
        </div>
          
        </div>
    </div>
  );
};

export default Body;
