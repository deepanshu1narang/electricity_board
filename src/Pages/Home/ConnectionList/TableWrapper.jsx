import { useRef } from 'react';
import { Box, Table, Pagination, TextInput } from '@mantine/core';
import { useStyles } from './style';
import { useEffect, useState } from 'react';
import filter from "../../../assets/icons/filterIcon.svg";
import SearchIcon from '../../../assets/icons/search.svg';
import { data, statusClass } from './properties';
import { baseUrl, getHeader } from '../../../Utils/apiConnection';
import FilterModal from '../FilterModal/FilterModal';
import ConnectionTable from './ConnectionTable';
import SkeletonTable from '../../../Utils/SkeletonTable';

function TableWrapper() {
    const { classes, theme } = useStyles(useStyles)
    const [activePage, setActivePage] = useState(1);
    const [entries, setEntries] = useState([]);
    const [pageLoadEntries, setPageLoadEntries] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    const [pageSize] = useState(50);
    const [openFilterModal, setOpenFilterModal] = useState(false);
    const [filteredValue, setFilteredValue] = useState([null, null]);
    const [scrolledToEnd, setScrolledToEnd] = useState(false);
    const [filteredSearch, setFilteredSearch] = useState(false);
    const [loading, setLoading] = useState(false)
    const cacheListing = useRef({});
    const params = new URLSearchParams();
    params.append('page', activePage)
    params.append('pSize', pageSize)


    const fetchConnectionList = async (isReset) => {
        // set the filer date range if it is applied
        if (!isReset && filteredValue && filteredValue[0] && filteredValue[1]) {
            params.delete('datemin');
            params.delete('datemax');
            params.append('datemin', filteredValue[0].toISOString());
            params.append('datemax', filteredValue[1].toISOString())
        }
        if (!isReset && params in cacheListing) {
            setEntries(cacheListing[params]);
            return;
        }
        const apiResp = await fetch(`${baseUrl}/user/list?` + params.toString(), {
            method: 'GET',
            headers: getHeader(),

        })
        if (apiResp.ok) {
            let UserListing = await apiResp.json();

            if (scrolledToEnd) {
                setEntries([...entries, ...UserListing.data]);
                setPageLoadEntries([...pageLoadEntries, ...UserListing.data]);
            }
            else {
                setEntries(UserListing.data);
                setPageLoadEntries(UserListing.data);
            }

            setTotalPage((UserListing.totalCount + pageSize - 1) / pageSize);
            cacheListing[params] = UserListing.data;
        }
    }

    useEffect(() => {
        if (!filteredSearch)
            fetchConnectionList();
    }, [activePage])

    const AppliedDateFilter = async (isReset) => {

        setOpenFilterModal(false);
        await fetchConnectionList(isReset);
    }

    const loadMore = () => {
        if (activePage < totalPage) {
            setScrolledToEnd(true);
            setActivePage(activePage + 1);
        }
    }

    const handleSearch = (e) => {
        const value = e.target.value;
        if (value === "") {
            setEntries(pageLoadEntries);
            setFilteredSearch(false);
        } else {
            const filteredEntries = pageLoadEntries.filter(item => `${item.Applicant_Name.toLowerCase()}`.includes(value.toLowerCase()) || item.Reviewer_Name.toLowerCase().includes(value) ||
                item.Status.toLowerCase().includes(value)
            );
            setEntries(filteredEntries);
            setFilteredSearch(true);
        }
    }


    return (
        <Box className={classes.wrapper}>
            <Box className={classes.headerAndSearch}>
                <p className={classes.title} >{data.titles.connectionList} : {filteredValue && filteredValue[0] && filteredValue[1] ? filteredValue[0].toDateString() + '-' + filteredValue[1].toDateString() : ''}</p>
                <Box className={classes.searchAndFilter}>
                    <TextInput icon={<img className={classes.action} src={SearchIcon} alt='view' />} onChange={handleSearch} radius={"xl"} className={classes.searchInput} placeholder={data.titles.search} />
                    <Box className={classes.filterContainer} onClick={() => setOpenFilterModal(true)}>
                        <img className={classes.filterIcon} src={filter} alt='search-input' />
                        <p className={classes.filter}>{data.titles.filter}</p>
                    </Box>

                </Box>
            </Box>
            <Box className={classes.tableContainer}>
                {entries.length > 0 && <ConnectionTable rows={entries} data={data} statusClass={statusClass} activePage={activePage} pageSize={pageSize} scrolledToEnd={scrolledToEnd} loadMore={loadMore} setScrolledToEnd={setScrolledToEnd} />}
                {
                    entries.length === 0 && <SkeletonTable numbers={5} />
                }
            </Box>
            <FilterModal openFilterModal={openFilterModal} setOpenFilterModal={setOpenFilterModal} applyFilter={AppliedDateFilter} filteredValue={filteredValue} setFilteredValue={setFilteredValue} setActivePage={setActivePage} />
        </Box>
    );
}

export default TableWrapper;