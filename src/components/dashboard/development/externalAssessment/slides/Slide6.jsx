import React from "react";

const Slide6 = () => {
  return (
    <>
      {/* Slide 20 Starts */}
      <section className="w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative">
        <h2 className="slide-heading fw-semibold px-4">Disruption Strategy</h2>
        <div className="top-line my-3 mx-4"></div>
        <div className="px-5">
          <table class="table table-sm">
            <thead>
              <tr>
                <th className="border-0"></th>
                <th>Product Performance</th>
                <th>Target Customer</th>
                <th>Business Modal Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fw-bold">
                  Sustaining Innovations Incumbents typically win
                </td>
                <td>
                  Performance improvement in attributes most valued by the
                  industry's most demanding customers. These improvements may be
                  incremental or breakthrough in character.
                </td>
                <td>
                  The most attractive (i.e., profitable) customers in the
                  mainstream markets who are willing to pay for improved
                  performance.
                </td>
                <td>
                  Improves or maintains profit margins by exploiting the
                  existing processes and cost structure and by making better use
                  of current competitive advantages.
                </td>
              </tr>
              <tr>
                <td className="fw-bold">
                  Low-end Disruptions Entrants typically win
                </td>
                <td>
                  Performance that is good enough along the traditional metrics
                  of performance at the low-end of the mainstream market.
                </td>
                <td>
                  Over-served customers in the low-end of the mainstream market.
                </td>
                <td>
                  Utilizes a new operating or financial approach or both to earn
                  attractive returns at the discount prices required to win
                  business at the low- end of the market.
                </td>
              </tr>
              <tr>
                <td className="fw-bold">
                  New-market Disruptions Entrants typically win
                </td>
                <td>
                  Lower performance in “traditional” attributes, but improved
                  performance in new attributes-typically simplicity and
                  convenience.
                </td>
                <td>
                  Targets non- consumption: customers who historically lacked
                  the money or skill to buy and use the product.
                </td>
                <td>
                  Must make money at lower price per unit sold, and at unit
                  production volumes that initially will be small. Gross margin
                  dollars per unit sold will be significantly lower.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bottom-line mt-3"></div>
      </section>
      {/* Slide 20 Ends */}
    </>
  );
};

export default Slide6;
