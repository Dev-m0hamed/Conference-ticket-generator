import Decoration from "../components/Decoration";
import Header from "../components/Header";
import Avatar from "../components/Avatar";
import Input from "../components/Input";
import Submit from "../components/Submit";

function FormPage() {
  return (
    <>
      <Decoration />

      <Header />

      <form
        className="container mx-auto mt-8 md:mt-4 flex flex-col justify-center md:w-100"
        noValidate
      >
        <fieldset>
          <legend className="sr-only">Registration form</legend>

          <Avatar />

          <Input name={"fullName"} label={"Full Name"} />

          <Input
            name={"email"}
            label={"Email Address"}
            type={"email"}
            placeholder={"example@email.com"}
          />

          <Input
            name={"gitHub"}
            label={"GitHub Username"}
            placeholder={"@yourusername"}
          />

          <Submit />
        </fieldset>
      </form>
    </>
  );
}

export default FormPage;
