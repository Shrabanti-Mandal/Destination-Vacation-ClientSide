import React from "react";
import "./Question.css";
const Question = () => {
  return (
    <div>
      <div className="container question-box p-5 m-3">
        <h1 className="text-success m-3 bg-transparent">
          Frequently Asked Questions
        </h1>
        <div class="accordion " id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button
                  class="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What do I need to bring with me to pick up my car rental?
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                Please bring the following items with you when you pick up your
                car rental: 1. Your printed rental voucher. 2. A valid driver's
                license which has been valid for the required period of time.
                (The length of the required period of time may vary according to
                the rental supplier. If the rental supplier does not state a
                specific period of time which the license must have been valid
                for, then the default required period of time is one year.) If
                your driver's license is in a different language to the language
                of the country of use, a translated copy of your license that
                meets local requirements must be provided. 3. The credit card
                provided by the main driver must have sufficient payment credit.
                At pick-up, a preauthorization fee will be taken as deposit. 4.
                A valid photo ID (your passport or other internationally
                accepted ID). Important: Ensure you carefully read the terms and
                conditions provided by your rental supplier, and bring any
                additional items or documents required by your rental supplier.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Can I rent a car without a credit card?
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                A credit card is required for car rentals. A credit card must be
                used for car rental online payments, and is required to pay the
                deposit at pick-up.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Do I need to pay a deposit at pick-up?
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                Yes, you need to pay a deposit at pick-up to protect against
                damage and loss. The deposit is payable when you arrive at the
                branch for pick-up. The deposit amount is decided by the rental
                supplier; please contact your rental supplier directly if you
                have any related queries. The deposit amount will be frozen on
                the main driver's credit card for the duration of the rental
                period. After the rental period is completed, the deposit will
                usually be returned to the same credit card within 28–45 working
                days. Actual policies and practices may vary according to the
                rental supplier.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingFore">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFore"
                  aria-expanded="false"
                  aria-controls="collapseFore"
                >
                  How can I view the rental supplier's terms and conditions?
                </button>
              </h5>
            </div>
            <div
              id="collapseFore"
              class="collapse"
              aria-labelledby="headingFore"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                You can use the following methods to view the supplier terms and
                conditions: 1. After you select a car, you can view the supplier
                terms and conditions on driver details entry page. 2. After you
                make a booking online, you can view the supplier terms and
                conditions on the booking details page. 3. After you make a
                booking online, we will send you a confirmation email. You can
                view some supplier terms and conditions on the rental voucher
                included in the email.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingFive">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  How can I modify a booking?
                </button>
              </h5>
            </div>
            <div
              id="collapseFive"
              class="collapse"
              aria-labelledby="headingFive"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                To modify a booking: 1. After booking online, you will receive a
                confirmation email. Select "Manage My Booking" then select
                "Modify Booking" on the booking details page. 2. On the Trip.com
                website: - If you are not signed in, you can click "Search
                Bookings" and enter the email used to make the booking. Once the
                email has been verified, you will be able to see all bookings
                under that email. Select the booking you want to modify, and
                select "Modify Booking" on the booking details page. - If you
                are signed in, go to "Account" "My Bookings". Select the booking
                you want to modify, and select "Modify Booking" on the booking
                details page. 3. On the Trip.com app: - If you are not signed
                in, tap "Account" "Search Bookings" and enter the email used to
                make the booking. Once the email has been verified, you will be
                able to see all the bookings under that email. Select the
                booking you want to modify, and select "Modify Booking" on the
                booking details page. - If you are signed in, tap "Account" "All
                Bookings", or "Car Rentals" "My Bookings". Select the booking
                you want to modify, and select "Modify Booking" on the booking
                details page.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingSix">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  Is there a charge for canceling my booking?
                </button>
              </h5>
            </div>
            <div
              id="collapseSix"
              class="collapse"
              aria-labelledby="headingSix"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                In most cases, no fee is charged for canceling your booking.
                However, some suppliers may only offer free cancellation within
                a specified time period, and charge to cancel bookings outside
                of that time period. Please ensure you read the booking terms
                and conditions carefully, as rental suppliers may have
                independent cancellation policies.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingSeven">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  How long do I have to wait to receive my refund after I cancel
                  my booking?
                </button>
              </h5>
            </div>
            <div
              id="collapseSeven"
              class="collapse"
              aria-labelledby="headingSeven"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                Your refund will usually take between 7–30 working days to
                arrive in your bank account. This time period may vary according
                to your bank processing time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
