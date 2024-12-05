import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, TextInput, Box } from '@mantine/core';
import { useStyles } from './style';
import { useState } from 'react';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom'
import { baseUrl, getHeader } from '../../../Utils/apiConnection';
const SearchApplicationModal = ({ }) => {
  const { classes, theme } = useStyles(useStyles);
  const [inputId, setInputId] = useState('');
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();
  const showNotification = (notificationType, message, title) => {
    let colorCode = notificationType == 'success' ? 'secondary.0' : 'red';
    notifications.show({
      id: 'toast-notification',
      withCloseButton: true,
      autoClose: 5000,
      title: title,
      message: message,
      color: colorCode,
      icon: notificationType == 'success' ? <IconCheck size="1.1rem" /> : <IconX />,
      style: { backgroundColor: theme.colors.background[0] },
      loading: false,
    });
  }
  // function to search application Id once the user click on search button of the Modal.
  const searchById = async () => {
    // do fetch call to get the details
    const apiResp = await fetch(`${baseUrl}/user/details/${inputId}`, {
      method: 'GET',
      headers: getHeader()
    });
    if (apiResp.ok) {
      const data = await apiResp.json();
      if (data.error) {
        showNotification('failure', data.msg, '');
      } else {
        navigate(`/details/${inputId}`)
        //navigate(0)
        close();
      }


    } else {
      showNotification('failure', 'Some error occured', '');
    }
  }


  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Search Application By ID"
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <Box className={classes.modalBody}>
          <TextInput
            label="Application ID"
            placeholder="Enter Application ID"
            description="Enter the Application ID of the user connection"
            inputWrapperOrder={['label', 'error', 'input', 'description']}
            onChange={(e) => { setInputId(e.target.value) }}
          />
        </Box>
        <Box className={classes.modalFooter}>
          <Button onClick={() => { close() }} color="primary.0">
            Cancel
          </Button>
          <Button onClick={() => searchById()} color="secondary.0">
            Search
          </Button>
        </Box>
      </Modal>

      <Group position="center" className={classes.searchButton}>
        <Button onClick={open} color='secondary.0' radius="xl">Search Application</Button>
      </Group>
    </>
  );
}

export default SearchApplicationModal;