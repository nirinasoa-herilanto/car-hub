import { useState } from 'react';

export interface IAppUIStore {
  showModal: boolean;
  displayModalHandler: () => void;
}

/**
 * use to handle all App UI store
 */
const useAppUIStore = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const displayModalHandler = () => setShowModal((prev) => !prev);

  return {
    showModal,
    displayModalHandler,
  } as IAppUIStore;
};

export default useAppUIStore;
