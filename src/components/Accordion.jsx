import React from 'react';
import './Accordion.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Accordion = () => {
  return (
    <div className="Accordionn">
      <div className="container">
        <div className="row">
          <div className="accord-left-side col-12 col-md-6">
            <h1 className='text-start faceskin'>
              Frequently asked <br /> questions
            </h1>
            <p className='text-start sitamet'>
              Frequently asked questions ordered by popularity. <br />
              Remember that if the visitor has not committed to the call <br />
              to action, they may still have questions (doubts) that can be <br />
              answered.
            </p>
            <button className='shop text-white pt-2 text-center contactuss'>Contact us</button>
          </div>
          <div className="accord-right-side col-12 col-md-6 my-5">
            <div className="accrd">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item my-4">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Are the fragrances in your products natural and safe?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>Yes, all the fragrances used in our products are natural and safe for all skin types.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item my-4">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Are Beautico products vegan?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>Yes, all Beautico products are 100% vegan and cruelty-free.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item my-4">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What are the expiry dates for Beautico products?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>Each product has an expiry date printed on the packaging. Generally, our products have a shelf life of 24 months.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item my-4">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Is your packaging environmentally friendly?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>We use eco-friendly packaging materials that are recyclable and biodegradable.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item my-4">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Does Beautico products give me an allergic reaction?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>Our products are dermatologically tested to ensure they are safe for all skin types. However, if you have specific allergies, please consult with a healthcare professional before use.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
