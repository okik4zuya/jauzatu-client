import React, { useState, useEffect } from "react";
//import BuatUndangan from "../components/admin/BuatUndangan";
import { BuatUndangan } from "../components";
import ListUndangan from "../components/admin/ListUndangan";
import { Container, Button, useDisclosure } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";

function Admin() {
  const [invitations, setInvitations] = useState([]);

  const fetchInvitations = async () => {
    const response = await fetch(
      "https://jauzatuapi.herokuapp.com/invitations"
    );
    setInvitations(await response.json());
  };

  useEffect(() => {
    fetchInvitations();
  }, []);

  console.log(invitations);
  return (
    <Container maxW='container.lg' className=''>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div>
        <div className='text-2xl font-bold text-center font-montserrat py-10'>
          Halaman Admin
        </div>
        <BuatUndangan
          invitations={invitations}
          fetchInvitations={fetchInvitations}
        ></BuatUndangan>

        <ListUndangan
          invitations={invitations}
          fetchInvitations={fetchInvitations}
        ></ListUndangan>
      </div>
    </Container>
  );
}

export default Admin;
