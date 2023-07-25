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
            Хориглох ачаа
          </AccordionHeader>
          <AccordionBody className="text-base font-normal pt-0">
            Агаарын тээврээр тээвэрлэхийг хориглосон болон тээвэрлэгчээс
            хориглосон аливаа бараа бүтээгдэхүүний тээвэрлэхгүй.
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
            Газрны ачааны зөвшөөрөгдөх хэмжээ
          </AccordionHeader>
          <AccordionBody className="text-base font-normal pt-0">
            B2=500 см2 (Контайнер Өргөн) <br />
            L2=500 см2 (Контайнер Урт) <br />
            H2=500 см2 (Контайнер Өндөр) Жич: Дээрх хэмжээсээс илүү тээшийг
            тохиролцоно.
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  );
}
