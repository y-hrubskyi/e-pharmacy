import { useEffect, useState } from "react";

import API from "#services/axios";

import * as SC from "./DashboardPage.styled";

const DashboardPage = () => {
  const [dashboardInfo, setDashboardInfo] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await API.get("/dashboard");
        setDashboardInfo(data);
      } catch (error) {
        //
      }
    })();
  }, []);

  return <SC.PageWrapper></SC.PageWrapper>;
};

export default DashboardPage;
