import React from 'react';
import { useParams } from 'react-router-dom';
const Test = () => {
const { id } = useParams();


    return (
        <div>
            <h2>Test page { id}</h2>
        </div>
    );
};

export default Test;