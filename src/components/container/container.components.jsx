import React from 'react';
import ContainerItem from '../container-item/container-item.component'

import './container.style.scss';
import DATA_SET from '../../dados/empregos'

class Container extends React.Component{
    constructor(){
        super();
        this.state = {
            empregos: DATA_SET
        }
    }

    render(){
        return(
            <div className="display">
                {
                    this.state.empregos.map(({ id, ...outros}) => (
                            <ContainerItem key={id} {...outros}/>
                        )
                    )
                }
            </div>
        )
    }
}

export default Container;