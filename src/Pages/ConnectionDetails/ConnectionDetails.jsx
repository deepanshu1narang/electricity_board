import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Box, Text, TextInput, Timeline, Button, Select, Textarea } from '@mantine/core'
import { useStyles } from './style'
import { data, statusClass, demoDetails } from './properties'
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import dayjs from 'dayjs';
import { baseUrl, getHeader } from '../../Utils/apiConnection';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';
import SkeletonTable from '../../Utils/SkeletonTable';
const ConnectionDetails = ({ isAllowed }) => {
  const { classes, theme } = useStyles(useStyles);
  const { id } = useParams();
  const [status, setStatus] = useState("");
  const [applicationDate, setApplicationDate] = useState('18/03/21');
  const [modificationDate, setModificationDate] = useState('18/03/21');
  const [approvalDate, setApprovalDate] = useState('18/03/21');
  const [loadApplication, setLoadApplication] = useState();
  const [applicantName, setApplicantName] = useState('');
  const navigate = useNavigate();

  async function fetchUserDetails() {
    const apiResp = await fetch(`${baseUrl}/user/details/${id}`, {
      method: 'GET',
      headers: getHeader()
    });
    if (apiResp.ok) {
      let userDetails = (await apiResp.json()).data;
      form.setValues({
        ID: userDetails.ID,
        Applicant_Name: userDetails.Applicant_Name,
        Gender: userDetails.Gender,
        District: userDetails.District,
        State: userDetails.State,
        Pincode: userDetails.Pincode,
        Ownership: userDetails.Ownership,
        GovtID_Type: userDetails.GovtID_Type,
        ID_Number: userDetails.ID_Number,
        Category: userDetails.Category,
        Load_Applied: userDetails.Load_Applied,
        Date_of_Application: userDetails.Date_of_Application,
        Date_of_Approval: userDetails.Date_of_Approval,
        Modified_Date: userDetails.Modified_Date,
        Status: userDetails.Status,
        Reviewer_ID: userDetails.Reviewer_ID,
        Reviewer_Name: userDetails.Reviewer_Name,
        Reviewer_Comments: userDetails.Reviewer_Comments,
      });
      setStatus(userDetails.Status.toLowerCase())
      setApplicationDate(userDetails.Date_of_Application, 'DD/MM/YY');
      setModificationDate(userDetails.Modified_Date);
      setApprovalDate(userDetails.Date_of_Approval);
      setLoadApplication(userDetails.Load_Applied)
      setApplicantName(userDetails.Applicant_Name)

    }
  }

  useEffect(() => {
    fetchUserDetails()
  }, [id]);

  const form = useForm({
    initialValues: {
      ID: null,
      Applicant_Name: '',
      Gender: '',
      District: '',
      State: '',
      Pincode: null,
      Ownership: '',
      GovtID_Type: '',
      ID_Number: null,
      Category: '',
      Load_Applied: null,
      Date_of_Application: '',
      Date_of_Approval: '',
      Modified_Date: '',
      Status: '',
      Reviewer_ID: null,
      Reviewer_Name: '',
      Reviewer_Comments: ''
    },
    validate: {

      Applicant_Name: (value) =>
        value == ''
          ? "Applicant name can't be empty" :
          null,
      Gender: (value) =>
        value == ''
          ? "Please Select Gender" :
          null,
      Load_Applied: (value) =>
        value == ''
          ? "Load Applied value can't be empty" :
          value > 200 || value <= 0 ? 'Load Applied value should be in between 1 to 200' : null,
      Status: (value) =>
        value == ''
          ? "Please Select Status" :
          null

    }
  })

  const updateForm = async () => {
    const body = {};
    for (let i in form.values) {
      if (isAllowed.includes(i) && form.values[i]) {
        body[i] = form.values[i];
      }
    }
    const apiResp = await fetch(`${baseUrl}/user/edit`, {
      method: 'PUT',
      headers: getHeader(),
      body: JSON.stringify(body)
    });
    if (apiResp.ok) {
      // navigate(0)
      const dbResponse = await apiResp.json();

      if (dbResponse.error)
        showNotification('failure', dbResponse.msg, '');
      else showNotification('success', dbResponse.msg, '');
      await fetchUserDetails()
    } else {
      const dbResponse = await apiResp.json();
      showNotification('failure', dbResponse.msg, '');
    }
  }


  const showNotification = (notificationType, message, title) => {
    let colorCode = notificationType == 'success' ? 'secondary.0' : 'red';
    notifications.show({
      id: 'signup-notification',
      withCloseButton: true,
      autoClose: 5000,
      title: title,
      message: message,
      color: colorCode,
      icon:
        notificationType == 'success' ? <IconCheck size="1.1rem" /> : <IconX />,
      style: { backgroundColor: theme.colors.background[1] },
      loading: false
    });
  };




  return (
    <>

      <Box className={classes.wrapperContainer}>
        <p className={classes.title} >{applicantName} Connection Details</p>

        <form onSubmit={form.onSubmit(() => {
          updateForm()
        })} className={classes.wrapper}>

          <Box className={classes.connectionDetails}>
            <h2>
              <label>{'Connection Id - '}</label>
              {form.getInputProps('ID').value} </h2>

          </Box>
          <Box className={classes.editFormAndChangeStatus}>
            <Box className={`${classes.editFormContainer}`}>
              <Box className={classes.inputFields}>

                <Box className={classes.inputWrapper}>
                  <label className={classes.label}>{'Applicant Name'}</label>
                  {form.getInputProps('Applicant_Name').value ? <TextInput
                    className={classes.textInput}
                    variant="unstyled"
                    {...form.getInputProps('Applicant_Name')}
                  /> : <SkeletonTable numbers={1} />}
                </Box>
                <Box className={classes.inputWrapper}>
                  <label className={classes.label}>{'Gender'}</label>
                  {form.getInputProps('Gender').value ? <Select
                    placeholder="Select Gender"
                    className={classes.textInput}
                    variant="unstyled"
                    size='xs'
                    {...form.getInputProps('Gender')}
                    data={[
                      { value: 'Male', label: 'Male' },
                      { value: 'Female', label: 'Female' },
                      { value: 'Other', label: 'Other' },

                    ]}

                  /> : <SkeletonTable numbers={1} />}

                </Box>
                <Box className={classes.inputWrapper}>
                  <label className={classes.label}>{'District'}</label>
                  {form.getInputProps('District').value ? <Select
                    className={classes.textInput}
                    variant="unstyled"
                    data={[
                      { value: 'East', label: 'East' },
                      { value: 'West', label: 'West' },
                      { value: 'North', label: 'North' },
                      { value: 'South', label: 'South' },
                      { value: 'Other', label: 'Other' },
                    ]}
                    {...form.getInputProps('District')}
                  /> : <SkeletonTable numbers={1} />}
                </Box>
                <Box className={`${classes.inputWrapper}`}>
                  <label className={classes.label}>{'State'}</label>
                  {form.getInputProps("State").value ? <TextInput
                    className={classes.textInput}
                    variant="unstyled"
                    {...form.getInputProps("State")}
                  /> : <SkeletonTable numbers={1} />}
                </Box>
                <Box className={classes.inputWrapper}>
                  <label className={classes.label}>{'Pincode'}</label>
                  {form.getInputProps("Pincode").value ? <TextInput
                    className={classes.textInput}
                    variant="unstyled"
                    {...form.getInputProps("Pincode")}
                  /> : <SkeletonTable numbers={1} />}
                </Box>
                <Box className={classes.inputWrapper}>
                  <label className={classes.label}>{'Ownership'}</label>
                  {form.getInputProps("Ownership").value ? <Select
                    className={classes.textInput}
                    variant="unstyled"
                    data={[
                      { value: 'JOINT', label: 'JOINT' },
                      { value: 'INDIVIDUAL', label: 'INDIVIDUAL' },
                    ]}
                    {...form.getInputProps("Ownership")}
                  /> : <SkeletonTable numbers={1} />}
                </Box>

                <Box className={classes.inputWrapper}>
                  <label className={classes.label}>{'Category'}</label>
                  {form.getInputProps("Category").value ? <Select
                    className={classes.textInput}
                    variant="unstyled"
                    data={[
                      { value: 'Commerical', label: 'Commerical' },
                      { value: 'Residential', label: 'Residential' },
                    ]}
                    {...form.getInputProps("Category")}
                  /> : <SkeletonTable numbers={1} />}
                </Box>
                <Box className={classes.inputWrapper}>
                  <label className={classes.label}>{'Load_Applied'}</label>
                  {form.getInputProps("Load_Applied").value ? <TextInput
                    className={classes.textInput}
                    variant="unstyled"
                    type='number'
                    {...form.getInputProps("Load_Applied")}
                  /> : <SkeletonTable numbers={1} />}
                </Box>
                <Box className={classes.inputWrapper}>
                  <label className={classes.label}>{'GovtID Type'}</label>
                  {form.getInputProps("GovtID_Type").value ? <Select
                    className={classes.textInput}
                    variant="unstyled"
                    // disabled
                    readOnly
                    data={[
                      { value: 'AADHAR', label: 'AADHAR' },
                      { value: 'PAN', label: 'PAN' },
                      { value: 'PASSPORT', label: 'PASSPORT' },
                      { value: 'VOTER_ID', label: 'VOTER_ID' },
                    ]}
                    {...form.getInputProps("GovtID_Type")}
                  /> : <SkeletonTable numbers={1} />}
                </Box>
                <Box className={classes.inputWrapper}>
                  <label className={classes.label}>{'ID_Number'}</label>
                  {form.getInputProps("ID_Number") ? <TextInput

                    className={classes.textInput}
                    // disabled
                    readOnly
                    variant="unstyled"
                    {...form.getInputProps("ID_Number")}
                  /> : <SkeletonTable numbers={1} />}
                </Box>
                <Box className={classes.inputWrapper}>
                  <label className={classes.label}>{'Reviewer_ID'}</label>
                  {form.getInputProps("Reviewer_ID").value ? <TextInput
                    className={classes.textInput}
                    variant="unstyled"
                    type='number'
                    {...form.getInputProps("Reviewer_ID")}
                  /> : <SkeletonTable numbers={1} />}
                </Box>
                <Box className={classes.inputWrapper}>
                  <label className={classes.label}>{'Reviewer_Name'}</label>
                  {form.getInputProps("Reviewer_Name").value ? <TextInput
                    className={classes.textInput}
                    variant="unstyled"

                    {...form.getInputProps("Reviewer_Name")}
                  /> : <SkeletonTable numbers={1} />}
                </Box>
                <Box className={`${classes.inputWrapper} ${classes.textAreaWrapper}`}>
                  <label className={classes.label}>{'Reviewer_Comments'}</label>
                  {form.getInputProps("Reviewer_Comments") ? <Textarea
                    className={`${classes.textInput} ${classes.textArea}`}
                    variant="unstyled"
                    {...form.getInputProps("Reviewer_Comments")}
                  /> : <SkeletonTable numbers={1} />}
                </Box>


              </Box >

            </Box>
            <Box className={classes.changeStatusContainer}>
              <p className={`${classes.status} ${statusClass(status, classes)}`}>{status.toUpperCase()}</p>
              <Timeline className={classes.timelineWrapper} active={1} lineWidth={2}>
                <Timeline.Item className={classes.timeline} title='Application Date' bulletSize={10}>
                  <Text className={classes.timelineDate}>{new Date(applicationDate).toDateString()}</Text>
                </Timeline.Item>
                <Timeline.Item className={classes.timeline} title='Modification Date' bulletSize={10}>
                  <Text className={classes.timelineDate}>{new Date(modificationDate).toDateString()}</Text>
                </Timeline.Item>


                <Timeline.Item className={classes.timeline} title='Approval Date' bulletSize={10}>
                  <Text className={classes.timelineDate}>{new Date(approvalDate).toDateString()}</Text>
                </Timeline.Item>
              </Timeline>
              <Box className={classes.loadKVA}>
                <p className={classes.loadKVATitle} >{'Load Applied (in KV)'}</p>
                <p className={classes.power} >{loadApplication}</p>
              </Box>
            </Box>
          </Box>

          <Box className={classes.actionBtns}>
            <Link to='/' className={classes.back} >{'Back'}</Link>
            <Button type={'submit'} color='secondary.0' radius="xl" size="md">UPDATE</Button>
          </Box>

        </form>

      </Box>
    </>
  )
}

export default ConnectionDetails