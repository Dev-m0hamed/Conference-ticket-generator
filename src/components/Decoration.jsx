import patternCircle from "../assets/pattern-circle.svg";
import patternSquigglyTop from "../assets/pattern-squiggly-line-top.svg";
import patternSquigglyBottom from "../assets/pattern-squiggly-line-bottom-mobile-tablet.svg";
import patternSquigglyBottomDesktop from "../assets/pattern-squiggly-line-bottom-desktop.svg";

function Decoration() {
  return (
    <div className="w-full">
      <img
        className="hidden lg:block max-w-full h-auto absolute -z-1 -top-16 left-8"
        src={patternCircle}
        alt="decor-image"
      />
      <img
        className="hidden lg:block max-w-full h-auto absolute -z-1 bottom-48 right-56"
        src={patternCircle}
        alt="decor-image"
      />
      <img
        className="max-w-full top-5 absolute -z-1 right-0 w-30 md:w-100 md:top-16"
        src={patternSquigglyTop}
        alt="decor-image"
      />
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={patternSquigglyBottomDesktop}
        />
        <img
          className="max-w-full h-auto absolute -z-1 left-0 bottom-0"
          src={patternSquigglyBottom}
          alt="decor-image"
        />
      </picture>
    </div>
  );
}

export default Decoration;
