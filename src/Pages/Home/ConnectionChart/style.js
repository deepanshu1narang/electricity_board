import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    wrapper: {
        display: 'flex',
        width: '90%',
        margin: 'auto',
        [theme.fn.smallerThan(1050)]: {
            width: '95%',
            overflowX: 'scroll',
            flexDirection: 'column'
        },
    },
    dashboardWrapper: {
        width:'70%',
        [theme.fn.smallerThan(576)]: {
            width: '100%',
        },
    },
    filter:{
        fontFamily: `Regular , ${theme.fontFamily}`,
        color: theme.colors.text[1],
        fontSize: 16,
        '>h3':{
            marginBottom: 30,
        }
    },
    filterWrapper: {
        marginTop:40,
        width: '25%',
        [theme.fn.smallerThan(576)]: {
            width: '100%',
          
        },
    },
    error:{
        color:'red'
    },
    // radioStatus:{
    //     display:'flex',

    // }

}));