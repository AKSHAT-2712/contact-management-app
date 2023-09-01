import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../utils/contactSlice";

const ContactForm = () => {
  const [isSelected, setIsSelected] = useState("Active");
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");

  // console.log(isSelected, firstName, LastName);

  const contactDetails = {
    first: { firstName },
    last: { LastName },
    status: { isSelected },
  };
  const dispatch = useDispatch();
  const saveContact = () => {
    dispatch(addContact(contactDetails));
  };

  return (
    <div className="flex flex-col p-3 items-center">
      <h2 className="text-xl font-semibold">Create Contact Screen</h2>
      <div className="w-full h-4/5 p-2 m-2 flex flex-col border-2 border-black">
        {/* first Name */}
        <div className="flex flex-row w-full justify-center"> 
          <span className="w-1/10 m-2 p-1 ">First Name :</span>
          <input
            type="text"
            name="firstName"
            className="w-[47%] m-2 p-1 border border-black focus:outline-none"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        {/* Last name */}
        <div className="flex flex-row w-full justify-center">
          <span className="w-1/10 m-2 p-1 ">Last Name :</span>
          <input
            type="text"
            name="lastName"
            className="w-[47%] m-2 p-1 border border-black focus:outline-none"
            value={LastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        {/* status */}
        <div className="flex flex-row w-full justify-evenly">
          <div className="m-2 p-1 w-[23%]">Status :</div>
          <div className="flex flex-col ml-1 mr-28 px-1 items-center justify-evenly w-[14%]">
            <div className="flex flex-row">
              <input
                type="radio"
                name="status"
                value="Active"
                checked={isSelected === "Active"}
                onChange={(e) => {
                  setIsSelected(e.target.value);
                }}
              />
              Active
            </div>
            <div className="flex flex-row">
              <input
                type="radio"
                name="status"
                value="Inactive"
                checked={isSelected === "Inactive"}
                onChange={(e) => {
                  setIsSelected(e.target.value);
                }}
              />
              Inactive
            </div>
          </div>
        </div>
      </div>
      <button
        className="border border-black bg-blue-500 text-white m-5 p-2"
        onClick={() => saveContact()}
      >
        Save Contact
      </button>
    </div>
  );
};

export default ContactForm;
