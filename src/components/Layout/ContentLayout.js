import React from "react";
import RedirectButton from '../common/RedirectButton';
import Breadcrumbs from "../common/Breadcrumbs";

function ContentLayout({ title, children }) {
  return (
    <div className="flex flex-col w-full h-screen px-16 py-8 bg-bgColor">
      <span className="text-4xl font-semibold mb-8 pb-2 border-strokeColor border-b-2">
        {title}
      </span>
      <div className="pb-5">
      <Breadcrumbs/>
      </div>
      
      {/* <RedirectButton/> */}
      {children}
    </div>
  );
}

export default ContentLayout;
