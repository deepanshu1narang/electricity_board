import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapperContainer : {
    background :  `linear-gradient(121.51deg, #E1F4F5 30.38%, #E1F4F5 53.04%, #D6EBF0 71.29%)`,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width : "90%",
    margin :"auto",
    height : 110,
    alignItems :'center',
    position : "relative",
    [theme.fn.smallerThan(1400)] : {
      // paddingLeft : 100,
      // paddingRight : 100
      width : "90%",
    },
    [theme.fn.smallerThan(1050)] : {
      width : "100%",
      paddingLeft : 20,
      paddingRight : 10
    },
  },
  logo:{
    cursor:'pointer',
    [theme.fn.smallerThan(576)] : {
     width: '100%'
    },
  }

}));