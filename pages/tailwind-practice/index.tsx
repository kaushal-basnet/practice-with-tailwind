import React from "react";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/Outline";

const Tailwind = () => {
  return (
    <>
      <div className="w-full flex  relative flex-col">
        <div className="w-full flex mt-20  justify-center">
          <img
            src="/img/group.png"
            alt="group"
            className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] md:h-[48px] md:w-[48px] lg:h-[56px] lg:w-[56px] xl:h-[64px] xl:w-[64px]"
          />
        </div>
        {/* <div className="bg-[#1e0f0026]  w-[115px] h-[120px] fixed"></div> */}
        <div className="mt-12 flex justify-evenly">
          <div className=" absolute left-[-50px] sm:left-[-40px] md:left-[-50px] lg:left-[-70px] xl:left-[-10px]">
            <img
              src="/img/vector.png"
              alt="vector"
              //   width="150px"
              //   height="200px"
              className="opacity-50 w-[150px] h-[250px] sm:w-[200px] sm:h-[300px] md:w-[250px] md:h-[300px] lg:w-[325px] lg:h-[400px]  xl:w-[400px] xl:h-[500px] "
            />
          </div>

          <div className="flex flex-col items-center ">
            <h1 className="font-['Fira_Sans'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px]  ">
              Welcome to Fortune Live
            </h1>
            <p className="font-['Inter'] text-[10px] pt-2 pb-12 text-[#6D6D6D] sm:text-[12px] sm:pt-2 md:text-[14px] md:pt-4 lg:text-[20px] lg:pt-6 xl:text-[28px] xl:pt-8">
              Artificial Intelligence For Your Marketing Needs
            </p>

            <Button colorScheme="blue" className=" w-fit ">
              <p className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
                Let’s Get Started
              </p>
              <ArrowRightIcon height={10} className="pl-1" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tailwind;
