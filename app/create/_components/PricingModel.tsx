import textoLookup from "@/app/_data/Lookup";
import LogoProps from "../_types/LogoProps";
import HeadingDescription from "./HeadingDescription";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { SignInButton, useUser } from "@clerk/nextjs";

const PricingModel = ({ formData }: LogoProps) => {
  const { user } = useUser();

  useEffect(() => {
    if (formData?.title && typeof window !== "undefined") {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData]);

  return (
    <div className="my-10">
      <HeadingDescription
        title={textoLookup.LogoPrincingTitle}
        description={textoLookup.LogoPringDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
        {textoLookup.pricingOption.map((princing, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-5 border rounded-xl"
          >
            <Image
              src={princing.icon}
              alt={princing.title}
              width={60}
              height={60}
            />
            <h2 className="font-medium text-2xl">{princing.title}</h2>
            <div>
              {princing.features.map((feature, index) => (
                <h2 className="text-lg mt-3" key={index}>
                  {feature}
                </h2>
              ))}
              {user ? (
                <Button className="mt-5">{princing.button}</Button>
              ) : (
                <SignInButton
                  mode="modal"
                  forceRedirectUrl={"/generate-logo?type=" + princing.title}
                >
                  <Button className="mt-5">{princing.button}</Button>
                </SignInButton>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingModel;
