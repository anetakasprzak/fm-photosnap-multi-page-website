import "./StoriesPage.css";
import NavBar from "../NavBar/NavBar";
import { heroStories, links, socialLinksData } from "../../Data";
import { storiesData } from "../../Data";
import StoryComponent from "../StoryComponent/StoryComponent";
import FooterSection from "../Footer/Footer";
import { useLayoutEffect } from "react";

const StoriesPage = () => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <NavBar />
      <StoriesHero data={heroStories} />
      <StoriesSection data={storiesData} />
      <FooterSection data={socialLinksData} navLinks={links} />
    </>
  );
};

const StoriesHero = ({ data }) => {
  const { image } = data;
  return (
    <section className="hero__box">
      <picture className="hero__img">
        <source srcSet={image.mobile} media="(max-width: 23.4em)" />
        <source srcSet={image.tablet} media="(max-width: 48em)" />
        <source srcSet={image.desktop} media="(max-width: 90em)" />
        <img src={image.desktop} alt="hero" />
      </picture>

      <div className="hero__text-box">
        <h4 className="hero__heading-small">
          Last month&apos;s featured story
        </h4>
        <h1 className="hero__heading-main">Hazy full moon of appalachia</h1>
        <div className="date__box">
          <p className="date">March 2nd 2020</p>
          <strong> by John Appleseed</strong>
        </div>
        <p className="hero__text">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called &quot;mountains&quot; mountains
          especially in eastern Kentucky and West Virginia, and while the ridges
          are not high, the terrain is extremely rugged.
        </p>
        <div className="link--box">
          <p className="hero__read">Read the story</p>
          <svg
            width="42"
            height="14"
            viewBox="0 0 42 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 7H41.864" stroke="white" />
            <path d="M35.4282 1L41.4282 7L35.4282 13" stroke="white" />
          </svg>
        </div>
      </div>
    </section>
  );
};

const StoriesSection = ({ data }) => {
  return (
    <section className="stories__section">
      {data.map((obj) => {
        return <StoryComponent showDate obj={obj} key={obj.id} />;
      })}
    </section>
  );
};

export default StoriesPage;
