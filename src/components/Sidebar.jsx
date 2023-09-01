import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="col-start-1 col-end-2 border border-green-300 text-center">
        <ul className="flex flex-col h-full" >
            <li className="m-3 p-3 text-xl font-semibold"><Link to="/">Contacts </Link></li>
            <hr />
            <li className="m-3 p-3 text-xl font-semibold"><Link to="/chartsAndGraphs">Charts and Graphs</Link></li>
        </ul>
    </div>
  );
};

export default SideBar;
