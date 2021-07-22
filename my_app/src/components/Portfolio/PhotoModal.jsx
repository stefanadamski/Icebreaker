import {
    ModalProvider,
    Modal,
    useModal,
    ModalTransition,
} from 'react-simple-hook-modal';
import 'react-simple-hook-modal/dist/styles.css';
import {Carousel} from "./Carousel";

export const PhotoModal = (props) => {
    const { isModalOpen, openModal, closeModal } = useModal();
    return (
        <ModalProvider>
            <button className='btn-custom portfolio-button' onClick={openModal}> Więcej </button>
            <Modal
                id="any-unique-identifier"
                isOpen={isModalOpen}
                transition={ModalTransition.BOTTOM_UP}
            >
                <Carousel/>
                <button className='btn-custom portfolio-button' onClick={closeModal}> Zamknij </button>
            </Modal>
        </ModalProvider>
    );
};


