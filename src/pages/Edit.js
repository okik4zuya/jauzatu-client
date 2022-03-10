import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  ButtonGroup,
  HStack,
} from "@chakra-ui/react";

//Import Edit Components
import EditTema from "../components/edit/EditTema";

function Edit() {
  const [isEdit, setIsEdit] = useState({
    tema: false,
  });
  return (
    <Container maxW='container.lg'>
      <Box>
        <div className='bg-blue-200 text-center text-xl font-bold py-4 font-montserrat'>
          Edit Undangan
        </div>
      </Box>
      <Box minH={50}></Box>
      <Box>
        <Accordion defaultIndex={[0]} allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  Tema
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <HStack className='pt-4'>
                <Box className='w-[100px]'>Slug</Box>
                <Box>:</Box>
                <Box>slug</Box>
              </HStack>
              <HStack className='pt-4'>
                <Box className='w-[100px]'>Tema</Box>
                <Box>:</Box>
                <Box>slug</Box>
              </HStack>
              <Center className='pt-4'>
                <Button>Update</Button>
              </Center>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Container>
  );
}

export default Edit;
