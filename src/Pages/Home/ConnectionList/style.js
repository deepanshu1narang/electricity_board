import { createStyles } from '@mantine/core';
export const useStyles = createStyles(theme => ({
    wrapper: {
        background: theme.colors.background[0],
        paddingBottom: 30,
        paddingTop: 50,
        backgroundPosition: 'right bottom',
        backgroundRepeat: 'no-repeat',
        [theme.fn.smallerThan(800)]: {
            backgroundImage: 'none'
        },
        [theme.fn.largerThan(786)]: {
        }
    },
    tableContainer: {
        width: '90%',
        margin: 'auto',
        [theme.fn.smallerThan(1050)]: {
            width: '95%',
            overflowX: 'scroll'
        },
    },
    table: {
        backgroundColor: theme.colors.background[0],
        width: '100%',
        margin: 'auto',
        marginTop: 20,
        marginBlock: 20,
        borderRadius: 10,
        [theme.fn.smallerThan(1050)]: {
            width: 1200
        },
    },
    headerAndSearch: {
        width: '90%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.fn.smallerThan(1050)]: {
            width: '95%'
        },
        [theme.fn.smallerThan(800)]: {
            flexDirection: 'column',
            alignItems: 'center',
            rowGap: 10
        },
    },
    searchAndFilter: {
        display: 'flex',
        justifyContent: 'space-between',
        columnGap: 20,
        [theme.fn.smallerThan(800)]: {
            width: '100%'
        },
    },

    searchIcon: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 99,
        width: 16,
        height: 16
    },
    searchInput: {
        width: 350,
        border: 'none !important',
        [theme.fn.smallerThan(800)]: {
            width: '100%'
        },
        'input': {
            border: 'none',
            fontFamily: `Regular , ${theme.fontFamily}`,
            borderRadius: 16,
            fontSize: 13,
        }
    },
    filterContainer: {
        display: 'flex',
        alignItems: 'center',
        columnGap: 10,
        background: 'white',
        borderRadius: 16,
        paddingLeft: 10,
        paddingRight: 10,
        height: 35,
        [theme.fn.smallerThan(500)]: {
            width: 35,
            height: 35,
            borderRadius: 10,
        }
    },
    filterIcon: {
        width: 12,
        height: 12
    },
    filter: {
        fontFamily: `Regular, ${theme.fontFamily}`,
        fontSize: 13,

        [theme.fn.smallerThan(500)]: {
            display: 'none'
        }
    },
    title: {
        fontFamily: `Medium, ${theme.fontFamily}`,
        fontSize: 26,
        color: theme.colors.secondary[0],
    },
    tableHead: {
        backgroundColor: theme.colors.secondary[0],
        height: 50,

    },
    columnHeading: {
        color: 'white !important',
        fontFamily: `Light, ${theme.fontFamily}`,
        letterSpacing: 0.15,
        fontSize: '16px !important',
        textAlign: 'center !important',
        ':first-child': {
            borderTopLeftRadius: 10,
            paddingLeft: 25,
        },
        ':last-child': {
            borderTopRightRadius: 10,
        }
    },
    tableRowWhite: {
        height: 70,
        background: 'white',
        border: 'none',

    },
    tableRow: {
        height: 70,
        background: '#F1F6F6',
        border: 'none',

    },
    tableData: {
        borderTop: 'none !important',
        fontFamily: `Regular , ${theme.fontFamily}`,
        color: theme.colors.text[1],
        fontSize: '16px !important',
    },
    editAndView: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        columnGap: 20,
        cursor: 'pointer'
    },
    action: {
        width: 20,
        height: 20
    },
    statusWrapper: {
        display: 'flex',
        justifyContent: 'center',
    },
    status: {
        fontFamily: `Regular, ${theme.fontFamily}`,
        width: 140,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 8,
        fontSize: 13,
        borderRadius: 10,

    },
    approved: {
        background: theme.colors.background[4],
        color: '#64B216',
        display: 'flex',
        justifyContent: 'center',
    },
    rejected: {
        background: '#DBDBDB',
        color: '#9C9C9C',
    },
    pending: {
        background: '#F5DBDB',
        color: theme.colors.text[5],
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        border: 'none !important',
        marginTop: 50,
        'button': {
            border: 'none !important',
            backgroundColor: 'transparent'
        }
    }
}))