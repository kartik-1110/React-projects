import React, { useState, useContext } from "react";

// setting up useContext
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // function to open sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  // function to close sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  // function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };
  // function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
