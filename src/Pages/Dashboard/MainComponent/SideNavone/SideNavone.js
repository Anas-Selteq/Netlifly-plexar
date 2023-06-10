import React from "react";
import SideNavtwo from "../SideNavtwo/SideNavtwo";
import "../dashboard.scss";

function SideNavone() {
  return (
    <div className="col-md-12 px-0 overflow_main_dashboard">
      <div className="d-flex">
        <div className=" side_nav_main_1">
          <div className="py-4">.</div>
          <div className="py-3">1</div>
        </div>
        <div className="side_nav_1_right">
          <div className="col-md-12 pt-1 pb-2 background_nav1_header">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-3 margin_left_m3">
                    <img
                      className="img-fluid"
                      src="../images/plexar/logoheader.png"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-right col6section m-auto">
                Welcome
              </div>
            </div>
          </div>
          <div className="col-md-12 pt-2 py-3 background_sidenav_one ">
            <SideNavtwo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNavone;
