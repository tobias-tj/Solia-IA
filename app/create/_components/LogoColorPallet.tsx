"use client";
import textoLookup from "@/app/_data/Lookup";
import HeadingDescription from "./HeadingDescription";
import { useState } from "react";
import colorPallet from "@/app/_data/Colors";
import LogoProps from "../_types/LogoProps";

const LogoColorPallet = ({ onHandleInputChange, formData }: LogoProps) => {
  const [selectedOption, setSelectedOption] = useState(formData?.palette);

  return (
    <div className="my-10">
      <HeadingDescription
        title={textoLookup.LogoTitlePallet}
        description={textoLookup.LogoDescriptionPallet}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {colorPallet.map((palette, index) => (
          <div
            className={`flex p-1 cursor-pointer ${
              selectedOption == palette.name &&
              "border-2 rounded-lg border-primary"
            }`}
            key={index}
          >
            {palette?.colors.map((color, index) => (
              <div
                className="h-24 w-full"
                key={index}
                onClick={() => {
                  setSelectedOption(palette.name);
                  onHandleInputChange(palette);
                }}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoColorPallet;
