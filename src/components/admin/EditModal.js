import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
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
import EditTema from "../edit/EditTema";
import EditMempelai from "../edit/EditMempelai";
import EditAcara from "../edit/EditAcara";
import EditTeks from "../edit/EditTeks";

function EditModal(props) {
  const { id, isOpen, onClose, value, setValue } = props;
  const [editMode, setEditMode] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior='outside' size='xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className='text-center font-bold font-montserrat text-2xl'>
          Edit Undangan "{value.slug}"
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container maxW='container.lg'>
            <Accordion defaultIndex={[0]} allowToggle>
              {/*Awal Edit Tema*/}
              <AccordionItem>
                <h2>
                  <AccordionButton bg='darkgoldenrod' textColor='white'>
                    <Box flex='1' textAlign='left'>
                      Tema
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <EditTema
                    editMode={editMode}
                    setEditMode={setEditMode}
                    value={value}
                    setValue={setValue}
                  />
                </AccordionPanel>
              </AccordionItem>
              {/*Akhir Edit Tema*/}

              {/*Awal Edit Mempelai*/}
              <AccordionItem>
                <h2>
                  <AccordionButton bg='darkgoldenrod' textColor='white'>
                    <Box flex='1' textAlign='left'>
                      Mempelai
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <EditMempelai
                    editMode={editMode}
                    setEditMode={setEditMode}
                    value={value}
                    setValue={setValue}
                  />
                </AccordionPanel>
              </AccordionItem>
              {/*Akhir Edit Mempelai*/}

              {/*Awal Edit Acara*/}
              <AccordionItem>
                <h2>
                  <AccordionButton bg='darkgoldenrod' textColor='white'>
                    <Box flex='1' textAlign='left'>
                      Acara
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <EditAcara
                    editMode={editMode}
                    setEditMode={setEditMode}
                    value={value}
                    setValue={setValue}
                  />
                </AccordionPanel>
              </AccordionItem>
              {/*Akhir Edit Acara*/}

              {/*Awal Edit Teks*/}
              <AccordionItem>
                <h2>
                  <AccordionButton bg='darkgoldenrod' textColor='white'>
                    <Box flex='1' textAlign='left'>
                      Teks
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <EditTeks
                    editMode={editMode}
                    setEditMode={setEditMode}
                    value={value}
                    setValue={setValue}
                  />
                </AccordionPanel>
              </AccordionItem>
              {/*Akhir Edit Teks*/}
            </Accordion>
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

export default EditModal;
