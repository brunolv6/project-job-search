import React from 'react';

import './container-item.style.scss';

const ContainerItem = ({id, ...outros}) => {
    return (
            <div className='container'>
                <div
                    className='background-image'
                    style={{
                        backgroundImage:`url(${outros.url})`
                    }}
                />
                <div className='caixa-interna'>
                    <div
                        className='title'
                        id={id}>{outros.title}
                    </div>
                </div>  
            </div>
    );
};

export default ContainerItem;