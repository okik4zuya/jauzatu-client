import React, { useState } from "react";
import {
  Container,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function DeleteConfirmModal(props) {
  const { id, isOpen, onClose, value, setValue } = props;
  const [editMode, setEditMode] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior='outside' size='xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className='text-center font-bold font-montserrat text-2xl'>
          Hapus Undangan "{value.slug}"
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container maxW='container.lg'>
            <div>Apakah anda yakin akan menghapus undangan </div>
          </Container>
        </ModalBody>

        <ModalFooter>
          <Button bg='darkgoldenrod' textColor='white' mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DeleteConfirmModal;
