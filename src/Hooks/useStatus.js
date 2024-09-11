import { useEffect, useState } from "react";
export const useStatus = () => {
  const [status, setStstua] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setStstua(false);
    });

    window.addEventListener("online", () => {
      setStstua(true);
    });
  }, []);

  return status;
};
