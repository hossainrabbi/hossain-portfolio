import React from 'react';

const Address = ({ title, name }) => {
    return (
        <div>
            <span className="main-color mr-3">{title} :</span>
            {name}
        </div>
    );
};

export default Address;
