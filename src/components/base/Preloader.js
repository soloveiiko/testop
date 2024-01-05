"use client";
import { useEffect, useRef, useState } from "react";
import { Router } from "next/router";

export default function Preloader() {
  const [isLoading, setLoading] = useState(false);
  const preloaderRef = useRef();
  // const preloader = usePreloaderStore();
  console.log("preloader", isLoading);
  useEffect(() => {
    const start = () => {
      setLoading(true);
      // preloaderRef.current.style.zIndex = "100";
    };
    const end = () => {
      setLoading(false);
      // preloaderRef.current.style.zIndex = "-1";
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <div ref={preloaderRef} className="preloader  text">
      Loading...
    </div>
  );
}
