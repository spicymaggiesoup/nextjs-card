import { useState } from "react";

export const useModalMap = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const showMapModal = () => {
    setIsMapModalOpen(true)
  }

  const closeMapModal = () => {
    setIsMapModalOpen(false)
  }
  return {
    isMapModalOpen, showMapModal, closeMapModal
  }
}