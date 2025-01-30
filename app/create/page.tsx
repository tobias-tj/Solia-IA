"use client";
import { Button } from "@/components/ui/button";
import LogoTitle from "./_components/LogoTitle";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import LogoDescription from "./_components/LogoDescription";
import LogoColorPallet from "./_components/LogoColorPallet";
import LogoDesigns from "./_components/LogoDesings";
import LogoIdea from "./_components/LogoIdea";
import FormData from "./_types/FormData";
import PricingModel from "./_components/PricingModel";

const CreateLogo = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});

  const onHandleInputChange = (field: keyof FormData, value: object) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    console.log(formData);
  };

  return (
    <div className="mt-28 p-10 border rounded-xl ">
      {step == 1 ? (
        <LogoTitle
          onHandleInputChange={(v: object) => onHandleInputChange("title", v)}
          formData={formData}
        />
      ) : step == 2 ? (
        <LogoDescription
          onHandleInputChange={(v: object) => onHandleInputChange("desc", v)}
          formData={formData}
        />
      ) : step == 3 ? (
        <LogoColorPallet
          onHandleInputChange={(v: object) => onHandleInputChange("palette", v)}
          formData={formData}
        />
      ) : step == 4 ? (
        <LogoDesigns
          onHandleInputChange={(v: object) => onHandleInputChange("design", v)}
          formData={formData}
        />
      ) : step == 5 ? (
        <LogoIdea
          onHandleInputChange={(v: object) => onHandleInputChange("idea", v)}
          formData={formData}
        />
      ) : step == 6 ? (
        <PricingModel
          onHandleInputChange={(v: object) => onHandleInputChange("pricing", v)}
          formData={formData}
        />
      ) : null}

      <div className="flex items-center justify-between mt-10">
        {step != 1 && (
          <Button variant="outline" onClick={() => setStep(step - 1)}>
            <ArrowLeft /> Previous
          </Button>
        )}

        <Button onClick={() => setStep(step + 1)}>
          <ArrowRight /> Continue
        </Button>
      </div>
    </div>
  );
};

export default CreateLogo;
