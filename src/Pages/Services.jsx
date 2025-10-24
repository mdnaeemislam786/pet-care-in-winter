import React, { useEffect, useState } from "react";
import ServiceCartModal from "../Components/ServiceCartModal";
import LoadingPage from "../Components/LoadingPage";

const Services = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <ServiceCartModal />
    </>
  );
};

export default Services;
