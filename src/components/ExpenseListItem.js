import React from "react";
import { NavLink } from "react-router-dom";

const inlineStyle = {
  color: "black",
  fontSize: "22px",
  fontWeight: "bold",
  display:"inline-block"
};

const ExpenseListItem = ({
  description,
  amount,
  createdAt,
  note,
  index,
  id
}) => (
  <div>
    <p style={{display:"inline-block",fontSize:"1.25em",fontWeight:"bold"}}>{index+1}</p>.&nbsp;
    <NavLink to={`/edit/${id}`} style={inlineStyle}>
      {description}
    </NavLink>
    <p>Amount: {amount}</p>
    <p>Created At: {createdAt}</p>
    {note&&<p>Note: {note}</p>}
    <br />
  </div>
);

export default (ExpenseListItem);
