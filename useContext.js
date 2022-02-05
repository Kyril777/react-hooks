/* UseContext.js */

import React, { useContext } from 'react';

function Present() {
  const value = useContext(Context);
  return <div>{value}.</div>;
}

/* Use context when contect changes */

import { useContext, createContext, useEffect, useState } from "react";

const UserContext = createContext("Unknown");

export function Application() {
  const [userName, setUserName] = useState("Rutherford Hayes");
  useEffect(() => {
    setTimeout(() => {
      setUserName("Hayes, Rutherford Hayes");
    }, 2000);
  }, []);

  return (
    <UserContext.Provider value={userName}>
      <Layout>Main content</Layout>
    </UserContext.Provider>
  );
}

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}

function Header() {
  return (
    <header>
      <UserInfo />
    </header>
  );
}

function UserInfo() {
  const userName = useContext(UserContext);
  return <span>{userName}</span>;
}
