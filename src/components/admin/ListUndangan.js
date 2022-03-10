import React, { useState } from "react";
import { useDisclosure, Container, HStack, Box } from "@chakra-ui/react";

import ItemUndangan from "./ItemUndangan";

export default function ListUndangan(props) {
  const { invitations, fetchInvitations } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState({});

  const getInvitation = (id) => {
    const newInv = invitations.filter((inv) => {
      return inv._id === id;
    })[0];
    setValue(newInv);
    fetchInvitations();
  };

  const deleteInvitation = async (id) => {
    await fetch(`https://jauzatuapi.herokuapp.com/invitations/${id}`, {
      method: "DELETE",
    });
    fetchInvitations();
  };

  const items = invitations.map((inv) => (
    <ItemUndangan
      inv={inv}
      value={value}
      setValue={setValue}
      getInvitation={getInvitation}
      deleteInvitation={deleteInvitation}
      fetchInvitations={fetchInvitations}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      key={inv._id}
    />
  ));

  return (
    <Container className='bg-yellow-100 border-4 border-gold py-10 mt-10  rounded-lg'>
      <HStack
        className=' font-semibold text-lg font-montserrat pt-4 mb-4 rounded-lg'
        bg='darkgoldenrod'
      >
        <Box className='sm:w-[200px] w-1/2 h-[50px]  relative text-center text-white'>
          Slug
        </Box>
        <Box className='sm:w-[200px] w-1/2 h-[50px]  relative text-center  text-white'>
          Aksi
        </Box>
      </HStack>
      {items}
    </Container>
  );
}
