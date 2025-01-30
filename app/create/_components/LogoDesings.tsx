"use client";
import textoLookup from "@/app/_data/Lookup";
import HeadingDescription from "./HeadingDescription";
import logoDesign from "@/app/_data/LogoDesign";
import Image from "next/image";
import { useState } from "react";
import LogoProps from "../_types/LogoProps";

const LogoDesigns = ({ onHandleInputChange, formData }: LogoProps) => {
  const [selectedOption, setSelectedOption] = useState(formData?.design?.title);

  return (
    <div className="my-10">
      <HeadingDescription
        title={textoLookup.LogoDesignTitle}
        description={textoLookup.LogoDesignDescription}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        {logoDesign.map((design, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedOption(design.title);
              onHandleInputChange(design);
            }}
            className={`p-2 hover:border-2 border-primary rounded-xl cursor-pointer ${
              selectedOption == design.title &&
              "border-2 rounded-xl border-primary "
            }`}
          >
            <Image
              src={design.image}
              alt={design.title}
              width={300}
              height={150}
              className="w-full rounded-xl h-[150px] object-cover}"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoDesigns;
