import React from "react";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/Outline";

const Tailwind = () => {
  return (
    <>
      <div className="w-full flex  relative flex-col">
        <div className="w-full flex mt-20 justify-center">
          <Image src="/img/group.png" alt="group" height="30px" width="30px" />
        </div>
        <div className="mt-10">
          {/* <div className="bg-[#1e0f0026]  w-[115px] h-[120px] fixed"></div> */}
          <div className=" absolute left-[-50px] ">
            <Image
              src="/img/vector.png"
              alt="vector"
              width="150px"
              height="200px"
            />
          </div>
        </div>

        <div className="flex flex-col items-center ">
          <h1 className=" font-bold text-xl">Welcome to Fortune Live</h1>
          <p className="text-[10px] pt-2 pb-12 text-[#6D6D6D] ">
            Artificial Intelligence For Your Marketing Needs
          </p>

          <Button colorScheme="blue" className=" w-fit ">
            <p className="text-[8px]"> Let’s Get Started</p>
            <ArrowRightIcon height={10} className="pl-1" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Tailwind;
