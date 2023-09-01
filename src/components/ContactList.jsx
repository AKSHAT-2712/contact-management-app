import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../utils/contactSlice";

const ContactList = () => {
  const contacts = useSelector((store) => store.contact.contacts);

  const dispatch = useDispatch();

  const removeContact = (index) =>{
  dispatch(deleteContact(index));
  }



  //   console.log(contacts.map((x) => console.log(x.status.isSelected)));
  return (contacts.length === 0) ? (
    <div className="col-end-7 col-span-5 border border-blue-500 flex flex-col items-center ">
      <div className="flex flex-col p-3 items-center ">
        <button className="border border-black bg-slate-600 p-2 m-2 w-fit text-white ">
          <Link to="/createContact">Create Contact</Link>
        </button>
        <div className="border border-black m-10 p-3 flex flex-row">
          <div className="rounded-full w-4 h-4 m-2 p-2">❌</div>
          <p className="m-2 p-2">
            No Contact Found Please Add Contact From Create Contact Button
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col col-end-7 col-span-5 items-center">
      <Link to="/createContact">
        <div className="m-2 p-2 bg-slate-500 border border-black cursor-pointer ">
          Create Contact
        </div>
      </Link>

      <div className="flex flex-wrap p-3 border border-yellow-500 w-full">
        {contacts.map((x, index) => (
          <div
            className="border border-black flex flex-col justify-evenly"
            key={index}
          >
            <div className="border border-red-500 p-1 m-1 w-[56px] h-[88px]">
              <ul>
                <li>{x?.first?.firstName}</li>
                <li>{x?.last?.LastName}</li>
                <li>{x?.status?.isSelected}</li>
              </ul>
            </div>
            <div className="border border-black m-1 p-1 cursor-pointer"><Link to="/editContact" state={{key : index}}>Edit</Link></div>
            <button className="border border-black m-1 p-1" onClick={()=>removeContact(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
