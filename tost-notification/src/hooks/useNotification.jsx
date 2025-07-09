import React, { useEffect, useRef, useState } from "react";
import Notification from "../component/tost-notification/Notification";

function useNotification() {
  const [showNotification, setShowNotification] = useState(null);
  const notificationRef = useRef();

  const triggerTost = ({ delay, type, msg }) => {
    setShowNotification({ type, msg });
    notificationRef.current = setTimeout(() => {
      clearTimeout(notificationRef.current);
      setShowNotification(null);
    }, delay);
  };

  const cancelTost = () => {
    setShowNotification(null);
  };

  useEffect(() => {
    return clearTimeout(notificationRef.current);
  }, []);

  const Tost = (props) => {
    return (
      <>
        {showNotification ? (
          <Notification
            cancelTost={cancelTost}
            {...showNotification}
            {...props}
          />
        ) : null}
      </>
    );
  };

  return { Tost, triggerTost, cancelTost };
}

export default useNotification;
