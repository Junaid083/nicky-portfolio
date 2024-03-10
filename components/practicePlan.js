import Image from "next/image";
import React from "react";
import Container from "./container";

const PracticePlan = (props) => {
  const { data } = props;
  return (
    <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex flex-wrap items-center w-full border ${
            item.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {item.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {item.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {item.bullets.map((bullet, bulletIndex) => (
                <Benefit key={bulletIndex} title={bullet.title} icon={bullet.icon}>
                  {bullet.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

function Benefit(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3 border-t pt-4">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-yellow-500 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-yellow-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}

export default PracticePlan;
