import React, { useId } from "react";

const Select = ({ options, label, className, ...props }, ref) => {
  const id = useId();
  return (
    <div className="w-full ">
      {label && <label htmlFor={id} className=""></label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`py-3 px-2 rounded-lg text-black bg-white outline-non focus:bg-gray-50 duration-200 border border-gray-200 w-full${className}`}
      >
        {
            options?.map((option) =>(
              <option key={option} value={option}>
                {option}
              </option>
            ))
        }
      </select>
    </div>
  );
};

export default React.forwardRef(Select);
