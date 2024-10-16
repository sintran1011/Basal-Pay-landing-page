"use client";
import BaseButton from "@/features/components/BaseButton";
import ContactForm from "@/features/components/ContactForm";
import { useState } from "react";

const FreeConsultation = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="center text-center flex-col md:h-[1000px] bg-[url('/assets/free-consultation.png')] bg-no-repeat bg-center xl:p-0 p-10">
      <p className="xl:w-1/3 w-full font-semibold xl:text-[72px] xl:leading-[75px] text-[36px] leading-[30px] text-[#202225] mb-4">
        Get a free consultation
      </p>
      <BaseButton onClick={() => setOpen(true)} type="primary">
        Get started
      </BaseButton>
      <ContactForm open={open} onClosed={() => setOpen(false)} />
    </div>
  );
};

export default FreeConsultation;
