export const data = {
    statusList : ['INPROGRESS', 'OPEN', 'CLOSED', 'REJECTED'],
    titles : {
        editLandlordList : 'Landlord / Edit',
        viewLandlordList : 'Landlord / View',
        firstName : "First Name",
        lastName : "Last Name",
        email : "Email",
        phone : "Phone",
        address : 'Full Address',
        city : "City",
        pincode : 'Pincode',
        cancel : 'Cancel',
        viewListOfProperty : 'View the list of Property',
        viewListOfTenants : 'View the list of Tenants',
        lifetimeTitle : 'Lifetime Earning By The Landlord'
    },
    placeholderError :{
        firstName: ['First Name is Required','Invalid First Name','First Name length must be greater than 2 and less than 26'],
        lastName: ['Last Name is Required','Invalid Last Name','Last Name length must be greater than 2 and less than 26'],
        email: ['Email is Required','Invalid email'],
        phoneNumber: ['Phone Number is Required','Invalid Phone Number, Phone Number must start with Country Code', 'Phone Number length must be greater than 8 and less than 14'],
        fullAddress : ['Address is Required','Address must be greater than 3 and less than 250 characters'],
        city: ['City is Required','City must be greater than 1 and less than 30 characters'],
        pincode: ['Pincode is Required'],
    },
}

export const demoDetails =  {
    "ID": 1,
    "Applicant_Name": "MICHAEL",
    "Gender": "Male",
    "District": "North",
    "State": "DELHI",
    "Pincode": 110028,
    "Ownership": "JOINT",
    "GovtID_Type": "AADHAR",
    "ID_Number": 6349499,
    "Category": "Commerical",
    "Load_Applied (in KV)": 10,
    "Date_of_Application": "18/03/21",
    "Date_of_Approval": "12/10/21",
    "Modified_Date": "18/04/21",
    "Status": "Approved",
    "Reviewer_ID": 1460,
    "Reviewer_Name": "HEM CHAND",
    "Reviewer_Comments": "Installation pending"
  }


export const statusClass = (status, classes) => {
    if (status === 'approved') {
        return classes.approved
    } 
    if (status === 'connection released') {
        return classes.approved
    }
    if (status === 'rejected') {
        return classes.rejected
    }
    if (status === 'pending') {
        return classes.pending
    }
}