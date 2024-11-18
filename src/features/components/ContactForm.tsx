"use client";
import CloseIcon from "@/app/assets/icons/CloseIcon";
import EditIcon from "@/app/assets/icons/EditIcon";
import Email from "@/app/assets/icons/Email";
import HomeIcon from "@/app/assets/icons/HomeIcon";
import LoadingIcon from "@/app/assets/icons/LoadingIcon";
import SuccessCircleIcon from "@/app/assets/icons/SuccessCircleIcon";
import UserIcon from "@/app/assets/icons/UserIcon";
import { useForm } from "@formspree/react";
import { ReactNode, useState } from "react";
import ReactModal from "react-modal";

interface IProps {
  open: boolean;
  onClosed?: () => void;
}

type InputProps = {
  icon: ReactNode;
  placeholder: string;
  name: string;
  id: string;
  type?: "input" | "area";
};

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const ContactForm = (props: IProps) => {
  const { open, onClosed = () => {} } = props;
  const [isSubmitted, setSubmitted] = useState<boolean>(false);
  const [state, handleSubmit] = useForm("mqakablw");

  const renderInput = (params: InputProps) => {
    const isArea = params.type === "area";
    return (
      <div
        style={{ height: isArea ? 144 : 56 }}
        key={params.name}
        className="border border-[#EEEEEE] px-3 h-14 flex justify-start gap-2 w-full rounded-lg hover:border-blue-500 focus-within:ring-2 ring-blue-600"
      >
        <div className="pt-4">{params.icon}</div>
        {isArea ? (
          <textarea
            id={params.name}
            name={params.name}
            placeholder={params.placeholder}
            className="outline-none flex-1 py-4"
          />
        ) : (
          <input
            id={params.id}
            type={params.name}
            name={params.name}
            placeholder={params.placeholder}
            className="outline-none flex-1"
          />
        )}
      </div>
    );
  };

  const inputArr: InputProps[] = [
    {
      icon: <Email />,
      placeholder: "Email address",
      name: "Email",
      id: "email",
    },
    { icon: <UserIcon />, placeholder: "Name", name: "Name", id: "name" },
    {
      icon: <HomeIcon />,
      placeholder: "Company name",
      name: "Company Name",
      id: "companyName",
    },
    {
      icon: <EditIcon />,
      placeholder: "Let us know how we can help",
      name: "Description",
      id: "description",
      type: "area",
    },
  ];

  const loading = (text: string) => {
    if (state.submitting)
      return (
        <>
          <LoadingIcon />
          <p className="">Processing...</p>
        </>
      );
    return text;
  };

  const renderResults = () => (
    <>
      <div className="w-full flex justify-end">
        <CloseIcon onClick={onClosed} />
      </div>
      <div className="flex justify-center items-center flex-col gap-6">
        <p className="font-medium leading-9 text-[28px] text-[#202225]">
          Sent successfully
        </p>
        <p className="text-[#787F84] font-medium">
          One of our experts will contact you as soon as possible.
        </p>
        <SuccessCircleIcon />
      </div>
    </>
  );

  const renderForm = () => (
    <form
      onSubmit={handleSubmit}
      className="text-center flex flex-col justify-center items-center"
    >
      <div className="w-full flex justify-end">
        <CloseIcon onClick={onClosed} />
      </div>

      <p className="font-medium leading-9 text-[28px] text-[#202225] mb-6">
        Send us a Message
      </p>
      <p className="mb-6 font-medium text-sm leading-6 text-[#787F84]">
        One of our experts will contact you as soon as possible.
      </p>
      <div className="w-full center flex-col gap-4">
        {inputArr.map((i) => renderInput(i))}
        <button
          type="submit"
          disabled={state.submitting}
          className="hover:opacity-75 bg-blue-500 text-white font-semibold text-sm leading-6 rounded-[48px] w-[184px] h-12 center gap-2"
        >
          {loading("Send message")}
        </button>
      </div>
    </form>
  );

  return (
    <ReactModal
      isOpen={open}
      // onAfterOpen={afterOpenModal}
      onRequestClose={onClosed}
      style={customStyles}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick={true}
      preventScroll
      ariaHideApp
      className="w-[400px] md:w-[512px] bg-white overflow-hidden center-absolute p-6 border border-gray-200 focus-visible:outline-none rounded-xl mx-auto translate-x-[-60%]"
    >
      {state.result && state.succeeded ? renderResults() : renderForm()}
    </ReactModal>
  );
};

export default ContactForm;
