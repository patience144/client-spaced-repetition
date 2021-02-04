import React from "react";
import ReactDOM from "react-dom";
import RegistrationForm from "./RegistrationForm";
import { UserProvider } from "../../contexts/UserContext";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <UserProvider>
        <RegistrationForm />
      </UserProvider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});