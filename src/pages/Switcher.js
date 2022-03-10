import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Home, Admin, Edit, Loading, PageNotFound } from "./";

//Import Tema
import ThemeSnowClean from "../themes/ThemeSnowClean";

export default function Switcher() {
  const global = useSelector((state) => state.global.value);
  const currentURL = window.location.pathname.slice(1);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchInvitations = async () => {
      const response = await fetch(
        "https://jauzatuapi.herokuapp.com/invitations"
      );
      const invitations = await response.json();
      setData({
        ...invitations.filter(
          (invitation) => invitation.slug === currentURL
        )[0],
      });
    };
    fetchInvitations();
  }, []);

  switch (data.tema) {
    case "Tema Snow Clean":
      return <ThemeSnowClean data={data} />;
      break;

    default:
      if (currentURL === "") {
        return <Home />;
      } else if (currentURL === "edit") {
        return <Edit />;
      } else if (currentURL === "admin") {
        return <Admin />;
      } else if (global.loading) {
        return <Loading />;
      } else if (!data.length) {
        return <PageNotFound />;
      }
      return <PageNotFound />;
      break;
  }
}
