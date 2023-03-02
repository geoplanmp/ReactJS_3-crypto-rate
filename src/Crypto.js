import React, {Component} from 'react';
import './Crypto.css';

import axios from 'axios';
import CryptoList from './CryptoList';

class Crypto extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            cryptoList: []
        };
    }

    componentDidMount() {
        this.getCryptoData();
    }

    getCryptoData = () => {
       
       axios.get('https://blockchain.info/pl/ticker', {mode: 'cors'}
       )
            
            .then(res => {
                console.log(res);
            });

    }

    render() {
        return(
            <div className='Crypto'>
                <CryptoList />                
            </div>
        )
    }
}

export default Crypto;