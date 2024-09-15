import React from "react";

const ContactInput = ({
  id,
  label,
  placeholder,
  onChange,
  name,
  value,
  type,
}) => {
  return (
    <div className="flex flex-col gap-y-2.5">
      <label htmlFor={id} className="font-bold text-lg">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="h-[222px] py-3 lg:py-5 ps-4 lg:ps-8 bg-white/60 backdrop-blur-sm lg:bg-transparent border border-borderAccent rounded-10 resize-none"
        />
      ) : (
        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          className="lg:h-[70px] py-3 lg:py-5 ps-4 lg:ps-8 bg-white/60 backdrop-blur-sm lg:bg-transparent border border-borderAccent rounded-10"
        />
      )}
    </div>
  );
};

export default ContactInput;
