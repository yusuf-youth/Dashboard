import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";
import { ROUTES } from "../../script/constants";

function Content() {
  return (
    <div className="content">
      <Routes>
        {ROUTES.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default Content;
