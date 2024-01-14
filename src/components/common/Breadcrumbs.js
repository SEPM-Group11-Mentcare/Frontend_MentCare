import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  console.log(location);

  let currentLink = '';
  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;
      const isLastCrumb = index === array.length - 1;

      return (
        <li key={crumb} className={`text-sm ${isLastCrumb ? 'font-semibold' : 'font-normal'} breadcrumb`}>
          {isLastCrumb ? (
            crumb
          ) : (
            <Link to={currentLink}>{crumb}</Link>
          )}
        </li>
      );
    });

  return (
    <div className="breadcrumbs">
      <ul className="flex items-center space-x-2">
        <li className="text-sm font-normal breadcrumb">
          <Link to="/">Home</Link>
        </li>
        {crumbs}
      </ul>
    </div>
  );
}
