import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selectors";

const stateSelector = createSelector(makeSelectUsers, users => ({
  users,
}));

export default function HomePage() {
  const users = useSelector(stateSelector);
  console.log(users);
  return <div>Hello Word</div>;
}
