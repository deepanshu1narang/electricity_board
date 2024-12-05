import { createStyles } from "@mantine/core";
export const useStyles = createStyles(theme => ({
    wrapperContainer: {
        background: 'rgb(224,244,245,0.5)',
        paddingBottom: 70,
        paddingTop: 40,
        backgroundSize: "80% 85%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
        paddingBottom: 100,
        paddingTop: 50,
        [theme.fn.largerThan(786)]: {
            minHeight: `600px !important`
        }

    },

    wrapper: {
        width: '90%',
        margin: 'auto',
        background: "white",
        padding: 40,
        borderRadius: 20,
        marginTop: 30,
        display: "flex",
        flexDirection: "column",
        rowGap: 30,
        boxShadow: "0px 20px 35px rgba(29, 94, 109, 0.03)",
        [theme.fn.smallerThan(1270)]: {
            width: 1000
        },
        [theme.fn.smallerThan(1050)]: {
            width: 800
        },
        [theme.fn.smallerThan(850)]: {
            width: '90%',
            padding: 20
        },
    },
    editFormAndChangeStatus: {
        display: "flex",
        columnGap: 70,
        justifyContent: "space-between",
        [theme.fn.smallerThan(1050)]: {
            columnGap: 30
        },
        [theme.fn.smallerThan(850)]: {
            flexDirection: "column",
            rowGap: 20
        },
    },
    title: {
        fontFamily: `Medium , ${theme.fontFamily}`,
        fontSize: 26,
        color: theme.colors.secondary[0],
        width: '80%',
        margin: "auto",
        [theme.fn.smallerThan(1270)]: {
            width: 1000
        },
        [theme.fn.smallerThan(1050)]: {
            width: 800
        },
        [theme.fn.smallerThan(850)]: {
            width: '95%',
            textAlign: "center",
            fontSize: 25
        },

    },
    editFormContainer: {
        width: "100%"
    },
    inputFields: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        rowGap: 20,
        [theme.fn.smallerThan(650)]: {
            flexDirection: "column"
        }
    },
    inputWrapper: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: 6,
        width: '48%',
        [theme.fn.smallerThan(650)]: {
            width: '100%'
        },
        textAlign: 'left'
    },
    addressInput: {
        minWidth: '100%'
    },
    linkWrapper: {
        display: "flex",
        alignItems: "center",
        columnGap: 10,
        width: '45%',
        [theme.fn.smallerThan(650)]: {
            width: "100%"
        },
        "a": {
            fontFamily: `Medium , ${theme.fontFamily}`,
            color: theme.colors.primary[0],
            [theme.fn.smallerThan(650)]: {
                fontSize: 16
            }
        },

    },
    disabledLinkWrapper: {
        display: "flex",
        alignItems: "center",
        columnGap: 10,
        width: '45%',
        [theme.fn.smallerThan(650)]: {
            width: "100%"
        },
        "a": {
            color: "#616161",
            opacity: .5,
            pointerEvents: "none"
        }
    },
    rightArrow: {
        color: theme.colors.primary[0]
    },
    label: {
        fontFamily: `Regular , ${theme.fontFamily}`,
        color: theme.colors.text[1],
        fontSize: 16,
        opacity: .5
    },

    textInput: {
        width: '100%',
        "input": {
            padding: 23,
            borderRadius: 13,
            border: '2px solid white',
            outline: 'none',
            background: "#F7F9FA",
            transition: '.5s',
            fontFamily: `Medium , ${theme.fontFamily}`,
            fontSize: 16,

            color: theme.colors.text[1],
            '&:focus': {
                fontFamily: `Regular , ${theme.fontFamily}`,
                fontWeight: "bold",
                color: theme.colors.secondary[0],
                borderColor: theme.colors.primary[0],
                background: theme.colors.tertiary[0],
                boxShadow: "0px 15px 25px 0px #00D89B26",
            }
        },
        ".mantine-TextInput-error": {
            fontSize: '13px !important'
        }
    },

    status: {
        fontFamily: `Regular, ${theme.fontFamily}`,
        fontWeight: "bold",
        width: 135,
        textAlign: "center",
        padding: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 16.9,
        borderRadius: 10,

    },
    approved: {
        background: theme.colors.background[4],
        color: '#64B216',
        [theme.fn.smallerThan(650)]: {
            fontSize: 15
        }
    },
    pending: {
        background: '#F5DBDB',
        color: '#FC5858',
    },
    rejected: {
        background: '#DBDBDB',
        color: '#9C9C9C',
    },
    activeAction: {
        color: "#64B216"
    },
    inactiveAction: {
        color: "#FC5858"
    },
    disableAction: {
        color: theme.colors.text[4]
    },
    delete: {
        color: "black"
    },
    changeStatusContainer: {
        background: "#F7F9FA",
        width: 500,
        padding: 30,
        borderRadius: 10,
        height: 400,
        display: "flex",
        rowGap: 5,
        flexDirection: "column",
        alignItems: "flex-start",
        position: "relative",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: 28,
        [theme.fn.smallerThan(1050)]: {
            width: 450
        },
        [theme.fn.smallerThan(850)]: {
            width: '100%',
            height: 300
        },
        [theme.fn.smallerThan(600)]: {
            width: '100%',
            height: 450
        },
        [theme.fn.smallerThan(338)]: {
            width: '100%',
            height: 450
        },
    },
    formDisabled: {
        opacity: .5,
        pointerEvents: "none"
    },
    actionBtns: {
        display: "flex",
        width: "70%",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 30,
        marginTop: 30,
        [theme.fn.smallerThan(850)]: {
            width: '100%'
        }
    },
    back: {
        fontFamily: `Bold , ${theme.fontFamily}`,
        fontSize: 16,
        color: theme.colors.secondary[0],
        textDecoration: "none",
        ":hover": {
            cursor: "pointer"
        }
    },
    btn: {
        width: 110,
        fontSize: 16,
        letterSpacing: .15,
        fontFamily: `Regular , ${theme.fontFamily}`,
    },
    textarea: {
        "textarea": {
            width: '100%',
            height: 150,
            border: '2px solid white',
            outline: 'none',
            borderRadius: 16,
            backgroundColor: '#F7F9FA',
            fontFamily: `Regular , ${theme.fontFamily}`,

            fontSize: 13,
            transition: '.5s',
            padding: 10,
            color: theme.colors.secondary[0],
            '&:focus': {
                borderColor: theme.colors.primary[0],
                boxShadow: `0 0 5px ${theme.colors.primary[0]}`
            },

        },
    },
    timelineWrapper: {
        marginTop: 30
    },
    timeline: {
        height: 30,
        [theme.fn.smallerThan(650)]: {
            height: 30
        },
        "div": {
            fontFamily: `Medium , ${theme.fontFamily}`,
            fontSize: 19,
            [theme.fn.smallerThan(1480)]: {
                fontSize: 16
            },
            [theme.fn.smallerThan(650)]: {
                fontSize: 16
            },
            fontFamily: `Medium , ${theme.fontFamily}`,
            [theme.fn.smallerThan(650)]: {
                fontSize: 19
            }
        },

    },
    timelineDate: {
        color: theme.colors.text[1],
        fontSize: 12,
        fontFamily: `Regular , ${theme.fontFamily} !important`,
        [theme.fn.smallerThan(650)]: {
            fontSize: `15px !important`
        }
    },
    loadKVA: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
    },
    loadKVATitle: {
        background: "#D9E2E4",
        padding: 20,
        color: "#2C2C30",
        fontSize: 19,
        textAlign: "left",
        fontFamily: `Medium, ${theme.fontFamily}`,
        borderBottomLeftRadius: 20,
        width: '70%',
        paddingLeft: 35
    },
    power: {
        background: theme.colors.secondary[0],
        fontFamily: `Regular, ${theme.fontFamily}`,
        color: "white",
        fontSize: 23,
        display: "flex",
        alignItems: "center",
        borderBottomRightRadius: 20,
        width: '30%',
        justifyContent: "center"
    },
    userActions: {
        color: "#616161",
        textAlign: "center",
        width: "70%",
        marginTop: 20,
        fontSize: 16,
        fontFamily: `Regular, ${theme.fontFamily}`,
        color: theme.colors.text[1],
        "a": {
            fontFamily: `Medium, ${theme.fontFamily}`,

        },
        [theme.fn.smallerThan(850)]: {
            width: '100%',
            fontSize: 16
        }
    },
    disabledBtn: {
        color: "#9C9C9C",
        width: 150,
        pointerEvents: "none"
    },
    textAreaWrapper: {
        width: '100%'
    },
    textArea: {
        fontSize: '16px !important',
        fontFamily: 'Medium !important',
        background: `${theme.colors.background[2]} !important`,
        minHeight: '6vw',
        border: '0px !important',
        borderRadius: '16px !important',
        [theme.fn.smallerThan('xs')]: {
            minHeight: '178px',
        },
    },
    connectionDetails: {
        fontFamily: `Regular , ${theme.fontFamily}`,
        color: theme.colors.text[1],
        fontSize: 16,
        opacity: .5,
        paddingRight: 20
    }
}))