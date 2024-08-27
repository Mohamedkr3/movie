import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export const Countup = () => {
  const [counter, setCounter] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
      >
        <section className="countup my-5 py-5">
          <div className="overlay"></div>
          <div className="container ">
            <div className="row">
              <div className="col-lg-4 col-sm-6 counter-container">
                <div className="count-info text-center text-white position-relative py-5">
                  <h3>
                    {counter && <CountUp start={0} end={973} duration={5} delay={0} />}+
                  </h3>
                  <h2 className="fw-bold">Movies</h2>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 counter-container">
                <div className="count-info text-center text-white position-relative py-5">
                  <h3>
                    {counter && <CountUp start={0} end={852} duration={5} delay={0} />}+
                  </h3>
                  <h2 className="fw-bold">Tv Show</h2>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 counter-container">
                <div className="count-info text-center text-white position-relative py-5">
                  <h3>
                    {counter && <CountUp start={0} end={1270} duration={5} delay={0} />}+
                  </h3>
                  <h2 className="fw-bold">Users</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollTrigger>
    </>
  );
};
