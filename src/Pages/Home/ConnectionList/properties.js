export const data = {
    titles: {
        connectionList: "Connection List",
        search: "Search",
        filter: "Filter"
    },
    columns: [
        'Applicant Name',
        'Reviewer name',
        'Application Date',
        'Status',
        'Details/Edit'
    ]
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