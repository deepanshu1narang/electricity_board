import React from 'react';
import { Skeleton } from '@mantine/core';
const SkeletonTable = ({ numbers }) => {
    return (
        <div>
            {/* Map over the numbers array and render Skeleton for each item */}
            {Array.from({ length: numbers }).map((_, index) => (
                <Skeleton key={index} height={50} mb="xl" />
            ))}
        </div>
    );
};

export default SkeletonTable;
