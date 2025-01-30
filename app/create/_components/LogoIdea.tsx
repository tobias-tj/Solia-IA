import { useEffect, useState } from "react";
import LogoProps from "../_types/LogoProps";

const LogoIdea = ({ onHandleInputChange, formData }: LogoProps) => {
  const [ideas, setIdeas] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(formData?.idea);

  useEffect(() => {
    generateLogoDesignIdea();
  }, []);

  const generateLogoDesignIdea = async () => {
    setLoading(true);
    const PROMPT = Promt.DESIG_IDEA_PROMPT.replace(
      "{logoType}",
      formData?.design?.title
    )
      .replace("{logoTitle}", formData?.title)
      .replace("{logoDesc}", formData?.desc)
      .replace("{logoPrompt}", formData?.design?.prompt);
  };

  return <div>LogoIdea</div>;
};

export default LogoIdea;
