import React, { useState } from "react";
import PageBanner from "../components/Common/PageBanner";

const Faq = ({ data }) => {
  const [clicked, setClicked] = useState(null);

  const toggle = (index) => {
    if (clicked === index) {
      setClicked(null); // Collapse the current FAQ if it's already expanded
    } else {
      setClicked(index); // Expand the clicked FAQ
    }
  };

  return (
    <>
      <PageBanner bannerTitle="Faq" pageName="Faq" />

      <section className="faq-wrap pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title style4 mb-40 text-center">
                <span>FAQ</span>
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="tour-faq">
                <div className="accordion" id="accordionExample">
                  {data.map((faq, index) => (
                    <div
                      className="accordion-item"
                      onClick={() => toggle(index)}
                      key={index} // Adding key for each FAQ item
                    >
                      <h2 className="accordion-header" id={`heading${index}`}>
                        <button
                          className={`accordion-button ${clicked === index ? '' : 'collapsed'}`}
                          type="button"
                          aria-expanded={clicked === index ? 'true' : 'false'}
                        >
                          {faq.question}
                        </button>
                      </h2>

                      <div
                        id={`collapse${index}`}
                        className={`accordion-collapse ${clicked === index ? 'show' : 'collapse'}`}
                        aria-labelledby={`heading${index}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Faq.defaultProps = {
  data: [
    {
      question: "What is internationalairporttransfers.com",
      answer:
        "internationalairporttransfers.com is a company transfer in Punta Cana area, one of the best transportation options in Punta Cana. We offer private transportation services for added convenience and comfort.",
    },
    {
      question: "Where is Punta Cana located?",
      answer:
        "Punta Cana is located on the east of the island, in the Dominican Republic, known for its beautiful beaches and resorts all inclusive.",
    },
    {
      question: "When is the best time to visit Punta Cana?",
      answer:
        "The best time to visit Punta Cana is from December to April when the weather is most pleasant and dry.",
    },
    {
      question: "Do I need a visa to visit Punta Cana?",
      answer:
        "This depends on your nationality. Visitors from many countries do not require a visa for short stays. Check with your local Dominican Republic embassy for specific requirements.",
    },
    {
      question: "What should I pack for my trip to Punta Cana?",
      answer:
        "Pack lightweight clothing, swimwear, sunscreen, insect repellent, and any necessary medications. Don’t forget your travel documents and comfortable footwear for excursions.",
    },
    {
      question: "What types of accommodations are available in Punta Cana?",
      answer:
        "Punta Cana offers a wide range of accommodations, from luxury resorts and all-inclusive hotels to budget-friendly hostels and vacation rentals.",
    },
    {
      question: "How can I book a transfer through internationalairporttransfers.com",
      answer:
        "You can browse our website at internationalairporttransfers.com or contact our customer service for personalized assistance.",
    },
    {
      question: "What activities are available in Punta Cana?",
      answer:
        "Activities include boat trips, buggy rides, cultural tours, and exploring nearby islands and natural parks.",
    },
    {
      question: "How can I book excursions through internationalairporttransfers.com?",
      answer:
        "You can book by contacting us for custom packages at 809-343-3176.",
    },
    {
      question: "Is it safe to drive in Punta Cana?",
      answer:
        "While generally safe, driving in Punta Cana can be challenging due to local traffic conditions. We recommend using reputable transportation services if you're unfamiliar with the area.",
    },
    {
      question: "Are there any health concerns I should be aware of?",
      answer:
        "Stay updated on any travel advisories and health recommendations, such as vaccinations. Drink bottled water and protect yourself from mosquito bites.",
    },
    {
      question: "What should I do in case of an emergency?",
      answer:
        "In an emergency, dial 911 for local police, fire, or medical assistance. We also provide contact information for local hospitals and clinics on our website.",
    },
    {
      question: "How do I make a booking on internationalairporttransfers.com?",
      answer:
        "Select your desired service, fill out the booking form, and proceed to payment. We accept various payment methods, including credit cards and PayPal.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Our cancellation policy varies by service. Please refer to the specific terms and conditions provided during the booking process.",
    },
    {
      question: "How can I contact 809-343-3176?",
      answer:
        "You can reach us through our website contact form or call us directly at 809-343-3176.",
    },
  ],
};

export default Faq;
