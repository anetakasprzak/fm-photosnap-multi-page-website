import "./PricingPage.css";

import { links, pricingCardData, socialLinksData } from "../../Data";
import NavBar from "../NavBar/NavBar";
import { ctaImg, pricingHero } from "../../Data";

import CtaComponent from "../CtaComponent/CtaComponent";
import FooterSection from "../Footer/Footer";
import { useLayoutEffect, useState } from "react";

const PricingPage = () => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <NavBar />
      <HeroSection data={pricingHero} />
      <CardsSection data={pricingCardData} />
      <CompareSection />
      <CtaComponent data={ctaImg} />
      <FooterSection data={socialLinksData} navLinks={links} />
    </>
  );
};

const HeroSection = ({ data }) => {
  const { image } = data;

  return (
    <div className="hero-section">
      <div className="text__box">
        <h1 className="heading">Pricing</h1>
        <p className="section__text">
          Create a your stories, Photosnap is a platform for photographers and
          visual storytellers. It’s the simple way to create and share your
          photos.
        </p>
      </div>
      <picture className="hero--img">
        <source srcSet={image.mobile} media="(max-width: 23.4em)" />
        <source srcSet={image.tablet} media="(max-width: 47.8em)" />
        <source srcSet={image.desktop} media="(max-width: 90em)" />
        <img src={image.desktop} alt="image" />
      </picture>
    </div>
  );
};

const CardsSection = ({ data }) => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="pricing__box">
      <div className="toggle__box">
        <span
          className={`text ${
            isMonthly ? "toggle__text--black" : "toggle__text--grey"
          } `}
        >
          Monthly
        </span>
        <label className="switch">
          <input type="checkbox" onChange={() => setIsMonthly(!isMonthly)} />
          <span className="slider round"></span>
        </label>
        <span
          className={`text ${
            !isMonthly ? "toggle__text--black" : "toggle__text--grey"
          } `}
        >
          Yearly
        </span>
      </div>

      <section className="cards__section">
        {data.map((obj) => {
          return <PricingCard isMonthly={isMonthly} obj={obj} key={obj.id} />;
        })}
      </section>
    </div>
  );
};

const PricingCard = ({ obj, isMonthly }) => {
  const { title, text, priceYear, priceMonth, id } = obj;
  return (
    <div className={`pricing__card pricing__card--${id}`}>
      <div className="card__text--box">
        <h4 className="card__heading">{title}</h4>
        <p className="text card__text">{text}</p>
      </div>
      <div className="card__price--box">
        {isMonthly && (
          <>
            <div className="card__price">{priceMonth}</div>
            <span className="text card__text">per month</span>{" "}
          </>
        )}

        {!isMonthly && (
          <>
            <div className="card__price">{priceYear}</div>
            <span className="text card__text">per year</span>
          </>
        )}
      </div>
      <button className={`card__btn card__btn--${id}`}>Pick plan</button>
    </div>
  );
};

const CompareSection = () => {
  return (
    <div className="compare__section">
      <h1 className="compare__heading">COMPARE</h1>

      <table className="table">
        <tr className="table__head">
          <th className="table__text text__position">The features</th>
          <th className="table__text">Basic</th>
          <th className="table__text">Pro</th>
          <th className="table__text">Business</th>
        </tr>
        <tr>
          <td className="table__text">Unlimited story posting</td>
          <td>
            <img
              className="table__check"
              src="./assets/pricing/desktop/check.svg"
              alt="check"
            />
          </td>
          <td>
            {" "}
            <img
              className="table__check"
              src="./assets/pricing/desktop/check.svg"
              alt="check"
            />
          </td>
          <td>
            {" "}
            <img
              className="table__check"
              src="./assets/pricing/desktop/check.svg"
              alt="check"
            />
          </td>
        </tr>
        <tr>
          <td className="table__text">Unlimited photo upload</td>
          <td>
            {" "}
            <img
              className="table__check"
              src="./assets/pricing/desktop/check.svg"
              alt="check"
            />
          </td>
          <td>
            {" "}
            <img
              className="table__check"
              src="./assets/pricing/desktop/check.svg"
              alt="check"
            />
          </td>
          <td>
            {" "}
            <img
              className="table__check"
              src="./assets/pricing/desktop/check.svg"
              alt="check"
            />
          </td>
        </tr>
        <tr>
          <td className="table__text">Embedding custom content</td>
          <td> </td>
          <td>
            {" "}
            <img
              className="table__check"
              src="./assets/pricing/desktop/check.svg"
              alt="check"
            />
          </td>
          <td>
            {" "}
            <img
              className="table__check"
              src="./assets/pricing/desktop/check.svg"
              alt="check"
            />
          </td>
        </tr>
        <tr>
          <td className="table__text">Customize metadata</td>
          <td> </td>
          <td>
            {" "}
            <img
              className="table__check"
              src="./assets/pricing/desktop/check.svg"
              alt="check"
            />
          </td>
          <td>
            {" "}
            <img
              className="table__check"
              src="./assets/pricing/desktop/check.svg"
              alt="check"
            />
          </td>
        </tr>
        <tr>
          <td className="table__text">Advanced metrics</td>
          <td> </td>
          <td> </td>
          <td>
            {" "}
            <img
              className="table__check"
              src="./assets/pricing/desktop/check.svg"
              alt="check"
            />
          </td>
        </tr>
        <tr>
          <td className="table__text">Photo downloads</td>
          <td> </td>
          <td> </td>
          <td>
            {" "}
            <img
              className="table__check"
              src="./assets/pricing/desktop/check.svg"
              alt="check"
            />
          </td>
        </tr>
        <tr>
          <td className="table__text">Search engine indexing</td>
          <td> </td>
          <td> </td>
          <td>
            {" "}
            <img
              className="table__check"
              src="./assets/pricing/desktop/check.svg"
              alt="check"
            />
          </td>
        </tr>
        <tr>
          <td className="table__text">Custom analytics</td>
          <td> </td>
          <td> </td>
          <td>
            {" "}
            <img
              className="table__check"
              src="./assets/pricing/desktop/check.svg"
              alt="check"
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default PricingPage;
