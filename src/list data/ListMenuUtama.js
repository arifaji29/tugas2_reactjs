import React, { Component } from 'react';

class ListMenuUtama extends Component {
    render() {
        return (
            <div>
                <center>
                    <h2 style={{marginLeft:'320px'}}>
                        Selamat Datang di Warung Nusantara
                    </h2>
                    <img src={this.props.gambar} alt='Menu Makanan' width={'500'} />
                </center>
            </div>

        );
    }
}

export default ListMenuUtama;