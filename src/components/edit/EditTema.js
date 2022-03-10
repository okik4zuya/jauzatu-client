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
import "react-toastify/dist/ReactToastify.css";

function EditTema(props) {
  const { editMode, setEditMode, value, setValue } = props;
  const [newValue, setNewValue] = useState({});

  const updateTema = async () => {
    setValue({ ...newValue });
    await fetch(`https://jauzatuapi.herokuapp.com/invitations/${value._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tema: newValue.tema,
      }),
    });
    setEditMode(false);
    toast.success(`Update Tema Berhasil!!!`, {
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
              <Button bg='darkgoldenrod' textColor='white' onClick={updateTema}>
                Update
              </Button>
              <Button onClick={handleCancel}>Cancel</Button>
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

      {/* Same as */}

      <ButtonEditUpdate />
      <form action=''>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='slug'>Slug</FormLabel>
          <Input
            id='slug'
            type='text'
            bg='white'
            value={editMode ? newValue.slug : value.slug}
            isDisabled
            onChange={(e) => setNewValue({ ...newValue, slug: e.target.value })}
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='tema'>Tema</FormLabel>
          <Select
            placeholder={editMode ? newValue.tema : value.tema}
            id='tema'
            type='text'
            bg='white'
            value={editMode ? newValue.tema : value.tema}
            isDisabled={editMode ? false : true}
            onChange={(e) => setNewValue({ ...newValue, tema: e.target.value })}
          >
            <option value='Tema Snow Clean - Dark Blue'>
              Tema Snow Clean - Dark Blue
            </option>
            <option value='Tema Snow Clean - Light Blue'>
              Tema Snow Clean - Light Blue
            </option>
          </Select>
        </FormControl>
        <ButtonEditUpdate />
      </form>
    </Box>
  );
}

export default EditTema;
