import React, { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader"; // Make sure the path is correct for PropagateLoader

function OrderPlaced() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center h-screen items-center">
        {loading ? (
          <PropagateLoader size={15} /> // Show loader when loading is true
        ) : (
          <>
            <h1 className="font-bold text-3xl">Order successful</h1>
            <p>Order has been placed successfully</p>
          </>
        )}
      </div>
    </div>
  );
}

export default OrderPlaced;
