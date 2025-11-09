import { useLocation } from "react-router-dom";
import logo from "../assets/logo-full.svg";

function Header() {
  const location = useLocation();
  const data = location.state;
  
  return (
    <header className="container mx-auto text-center flex flex-col items-center justify-center pt-8 md:pt-5">
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
      {location.pathname === "/ticket" ? (
        <>
          {" "}
          <h1 className="mt-8 mb-8 font-bold text-3xl lg:text-4xl xl:text-5xl">
            Congrats,
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gradient-text to-[hsl(0,0%,100%)]"> {data.fullName}</span>
            !<br className="hidden lg:block" />
            Your ticket is ready.
          </h1>
          <p className="w-100 text-xl md:text-lg lg:text-xl text-neutral-300">
            We've emailed your ticket to
            <span className="text-orange-700"> {data.email} </span>
            and will send updates in the run up to the event.
          </p>{" "}
        </>
      ) : (
        <>
          {" "}
          <h1 className="mt-4 mb-4 text-3xl md:text-4xl xl:text-5xl font-bold">
            Your Journey to Coding Conf
            <br className="hidden md:block" />
            2025 Starts Here!
          </h1>
          <p className="text-xl md:text-lg lg:text-xl text-neutral-300">
            Secure your spot at next year's biggest coding conference.
          </p>
        </>
      )}
    </header>
  );
}

export default Header;
