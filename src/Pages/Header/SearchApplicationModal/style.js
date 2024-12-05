import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    modalBody: {
        marginTop: 40,
        marginBottom: 20
    },
    modalFooter: {
        marginTop: 30,
        display: 'flex',
        justifyContent: 'space-evenly',
        'button': {
            minWidth: 200,
            [theme.fn.smallerThan(576)]: {
                minWidth: 150,
              
            },
        },
        
    },
    searchButton: {
        
    }
}));