import { createContext, useState } from "react";

export const AppContext = createContext({
  isOverlayVisible: null,
  isAddTaskModalVisible: null,
  toggleOverlay: () => null,
  setAddTaskModalVisible: () => null,
  setOverlayVisible: () => null,
  isInviteModalVisible: null,
  setInviteModalVisible: () => null
});

export function AppContextProvider({ children }) {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isAddTaskModalVisible, setAddTaskModalVisible] = useState(false);
  const [isInviteModalVisible, setInviteModalVisible] = useState(false);

  function toggleOverlay() {
    setOverlayVisible((value) => !value);
  }

  return (
    <AppContext.Provider
      value={{
        isOverlayVisible,
        setOverlayVisible,
        toggleOverlay,
        isAddTaskModalVisible,
        setAddTaskModalVisible,
        isInviteModalVisible,
        setInviteModalVisible,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
