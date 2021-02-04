import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard";
import { UserProvider } from "../../contexts/UserContext";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <UserProvider>
        <Dashboard />
      </UserProvider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});