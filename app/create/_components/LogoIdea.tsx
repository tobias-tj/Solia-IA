import { useEffect, useState } from "react";
import LogoProps from "../_types/LogoProps";
import HeadingDescription from "./HeadingDescription";
import textoLookup from "@/app/_data/Lookup";
import { Loader2Icon } from "lucide-react";

const LogoIdea = ({ onHandleInputChange, formData }: LogoProps) => {
  const [ideas, setIdeas] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(formData?.idea);
  const ideasMock = ["Minimalista", "Tecnológico", "Creativo", "Elegante"];

  //   useEffect(() => {
  //     generateLogoDesignIdea();
  //   }, []);

  //   const generateLogoDesignIdea = async () => {
  //     setLoading(true);
  //     const PROMPT = Prompt.DESIG_IDEA_PROMPT.replace(
  //       "{logoType}",
  //       formData?.design?.title
  //     )
  //       .replace("{logoTitle}", formData?.title)
  //       .replace("{logoDesc}", formData?.desc)
  //       .replace("{logoPrompt}", formData?.design?.prompt);
  //   };

  return (
    <div className="my-10">
      <HeadingDescription
        title={textoLookup.LogoIdeaTitle}
        description={textoLookup.LogoIdeaDescription}
      />
      <div className="flex items-center justify-center">
        <Loader2Icon className="animate-spin my-10" />
      </div>

      {/* Opciones de selección rápida */}
      <div className="flex flex-wrap gap-3 justify-center mt-5">
        {ideasMock.map((idea, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedOption(idea);
              onHandleInputChange(idea);
            }}
            className={`px-4 py-2 border rounded-lg cursor-pointer ${
              selectedOption === idea ? "bg-primary text-white" : "bg-gray-200"
            }`}
          >
            {idea}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LogoIdea;
