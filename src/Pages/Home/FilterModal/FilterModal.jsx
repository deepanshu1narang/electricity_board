import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, Box } from '@mantine/core';
import { useStyles } from './style';
import { DatePicker } from '@mantine/dates';

const FilterModal = ({ openFilterModal, setOpenFilterModal, applyFilter, filteredValue, setFilteredValue, setActivePage }) => {
    const { classes } = useStyles(useStyles);
    return (<>

        <Modal opened={openFilterModal} onClose={() => setOpenFilterModal(false)} withCloseButton={true}>
            <Group position="center">
                <p> Filter Date Range via Application Date </p>


                <DatePicker type="range" value={filteredValue} onChange={setFilteredValue} />


            </Group>
            <Box className={classes.modalFooter}>
                <Button radius="xl" size="md" onClick={() => { setOpenFilterModal(); setFilteredValue([null, null]); applyFilter(true); }} color="primary.0">
                    Reset
                </Button>
                <Button radius="xl" size="md" onClick={() => {
                    applyFilter();
                    // setActivePage(1);
                }} color="secondary.0">
                    Apply
                </Button>
            </Box>
        </Modal>
    </>
    );
}
export default FilterModal;