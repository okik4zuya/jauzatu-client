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
  Textarea,
} from "@chakra-ui/react";
import { toast } from "react-toastify";

function EditTeks(props) {
  const { editMode, setEditMode, value, setValue } = props;
  const [newValue, setNewValue] = useState({});

  const updateTeks = async () => {
    setValue({ ...newValue });
    await fetch(`https://jauzatuapi.herokuapp.com/invitations/${value._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        teksTanggalDepan: newValue.teksTanggalDepan,
        teksSalamPembuka: newValue.teksSalamPembuka,
        teksPendahuluan: newValue.teksPendahuluan,
        teksHariAkad: newValue.teksHariAkad,
        teksTanggalAkad: newValue.teksTanggalAkad,
        teksJamAkad: newValue.teksJamAkad,
        teksHariResepsi: newValue.teksHariResepsi,
        teksTanggalResepsi: newValue.teksTanggalResepsi,
        teksJamResepsi: newValue.teksJamResepsi,
        teksBulan: newValue.teksBulan,
        teksTahun: newValue.teksTahun,
        teksOrangTuaPria: newValue.teksOrangTuaPria,
        teksOrangTuaWanita: newValue.teksOrangTuaWanita,
        teksAyat: newValue.teksAyat,
        teksPenutup: newValue.teksPenutup,
        teksSalamPenutup: newValue.teksSalamPenutup,
        teksKamiYangBerbahagia: newValue.teksKamiYangBerbahagia,
        teksKelPria: newValue.teksKelPria,
        teksKelWanita: newValue.teksKelWanita,
      }),
    });
    setEditMode(false);
    toast.success(`Update Teks Berhasil!!!`, {
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
              <Button bg='darkgoldenrod' textColor='white' onClick={updateTeks}>
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
          <FormLabel htmlFor='teksTanggalDepan'>Teks Tanggal Depan</FormLabel>
          <Input
            id='teksTanggalDepan'
            type='text'
            bg='white'
            value={
              editMode ? newValue.teksTanggalDepan : value.teksTanggalDepan
            }
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, teksTanggalDepan: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='teksSalamPembuka'>Teks Salam Pembuka</FormLabel>
          <Input
            id='teksSalamPembuka'
            type='text'
            bg='white'
            value={
              editMode ? newValue.teksSalamPembuka : value.teksSalamPembuka
            }
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, teksSalamPembuka: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='teksPendahuluan'>Teks Pendahuluan</FormLabel>
          <Textarea
            id='teksPendahuluan'
            type='textarea'
            bg='white'
            h={200}
            value={editMode ? newValue.teksPendahuluan : value.teksPendahuluan}
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, teksPendahuluan: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='teksHariAkad'>Teks Hari Akad</FormLabel>
          <Input
            id='teksHariAkad'
            type='text'
            bg='white'
            value={editMode ? newValue.teksHariAkad : value.teksHariAkad}
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, teksHariAkad: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='teksTanggalAkad'>Teks Tanggal Akad</FormLabel>
          <Input
            id='teksTanggalAkad'
            type='text'
            bg='white'
            value={editMode ? newValue.teksTanggalAkad : value.teksTanggalAkad}
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, teksTanggalAkad: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='teksJamAkad'>Teks Jam Akad</FormLabel>
          <Input
            id='teksJamAkad'
            type='text'
            bg='white'
            value={editMode ? newValue.teksJamAkad : value.teksJamAkad}
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, teksJamAkad: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='teksHariResepsi'>Teks Hari Resepsi</FormLabel>
          <Input
            id='teksHariResepsi'
            type='text'
            bg='white'
            value={editMode ? newValue.teksHariResepsi : value.teksHariResepsi}
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, teksHariResepsi: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='teksTanggalResepsi'>
            Teks Tanggal Resepsi
          </FormLabel>
          <Input
            id='teksTanggalResepsi'
            type='text'
            bg='white'
            value={
              editMode ? newValue.teksTanggalResepsi : value.teksTanggalResepsi
            }
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, teksTanggalResepsi: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='teksJamResepsi'>Teks Jam Resepsi</FormLabel>
          <Input
            id='teksJamResepsi'
            type='text'
            bg='white'
            value={editMode ? newValue.teksJamResepsi : value.teksJamResepsi}
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, teksJamResepsi: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='teksBulan'>Teks Bulan</FormLabel>
          <Input
            id='teksBulan'
            type='text'
            bg='white'
            value={editMode ? newValue.teksBulan : value.teksBulan}
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, teksBulan: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='teksTahun'>Teks Tahun</FormLabel>
          <Input
            id='teksTahun'
            type='text'
            bg='white'
            value={editMode ? newValue.teksTahun : value.teksTahun}
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, teksTahun: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='teksOrangTuaPria'>Teks Orang Tua Pria</FormLabel>
          <Input
            id='teksOrangTuaPria'
            type='text'
            bg='white'
            value={
              editMode ? newValue.teksOrangTuaPria : value.teksOrangTuaPria
            }
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, teksOrangTuaPria: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='teksOrangTuaWanita'>
            Teks Orang Tua Wanita
          </FormLabel>
          <Input
            id='teksOrangTuaWanita'
            type='text'
            bg='white'
            value={
              editMode ? newValue.teksOrangTuaWanita : value.teksOrangTuaWanita
            }
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, teksOrangTuaWanita: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='teksAyat'>Teks Ayat</FormLabel>
          <Textarea
            id='teksAyat'
            type='textarea'
            bg='white'
            h={200}
            value={editMode ? newValue.teksAyat : value.teksAyat}
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, teksAyat: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='teksPenutup'>Teks Penutup</FormLabel>
          <Textarea
            className='break-words'
            id='teksPenutup'
            bg='white'
            h={200}
            value={editMode ? newValue.teksPenutup : value.teksPenutup}
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, teksPenutup: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='teksSalamPenutup'>Teks Salam Penutup</FormLabel>
          <Input
            id='teksSalamPenutup'
            type='text'
            bg='white'
            value={
              editMode ? newValue.teksSalamPenutup : value.teksSalamPenutup
            }
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, teksSalamPenutup: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='teksKamiYangBerbahagia'>
            Teks Kami yang Berbahagia
          </FormLabel>
          <Input
            id='teksKamiYangBerbahagia'
            type='text'
            bg='white'
            value={
              editMode
                ? newValue.teksKamiYangBerbahagia
                : value.teksKamiYangBerbahagia
            }
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({
                ...newValue,
                teksKamiYangBerbahagia: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='teksKelPria'>Teks Keluarga Pria</FormLabel>
          <Input
            id='teksKelPria'
            type='text'
            bg='white'
            value={editMode ? newValue.teksKelPria : value.teksKelPria}
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, teksKelPria: e.target.value })
            }
          />
        </FormControl>
        <FormControl className='pt-4'>
          <FormLabel htmlFor='teksKelWanita'>Teks Keluarga Wanita</FormLabel>
          <Input
            id='teksKelWanita'
            type='text'
            bg='white'
            value={editMode ? newValue.teksKelWanita : value.teksKelWanita}
            isReadOnly={editMode ? false : true}
            onChange={(e) =>
              setNewValue({ ...newValue, teksKelWanita: e.target.value })
            }
          />
        </FormControl>
        <ButtonEditUpdate />
      </form>
    </Box>
  );
}

export default EditTeks;
