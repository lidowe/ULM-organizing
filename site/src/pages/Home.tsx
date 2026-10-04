import { Link } from "@tanstack/react-router";
import { Photo } from "@/components/media/Photo";
import { Brand } from "@/components/text/Brand";
import { BoothBoard } from "@/components/booths/BoothBoard";
import { Ribbon } from "@/components/credits/Ribbon";

export function HomePage() {
  return (
    <>
      <div>
        <section className="sheet">
          <div className="wrap sheet-inner">
            <p className="sheet-meta">
              <span>
                <b>ULM</b>
              </span>
              <span>Edward Lidow</span>
              <span>Est. 2014</span>
              <span>Columbia, South Carolina</span>
              <span>Remote audio solutions</span>
            </p>
            <figure className="plate opening-plate">
              <Photo
                name="ed-at-the-console"
                alt="Edward Lidow working at the console during a session"
                fetchPriority="high"
              />
            </figure>
            <h1 className="sheet-title sheet-title-md">
              The Industry is undergoing{" "}
              <Link to="/about" hash="industry">
                major key changes.
              </Link>
            </h1>
            <div className="sheet-intro">
              <p className="sheet-deck">
                <Brand>Upper Level Music</Brand> is an accessible solution to the modern changes in
                recording, as recording studios no longer serve the same function as they did from
                the 1970s through the early 2000s, as many romanticize. We are in an age where a
                recording studio practically fits in our back pocket.{" "}
                <Brand>Upper Level Music</Brand> sees that everyone has access to the tech now, so
                we’ve decided to leave the building behind. Many new avenues and reasons to record
                exist, and new equipment becomes more accessible, affordable, and more advanced
                every day. However, one major aspect got lost in this modern shift.{" "}
                <strong>The knowledge about audio didn’t come with the new equipment.</strong>
              </p>
              <div className="sheet-actions">
                <Link to="/contact" className="btn primary">
                  Talk to your audio team
                </Link>
                <a className="btn" href="#booths">
                  Choose your service
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <BoothBoard />
      <div>
        <section className="explore" id="explore">
          <div className="wrap">
            <div className="spread-head">
              <span className="spread-no">03 / Explore</span>
              <h2 className="spread-h">
                Explore <Brand>Upper Level Music</Brand> a little more.
              </h2>
            </div>
            <ol className="explore-grid">
              <li>
                <Link to="/the-gap" className="explore-btn">
                  <span className="explore-no">01</span>
                  <span className="explore-name">The Gap</span>
                  <span className="explore-desc">
                    Why <Brand>Upper Level</Brand> exists
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/process" className="explore-btn">
                  <span className="explore-no">02</span>
                  <span className="explore-name">Process</span>
                  <span className="explore-desc">How a project runs</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="explore-btn">
                  <span className="explore-no">03</span>
                  <span className="explore-name">Services</span>
                  <span className="explore-desc">What we do</span>
                </Link>
              </li>
              <li>
                <Link to="/education" className="explore-btn">
                  <span className="explore-no">04</span>
                  <span className="explore-name">Educational services</span>
                  <span className="explore-desc">One-on-one teaching</span>
                </Link>
              </li>
              <li>
                <Link to="/studio" className="explore-btn">
                  <span className="explore-no">05</span>
                  <span className="explore-name">Studio</span>
                  <span className="explore-desc">The room and the gear</span>
                </Link>
              </li>
              <li>
                <Link to="/work" className="explore-btn">
                  <span className="explore-no">06</span>
                  <span className="explore-name">Work</span>
                  <span className="explore-desc">Records and credits</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="explore-btn">
                  <span className="explore-no">07</span>
                  <span className="explore-name">About</span>
                  <span className="explore-desc">Who we are</span>
                </Link>
              </li>
            </ol>
          </div>
        </section>
        <section className="ribbon-strip">
          <div className="ribbon-track">
            <Ribbon />
          </div>
        </section>
        <section className="cta-section">
          <div className="wrap cta-inner">
            <div className="reveal">
              <h2>Start a conversation.</h2>
              <p>
                Describe the job in your own words. We review it and scope it before any work or
                price is agreed.
              </p>
              <p className="cta-close">
                <strong>
                  Wherever you are in your journey, you will have a focused team working for you.
                  Reach for the <Brand>Upper Level</Brand>, and we will give you a boost.
                </strong>
              </p>
            </div>
            <div className="cta-buttons reveal">
              <Link to="/contact" className="btn primary">
                Talk to your audio team
              </Link>
              <Link to="/services" className="btn">
                Choose your service
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
