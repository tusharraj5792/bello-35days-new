import React from "react";
import ProtectedRoutes from "../../protectedRoutes";
import Header from "../header";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../dashboard/home";
import Sidebar from "../sidebar";
import Introduction from "../dashboard/mobilization/introduction";
import ConfirmMission from "../dashboard/mobilization/confirmMission";
import "../layout/layout.css";
import { InternalAssessment } from "../dashboard/development/internalAssessment";
import { ExternalAssessment } from "../dashboard/development/externalAssessment";
import { ProductFit } from "../dashboard/development/Product-fit";
import { DefineValue } from "../dashboard/development/defineValue";
import { ProblemSolutionFit } from "../dashboard/development/problemSolutionFit";
import { PrimaryCustomer } from "../dashboard/development/primaryCustomer";
import { ValueDrivers } from "../dashboard/development/valueDrivers";
import Execution from "../dashboard/execution/executionandMonititoring";
import { ValueMap } from "../dashboard/development/valueMap";
import { StrategyReview } from "../dashboard/review/strategyReview";
import { StrategyMap } from "../dashboard/development/strategyMap";

const MainLayoutRoutes = () => {
  const location = useLocation();

  return (
    <div>
      <Header />
      <div>
        {location.pathname !== "/" && (
          <div className="main-wrapper">
            <div className="container-fluid">
              <div className="row flex-nowrap">
                <Sidebar />
                <div className="col py-3 main-content">
                  <Routes>
                    <Route path="/" element={<ProtectedRoutes />}>
                      <Route
                        path="/mobilization/introduction"
                        element={<Introduction />}
                      />
                      <Route
                        path="/mobilization/confirm-mission"
                        element={<ConfirmMission />}
                      />
                      <Route
                        path="/development/internal-assessment"
                        element={<InternalAssessment />}
                      />
                      <Route
                        path="/development/external-assessment"
                        element={<ExternalAssessment />}
                      />
                      <Route
                        path="/development/Product-fit"
                        element={<ProductFit />}
                      />
                      <Route
                        path="/development/define-Value"
                        element={<DefineValue />}
                      />
                      <Route
                        path="/development/problem-fit"
                        element={<ProblemSolutionFit />}
                      />
                      <Route
                        path="/development/primary-customer"
                        element={<PrimaryCustomer />}
                      />
                      <Route
                        path="/development/value-drivers"
                        element={<ValueDrivers />}
                      />
                      <Route
                        path="/execution/execution-monititoring"
                        element={<Execution />}
                        />
                      <Route path="/development/value-map"
                        element={<ValueMap />}
                      />
                      <Route path="/development/strategy-map"
                        element={<StrategyMap />}
                      />
                      <Route
                        path="/review/strategy-review"
                        element={<StrategyReview />}
                      />
                    </Route>
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        )}
        <div>
          <Routes>
            <Route path="/" element={<ProtectedRoutes />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MainLayoutRoutes;
