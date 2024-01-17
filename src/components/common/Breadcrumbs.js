import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  // console.log(location);

  let currentLink = '';
  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;
      const isLastCrumb = index === array.length - 1;

      return (
        <li key={crumb} className={`text-sm ${isLastCrumb ? 'font-semibold' : 'font-normal'} breadcrumb`}>
          {isLastCrumb ? (
            crumb.toUpperCase()
          ) : (
            crumb === "patient" || crumb === "therapist" || crumb === "admin" ? <Link to={`${currentLink}/dashboard`}>HOME</Link> :
            <Link to={currentLink}>{crumb.toUpperCase()}</Link>
          )}
        </li>
      );
    });

  return (
    <div className="breadcrumbs">
      <ul className="flex items-center space-x-2">
        {crumbs}
      </ul>
    </div>
  );
}
