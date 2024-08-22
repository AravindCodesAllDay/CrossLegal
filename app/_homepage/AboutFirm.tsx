import React from "react";

import Heading from "../_animations/Heading";
import Button from "../_animations/Button";

export default function AboutFIrm() {
  return (
    <div
      className={`bg-[url("/2.jpg")]  bg-no-repeat bg-center bg-fixed bg-cover h-full w-full flex flex-col items-center justify-center gap-3 p-5`}
    >
      <Heading
        title={"About Firm"}
        line1={"Legal Advice"}
        line2={"Litigation"}
      />
      <div className="relative w-full max-w-[800px]">
        <p className="font-medium">
          With a reputation for excellence and a track record of success, our
          lawyers are trusted advocates and reliable partners for clients around
          the world. We pride ourselves on delivering high-quality legal
          services with integrity, professionalism, and a commitment to
          achieving results
        </p>
      </div>
      <Button left="" right="Learn More" linkTo="/aboutus/#aboutfirm" />
    </div>
  );
}
