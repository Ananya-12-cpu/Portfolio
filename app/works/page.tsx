"use client";

import Image from "next/image";

function Work() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl p-8">
        <div className="flex flex-col justify-center">
          <Image
            src="/images/about.png"
            width={1440}
            height={300}
            alt="Picture of the author"
          />
        </div>

        {/* <div className="flex justify-center items-center"> */}
        <div className="p-4">
          <div className="text-center text-5xl mb-10 "> My Work</div>
          <div className=" my-5">
            <p className="mt-4 text-gray-700">
              I am currently working on some Projects, which I will upload to my
              portfolio as soon as they are done.Here are a few little demos:
              Notifications demo , A calculator , A fictional tour's site (Work
              in Progress).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
