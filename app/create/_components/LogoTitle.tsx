"use client";
import textoLookup from "@/app/_data/Lookup";
import HeadingDescription from "./HeadingDescription";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import LogoColorPalletProps from "../_types/LogoProps";
import FormData from "../_types/FormData";
import LogoProps from "../_types/LogoProps";

const LogoTitle = ({ onHandleInputChange }: LogoProps) => {
  const searchParam = useSearchParams();
  const [title, setTitle] = useState(searchParam?.get("title") ?? "");

  return (
    <div className="my-10">
      <HeadingDescription
        title={textoLookup.LogoTitle}
        description={textoLookup.LogoTitleDescription}
      />

      <input
        type="text"
        placeholder={textoLookup.InputTitlePlaceHolder}
        className="p-4 border rounded-lg mt-5 w-full"
        defaultValue={title}
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
};

export default LogoTitle;
