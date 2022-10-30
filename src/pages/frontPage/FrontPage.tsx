import React from "react";
import FormContainer from "./FormContainer";
import { UserGroup } from "./UserGroup";

export default function FrontPage() {
  return (
    <div style={{ display: "flex" }}>
      <FormContainer />
      <UserGroup />
    </div>
  );
}
