import { message } from "antd";
import { useCallback } from "react";

const useCustomMessage = () => {
  const showMessage = useCallback((type: string, msg: string) => {
    switch (type) {
      case "success":
        message.success(msg);
        break;
      case "error":
        message.error(msg);
        break;
      case "info":
        message.info(msg);
        break;
      default:
        message.info(msg);
    }
  }, []);

  const showSuccess = useCallback(
    (msg: string) => showMessage("success", msg),
    [showMessage]
  );
  const showError = useCallback(
    (msg: string) => showMessage("error", msg),
    [showMessage]
  );
  const showInfo = useCallback(
    (msg: string) => showMessage("info", msg),
    [showMessage]
  );

  return { showSuccess, showError, showInfo };
};

export default useCustomMessage;
