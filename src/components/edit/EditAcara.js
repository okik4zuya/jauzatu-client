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

function EditAcara(props) {
  const { editMode, setEditMode, value, setValue } = props;
  const [newValue, setNewValue] = useState({});

  const updateAcara = async () => {
    setValue({ ...newValue });
    await fetch(`https://jauzatuapi.herokuapp.com/invitations/${value._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        waktuAkad: newValue.waktuAkad,
        waktuResepsi: newValue.waktuResepsi,
        lokasiAkad: newValue.lokasiAkad,
        lokasiResepsi: newValue.lokasiResepsi,
        linkGoogleMaps: newValue.linkGoogleMaps,
        iFrameGoogleMaps: newValue.iFrameGoogleMaps,
      }),
    });
    setEditMode(false);
    toast.success(`Update Acara Berhasil!!!`, {
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
  console.log(value.waktuAkad);

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
                onClick={updateAcara}
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
          <FormLabel htmlFor='waktuAkad'>Waktu Akad</FormLabel>
          <Input
            id='waktuAkad'
            type='text'
            bg='white'
            value={editMode ? newValue.waktuAkad : value.waktuAkad}
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({
                ...newValue,
                waktuAkad: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='waktuResepsi'>Waktu Resepsi</FormLabel>
          <Input
            id='waktuResepsi'
            type='text'
            bg='white'
            value={editMode ? newValue.waktuResepsi : value.waktuResepsi}
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, waktuResepsi: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='lokasiAkad'>Lokasi Akad</FormLabel>
          <Input
            id='lokasiAkad'
            type='text'
            bg='white'
            value={editMode ? newValue.lokasiAkad : value.lokasiAkad}
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, lokasiAkad: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='lokasiResepsi'>Lokasi Resepsi</FormLabel>
          <Input
            id='lokasiResepsi'
            type='text'
            bg='white'
            value={editMode ? newValue.lokasiResepsi : value.lokasiResepsi}
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, lokasiResepsi: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='linkGoogleMaps'>Link Google Maps</FormLabel>
          <Input
            id='linkGoogleMaps'
            type='text'
            bg='white'
            value={editMode ? newValue.linkGoogleMaps : value.linkGoogleMaps}
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, linkGoogleMaps: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='iFrameGoogleMaps'>
            Link iFrame Google Maps
          </FormLabel>
          <Input
            id='iFrameGoogleMaps'
            type='text'
            bg='white'
            value={
              editMode ? newValue.iFrameGoogleMaps : value.iFrameGoogleMaps
            }
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, iFrameGoogleMaps: e.target.value })
            }
          />
        </FormControl>
        <ButtonEditUpdate />
      </form>
    </Box>
  );
}

export default EditAcara;
