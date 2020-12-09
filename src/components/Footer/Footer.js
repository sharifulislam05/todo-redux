import React from "react";
import { useSelector } from "react-redux";
import {
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETE,
} from "../../store/actions/actionTypes";
import FooterLink from "./FooterLink";

const Footer = () => {
  const todos = useSelector((state) => state.todo);
  const remainItem = todos.filter((td) => !td.isComplete);

  return (
    <div className="mt-3 p-3">
      {todos.length ? (
        <div className="w-50 d-flex m-auto">
          <p className="mr-auto">{remainItem.length} item remain</p>
          <div>
            <FooterLink filter={SHOW_ALL}>All</FooterLink>
            <FooterLink filter={SHOW_ACTIVE}>Active</FooterLink>
            <FooterLink filter={SHOW_COMPLETE}>Complete</FooterLink>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Footer;
