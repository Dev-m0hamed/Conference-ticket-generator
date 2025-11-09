import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import Decoration from "../components/Decoration";
import Header from "../components/Header";
import Avatar from "../components/Avatar";
import Input from "../components/Input";
import Submit from "../components/Submit";

function FormPage() {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const methods = useForm({ mode: "all" });

  const onSubmit = (data) => {
    if (!preview) {
      setError("Please upload a valid photo");
      return;
    }
    const formData = { ...data, avatar: preview };
    navigate("/ticket", { state: formData });
  };

  return (
    <>
      <Decoration />

      <Header />

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="container mx-auto mt-8 md:mt-4 flex flex-col justify-center md:w-100"
          noValidate
        >
          <fieldset>
            <legend className="sr-only">Registration form</legend>

            <Avatar
              preview={preview}
              setPreview={setPreview}
              error={error}
              setError={setError}
            />

            <Input
              name={"fullName"}
              label={"Full Name"}
              rules={{ required: true }}
            />

            <Input
              name={"email"}
              label={"Email Address"}
              type={"email"}
              placeholder={"example@email.com"}
              rules={{
                required: "Please enter a valid email address.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "invalid email address",
                },
              }}
            />

            <Input
              name={"gitHub"}
              label={"GitHub Username"}
              placeholder={"@yourusername"}
              rules={{ required: true }}
            />

            <Submit />
          </fieldset>
        </form>
      </FormProvider>
    </>
  );
}

export default FormPage;
