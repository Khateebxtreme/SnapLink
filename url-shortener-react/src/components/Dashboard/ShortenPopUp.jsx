import * as React from 'react';
import Modal from '@mui/material/Modal';
import CreateNewShorten from './CreateNewShorten';

const ShortenPopUp = ({open, setOpen, refetch}) => {
  //refetch is a callback function that tells that whether we want to refetch the list of created urls or not (if new url creation is successful we need to refetch the list)

  const handleClose = () =>{
    setOpen(false);
  }
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <div className='flex justify-center items-center h-full w-full'>
        <CreateNewShorten setOpen={setOpen} refetch={refetch}/>
      </div>
    </Modal>
  )
}

export default ShortenPopUp



/*
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
*/

