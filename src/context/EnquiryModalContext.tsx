import React, { createContext, useContext, useState } from 'react';

interface EnquiryModalContextValue {
  isOpen: boolean;
  selectedRoomType?: string;
  openEnquiryModal: (roomType?: string) => void;
  closeEnquiryModal: () => void;
}

const EnquiryModalContext = createContext<EnquiryModalContextValue | undefined>(undefined);

export const EnquiryModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoomType, setSelectedRoomType] = useState<string | undefined>(undefined);

  const openEnquiryModal = (roomType?: string) => {
    setSelectedRoomType(roomType);
    setIsOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsOpen(false);
    setSelectedRoomType(undefined);
  };

  return (
    <EnquiryModalContext.Provider
      value={{
        isOpen,
        selectedRoomType,
        openEnquiryModal,
        closeEnquiryModal
      }}
    >
      {children}
    </EnquiryModalContext.Provider>
  );
};

export function useEnquiryModal(): EnquiryModalContextValue {
  const context = useContext(EnquiryModalContext);
  if (!context) {
    throw new Error('useEnquiryModal must be used within an EnquiryModalProvider');
  }
  return context;
}
