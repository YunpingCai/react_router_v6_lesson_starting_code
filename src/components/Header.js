import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, logOut } from "../features/session/sessionSlice"
import { NavLink  } from "react-router-dom";

// Import the NavLink component.

export default function Header () {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogout = e => {
    dispatch(logOut())
  }


  return (
    <div className="header">
      <NavLink to="/about">About</NavLink>
      <NavLink to="/articles">Articles</NavLink>
      <NavLink to="/categories">Categories</NavLink>
      {
        currentUser.username
          ? <>
              <a href="/profile">Profile</a>
              <button onClick={handleLogout} className="logout"> Log Out </button>
            </>
          : <a href="/sign-up">Sign Up</a>
        }
    </div>
  )
}
