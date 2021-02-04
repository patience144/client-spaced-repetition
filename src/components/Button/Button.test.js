import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "../../contexts/UserContext";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <UserProvider>
        <Button />
      </UserProvider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});