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

          {/* <div
            id="emailError"
            aria-live="assertive"
            className="hidden items-center text-xs mt-2"
          >
            <svg
              className="mr-1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
              />
              <path
                fill="currentColor"
                d="M8.004 10.462V7.596ZM8 5.57v-.042Z"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.004 10.462V7.596M8 5.569v-.042"
              />
            </svg>
            <span>Please enter a valid email address.</span>
          </div> */}

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
