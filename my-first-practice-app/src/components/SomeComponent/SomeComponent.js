import React from 'react';
import { useNavigate } from 'react-router-dom';

function SomeComponent() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/some-path');
    };

    return (
        <button onClick={handleClick}>
            Go to Some Path
        </button>
    );
}

export default SomeComponent;
