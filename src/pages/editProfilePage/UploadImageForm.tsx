import React from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { CardTitle } from "../../components/CardTitle";
import { theme } from "../../theme";
import toast, { Toaster } from "react-hot-toast";

export const UploadImageForm = () => {

   /*  const { image } = inputData;
    const input = {
        id: localStorage.getItem("currentUser"),
        fields: {
          image
        },
      }; */

  
  return (
    <form>
      <Card width="200px">
        <div style={{width: "100%"}}>
          <CardTitle children="Upload photo" />
          <div>this is where an image should be displayed</div>
          <div>
            <p>this is where u can upload new image</p>
            <input type="file" name="image" />
          </div>

          <Button
            color={theme.colors.cta}
            type="submit"
          >
            Upload Photo
          </Button>
        </div>
      </Card>
      <Toaster position="bottom-center" />
    </form>
  );
};
