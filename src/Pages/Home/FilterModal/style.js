

import { createStyles } from '@mantine/core';
export const useStyles = createStyles(theme => ({
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
    }
}
))