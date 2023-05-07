import Image from "next/image";

import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/oleg.jpg"
          alt="An image shown Oleg"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Oleg</h1>
      <p>
        A blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
};

export default Hero;
