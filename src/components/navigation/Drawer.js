import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Image,
} from "@chakra-ui/react";

export default function MenuDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <div
        ref={btnRef}
        onClick={onOpen}
        className='bg-teal-600 px-4 py-2 sm:px-8 sm:py-4 text-white font-monserrat font-semibold rounded-xl text-xl first-letter:sm:text-2xl cursor-pointer hover:bg-teal-500 transform hover:translate-y-0.5 hover:translate-c-0.5'
      >
        Menu
      </div>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <div className='relative'>
          <DrawerContent>
            <DrawerCloseButton />

            <div className='text-center relative'>
              <DrawerHeader>
                <div className='absolute transform  left-1/2 -translate-x-1/2'>
                  <Image
                    boxSize='50px'
                    src='https://jauzatu.netlify.app/logo-jauzatu-gold.png'
                    alt=''
                  />
                </div>
              </DrawerHeader>
            </div>
            <div className='relative top-[70px]'>
              <DrawerBody>
                <div className='text-center text-montserrat text-xl text-gold font-semibold mb-2'>
                  <a href='https://jauzatu.netlify.app/'>Home</a>
                </div>
                <div className='text-center text-montserrat text-xl text-gold font-semibold mb-2'>
                  <a href='https://jauzatu.netlify.app/admin'>Admin</a>
                </div>
              </DrawerBody>
            </div>

            {/*
           <div className='absolute bottom-[100px]'>
              <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='blue'>Save</Button>
              </DrawerFooter>
            </div>
           */}
          </DrawerContent>
        </div>
      </Drawer>
    </>
  );
}
