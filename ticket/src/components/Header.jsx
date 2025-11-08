import logo from "../assets/logo-full.svg";

function Header() {
  return (
    <header className="container mx-auto text-center flex flex-col items-center justify-center pt-8 md:pt-5">
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
      <h1 className="mt-4 mb-4 text-3xl md:text-4xl xl:text-5xl font-bold">
        Your Journey to Coding Conf
        <br className="hidden md:block" />
        2025 Starts Here!
      </h1>
      <p className="text-xl md:text-lg lg:text-xl text-neutral-300">
        Secure your spot at next year's biggest coding conference.
      </p>
    </header>
  );
}

export default Header;
