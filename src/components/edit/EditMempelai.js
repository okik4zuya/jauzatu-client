import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Input,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
} from "@chakra-ui/react";
import { toast } from "react-toastify";

function EditTema(props) {
  const { editMode, setEditMode, value, setValue } = props;
  const [newValue, setNewValue] = useState({});

  const updateMempelai = async () => {
    setValue({ ...newValue });
    await fetch(`https://jauzatuapi.herokuapp.com/invitations/${value._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        namaLengkapPria: newValue.namaLengkapPria,
        namaPria: newValue.namaPria,
        namaLengkapWanita: newValue.namaLengkapWanita,
        namaWanita: newValue.namaWanita,
      }),
    });
    setEditMode(false);
    toast.success(`Update Mempelai Berhasil!!!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleEdit = () => {
    setNewValue({ ...value });
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const ButtonEditUpdate = () => {
    return (
      <Center className='mt-4'>
        <ButtonGroup spacing='6'>
          <div className={`${!editMode ? "" : "hidden"}`}>
            <Button bg='darkgoldenrod' textColor='white' onClick={handleEdit}>
              Edit
            </Button>
          </div>
          <div className={`${editMode ? "" : "hidden"}`}>
            <ButtonGroup>
              <Button
                bg='darkgoldenrod'
                textColor='white'
                onClick={updateMempelai}
              >
                Update
              </Button>
              <Button
                bg='darkgoldenrod'
                textColor='white'
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </ButtonGroup>
          </div>
        </ButtonGroup>
      </Center>
    );
  };

  return (
    <Box className={`rounded p-4 ${editMode ? "bg-yellow-200" : ""}`}>
      <div className={`text-sm text-center mb-4 ${editMode ? "" : "hidden"}`}>
        <em>Anda berada dalam mode edit. Silahkan edit lalu klik update!</em>
      </div>
      <ButtonEditUpdate />
      <form action=''>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='namaLengkapPria'>Nama Lengkap Pria</FormLabel>
          <Input
            id='namaLengkapPria'
            type='text'
            bg='white'
            value={editMode ? newValue.namaLengkapPria : value.namaLengkapPria}
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, namaLengkapPria: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='namaPria'>Nama Panggilan Pria</FormLabel>
          <Input
            id='namaPria'
            type='text'
            bg='white'
            value={editMode ? newValue.namaPria : value.namaPria}
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, namaPria: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='namaLengkapWanita'>Nama Lengkap Wanita</FormLabel>
          <Input
            id='namaLengkapWanita'
            type='text'
            bg='white'
            value={
              editMode ? newValue.namaLengkapWanita : value.namaLengkapWanita
            }
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, namaLengkapWanita: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='namaWanita'>Nama Panggilan Wanita</FormLabel>
          <Input
            id='namaWanita'
            type='text'
            bg='white'
            value={editMode ? newValue.namaWanita : value.namaWanita}
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, namaWanita: e.target.value })
            }
          />
        </FormControl>

        <ButtonEditUpdate />
      </form>
    </Box>
  );
}

export default EditTema;
