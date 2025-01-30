import textoLookup from "@/app/_data/Lookup";
import HeadingDescription from "./HeadingDescription";
import LogoProps from "../_types/LogoProps";

const LogoDescription = ({ onHandleInputChange, formData }: LogoProps) => {
  return (
    <div className="my-10">
      <HeadingDescription
        title={textoLookup.LogoSecondTitle}
        description={textoLookup.LogoSecondDescription}
      />

      <input
        type="text"
        placeholder="Enter your Description"
        className="p-4 border rounded-lg mt-5 w-full"
        // defaultValue={formData?.desc}
        value={formData?.desc}
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
};

export default LogoDescription;
