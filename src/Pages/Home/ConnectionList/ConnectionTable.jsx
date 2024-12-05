import React, { startTransition, useEffect, useRef } from 'react';
import { TableVirtuoso } from 'react-virtuoso';
import { useStyles } from './style';
import { Box } from '@mantine/core';
import { Link } from 'react-router-dom';
import edit from "../../../assets/icons/edit.svg";
import "./table.css";

const ConnectionTable = ({ rows, data, statusClass, loadMore, activePage, pageSize, scrolledToEnd, setScrolledToEnd }) => {
    const { classes, theme } = useStyles(useStyles);
    const tableRef = useRef(null);
    useEffect(() => {
        if (scrolledToEnd) {
            startTransition(() => {
                const idx = (activePage - 1) * pageSize;
                tableRef.current.scrollToIndex({
                    index: idx,
                    behavior: "instant",
                    align: "start",
                });
                setScrolledToEnd(false);
            });
        }
    }, [scrolledToEnd]);
    return (
        <TableVirtuoso
            ref={tableRef}
            className={`table ${classes.table}`}
            style={{ height: 450 }}
            data={rows}
            endReached={loadMore}
            fixedHeaderContent={() => (
                <tr>
                    {data.columns.map(heading => {
                        return <th style={{ width: "20%" }} className={`${classes.tableHead} ${classes.columnHeading}`}>{heading}</th>
                    })}
                </tr>
            )}
            itemContent={(_, element) => (
                <>
                    <td className={classes.tableData}>{element.Applicant_Name}</td>
                    <td className={classes.tableData}>{element.Reviewer_Name}</td>
                    <td className={classes.tableData}>{new Date(element.Date_of_Application).toDateString()}</td>
                    <td className={` ${classes.tableData} ${classes.statusWrapper}`}><p className={`${classes.status} ${statusClass(element.Status.toLowerCase(), classes)}`}>{element.Status}</p></td>
                    <td className={classes.tableData}>
                        <Box className={classes.editAndView}>
                            <Link to={`/details/${element.ID}`} ><img className={classes.action} src={edit} alt='edit' /></Link>
                        </Box>
                    </td>
                </>
            )}
            components={{ Footer }}
        />
    )
}

const Footer = () => {
    return (
        <div
            style={{
                padding: '2rem',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            Loading...
        </div>
    )
}

export default ConnectionTable;
