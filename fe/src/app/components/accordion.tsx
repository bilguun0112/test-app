"use client";

import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function HelpComp() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className=" w-full max-w-[1280px] px-5 md:px-10 mx-auto mt-4 md:mt-8">
      <Fragment>
        <Accordion
          open={open === 1}
          className="border border-blue-gray-100 px-4 rounded-lg mb-2"
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`border-b-0 transition-colors ${
              open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            What is Lorem Ipsum?
          </AccordionHeader>
          <AccordionBody className="text-base font-normal pt-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          className="border border-blue-gray-100 px-4 rounded-lg mb-2"
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`border-b-0 transition-colors ${
              open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            Why do we use it?
          </AccordionHeader>
          <AccordionBody className="text-base font-normal pt-0">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          className="border border-blue-gray-100 px-4 rounded-lg"
        >
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`border-b-0 transition-colors ${
              open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            Where does it come from?
          </AccordionHeader>
          <AccordionBody className="text-base font-normal pt-0">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            .
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  );
}
