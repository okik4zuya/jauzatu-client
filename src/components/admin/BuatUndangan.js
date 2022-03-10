import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewSlug } from "../../features/global";
import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  Input,
  Select,
} from "@chakra-ui/react";

function BuatUndangan(props) {
  const dispatch = useDispatch();
  const global = useSelector((state) => state.global.value);

  const buatUndangan = async () => {
    const response = await fetch(
      "https://jauzatuapi.herokuapp.com/invitations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          createdAt: Date.now(),
          slug: global.newSlug,
          tema: "Tema Snow Clean",
          // Data Konten - Data Mempelai
          namaLengkapPria: "Nama Lengkap Pria",
          namaPria: "Pria",
          namaLengkapWanita: "Nama Lengkap Wanita",
          namaWanita: "Wanita",

          // Data Konten - Data Acara
          waktuAkad: "Sabtu, 20 Februari 2022",
          waktuResepsi: "Sabtu, 20 Februari 2022",
          lokasiAkad:
            "Masjid Pusdai, Jl. Diponegoro No. 20, Kota Bandung, Jawa Barat",
          lokasiResepsi:
            "Masjid Pusdai, Jl. Diponegoro No. 20, Kota Bandung, Jawa Barat",
          linkGoogleMaps: "https://google.maps",
          iFrameGoogleMaps:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9208683435095!2d107.62368131382961!3d-6.900067195014147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7b394d93a91%3A0x6cd6a249b02f7!2sMasjid%20Pusdai!5e0!3m2!1sen!2sid!4v1644944454894!5m2!1sen!2sid",

          // Data Konten - Teks
          teksTanggalDepan: "01 . 01 . 2022",
          teksSalamPembuka: "Assalamu'alaikum Wr. Wb.",
          teksPendahuluan:
            "Dengan memohon rahmat Allah swt, insyaAllah kami akan menyelenggarakan akad nikah:",
          teksHariAkad: "Sabtu",
          teksTanggalAkad: "20",
          teksJamAkad: "09.00",
          teksHariResepsi: "Sabtu",
          teksTanggalResepsi: "20",
          teksJamResepsi: "10.00",
          teksBulan: "Februari",
          teksTahun: "2022",
          teksOrangTuaPria: "Putra ke-2 dari Bapak ... dan Ibu ...",
          teksOrangTuaWanita: "Putra ke-3 dari Bapak ... dan Ibu ...",
          teksAyat:
            '"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir. QS. Ar-Rum: 21"',
          teksPenutup:
            "Merupakan seuatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/I dapat berkenan hadir dan memberikan doa restu dalam acara pernikahan kami",
          teksSalamPenutup: "Wassalamu'alaikum Wr. Wb.",
          teksKamiYangBerbahagia: "Nama Wanita & Nama Pria",
          teksKelPria: "Kel. Bpk. ... dan Ibu ...",
          teksKelWanita: "Kel. Bpk. ... dan Ibu ...",
        }),
      }
    );
    props.fetchInvitations();
    dispatch(setNewSlug(""));
  };

  return (
    <Container className='p-[20px] bg-gold border-2 rounded-lg'>
      <Box className='text-center font-semibold pb-[20px] text-white font-montserrat text-xl'>
        Buat Undangan
      </Box>
      <form action=''>
        <FormControl>
          <Input
            className='text-center '
            colorScheme='white'
            variant='outline'
            id='slug'
            bg='white'
            type='text'
            placeholder='masukkan slug'
            value={global.newSlug}
            onChange={(e) => dispatch(setNewSlug(e.target.value))}
          />
        </FormControl>
        <Center className='pt-4'>
          <Button
            onClick={buatUndangan}
            colorScheme='teal'
            disabled={global.newSlug ? false : true}
          >
            Buat Undangan
          </Button>
        </Center>
      </form>
    </Container>
  );
}

export default BuatUndangan;
