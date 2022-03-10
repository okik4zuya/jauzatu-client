import React from "react";
import { HStack, Box, Button, ButtonGroup } from "@chakra-ui/react";
import EditModal from "./EditModal";
import DeleteConfirmModal from "./DeleteConfirmModal";

function ItemUndangan(props) {
  const {
    id,
    inv,
    value,
    setValue,
    getInvitation,
    isOpen,
    onOpen,
    onClose,
    deleteInvitation,
  } = props;

  const handleOpenEditModal = () => {
    getInvitation(inv._id);
    onOpen();
  };

  const handleDelete = () => {
    deleteInvitation(inv._id);
  };

  return (
    <HStack key={inv._id}>
      <Box className='sm:w-[200px] w-1/2 h-[50px]  relative'>
        <Box className='pl-4 absolute top-1/2 w-full transform -translate-y-1/2 left-1/2 -translate-x-1/2 font-semibold text-lg font-montserrat'>
          {inv.slug}
        </Box>
      </Box>
      <Box className='w-1/2 h-[50px] relative'>
        <Box className='sm:w-[200px] w-full top-1/2 absolute transform -translate-y-1/2 left-1/2 -translate-x-1/2 text-center '>
          <ButtonGroup>
            <Button
              bg='darkgoldenrod'
              textColor='white'
              onClick={handleOpenEditModal}
              key='xl'
            >
              Edit
            </Button>
            <EditModal
              id={inv._id}
              value={value}
              setValue={setValue}
              isOpen={isOpen}
              onClose={onClose}
              inv={inv}
            ></EditModal>
            <Button bg='darkgoldenrod' textColor='white' onClick={handleDelete}>
              Delete
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </HStack>
  );
}

export default ItemUndangan;
