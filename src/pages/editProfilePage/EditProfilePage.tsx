import React from "react";
import { EditProfileForm } from "./EditProfileForm";
import { UploadImageForm } from "./UploadImageForm";

export default function EditProfilePage() {
  return (
<div style={{display: 'flex', alignItems: 'center'}}>
<EditProfileForm/>
<UploadImageForm/>
</div>
  )
;
}
