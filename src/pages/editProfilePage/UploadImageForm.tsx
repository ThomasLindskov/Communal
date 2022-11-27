import React, { useEffect } from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { CardTitle } from "../../components/CardTitle";
import { InputField } from "../../components/InputField";
import { theme } from "../../theme";
import toast, { Toaster } from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ApolloError, gql, useQuery } from "@apollo/client";
import {
  uploadImageSchema,
  IUploadImageInput,
} from "./validationSchemas/UploadImage";
import { useUploadImageMutation } from "src/hooks/useUploadImageMutation";


export const UploadImageForm = () => {
  //const [images, setImages] = useState([]);


   const {
    uploadImage,
    loading: submitLoading,
    error: submitError,
  } = useUploadImageMutation(); 
  const {
    register,
    formState: { errors, isDirty },
    // setValue,
    handleSubmit,
  } = useForm<IUploadImageInput>({
    resolver: yupResolver(uploadImageSchema),
  });


  //const { loading, error } = useProfileSettingsQuery(setValue);


  const onSubmit: SubmitHandler<IUploadImageInput> = (inputData) => {
    if (!isDirty) {
      toast("No image selected");
      return;
    }

    const { image } = inputData;
    const input = {
        id: localStorage.getItem("currentUser"),
        fields: {
          image
        },
      };
      
      uploadImage({
        variables: { input },
        onCompleted: () => {
          if (submitError) {
            toast(submitError.message);
          } else {
            toast.success("Profile updated successfully");
          }
        },
      });
    };
      

    // if (loading) return null;
    // if (error) return <p>{`Error :${error.message}`}</p>;

    // async function retriveImages() {
    //   const query = new Parse.Query("Image");
    //   let results = await query.find();

    //   for(let i = 0; i < results.length; i++) {
    //     let object = results[i];
    //     console.log(object.id + ' - ' + object.get('image') + " ") + JSON.stringify(object.get('image'));
        
    //   }
    // }

    // retriveImages();


  const fetchImage = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      image
    }
  }
`;

console.log(fetchImage);

// useEffect(() => {
//   const loadedimages = async () => {
//     let query = new Parse.Query("Image");
//     const results = await query.find();
//     setImages(results);
// };
// loadedimages();
//  }, []);

  
  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    style={{
      display: "flex",
      flexDirection: "column",
      gap: theme.flexGap.medium,
      alignItems: "center",
    }}
    >
            <Card width="200px">
      <div style={{ width: "100%" }}>
            <CardTitle children="Edit Profile" />
          </div>
          <div>
            <p>this is where an image should be displayed</p>
            
          </div>
          <div>
            <img src="" alt="" />
            <p>this is where u can upload new image</p>
            <InputField
              label="Image"
              id="image"
              type="file"
              placeholder="Image"
              style={{ div: { width: "100%" } }}
              register={register("image")}
              errorMessage={errors.image?.message}
            />
          </div>
          <Button
            color={theme.colors.cta}
            type="submit"
             disabled={submitLoading}
           >
            Upload Image
          </Button>
      </Card>
      <Toaster position="bottom-center" />
    </form>
  );
};
