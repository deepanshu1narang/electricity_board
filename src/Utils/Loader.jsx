import React from 'react';
import { LoadingOverlay } from '@mantine/core';

const Loader = ({
    loading,
    loaderSize = 'lg',
    loaderVariant = 'dots',
    style = {},
}) => {
    return (
        <div style={{ position: 'relative', ...style }}>
            <LoadingOverlay
                visible={loading}
                overlayBlur={3}
                overlayColor={rgb(227, 240, 237, 0.5)}
                loaderProps={{
                    size: loaderSize,
                    color: 'rgb(223,242,243)',
                    variant: loaderVariant,
                }}
            />
        </div>
    );
};

export default Loader;
