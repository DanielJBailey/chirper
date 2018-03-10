import React, { Component } from 'react';
import background from '../components/header.png';
import profilePhoto from '../components/me.png';


class Profile extends Component {



    render() {
        return (
            <div className='my-3 bg-light profile' style={{position: 'relative'}}>
                <img src={background} alt='header' style={{ width: '100%' }} />
                <img src={profilePhoto} alt='daniel'
                    style={{
                        width: '75px',
                        height: 'auto',
                        borderRadius: '50%',
                        border: '3px solid white',
                        marginTop: '-40px',
                        marginLeft: '10px'
                    }}
                />
                <div className='username' style={{ position: 'relative' }}>
                    <h4 style={{
                        float: 'right',
                        position: 'absolute',
                        top: '-25px',
                        left: '100px',
                        fontWeight: 'bold',
                        fontSize: '20px'
                    }}>Daniel Bailey</h4>

                    <h4 style={{
                        float: 'right',
                        position: 'absolute',
                        top: '-5px',
                        left: '100px',
                        fontSize: '12px',
                        color: '#666',
                        paddingTop: '5px'
                    }}>@Daniel_J_Bailey</h4>

                    <div className='followers px-4 pt-4'>
                        <div className="column">
                            <div className="row">
                                <div className="col-md-4">
                                    <p style={{
                                        fontSize: '12px',
                                        textAlign: 'left',
                                        color: '#657786',
                                        margin: '0',
                                        cursor: 'pointer'
                                    }}>Tweets</p>
                                    <p style={{
                                        color: '#e67e22',
                                        fontWeight: 'bold',
                                        cursor: 'pointer'
                                    }}>4</p>
                                </div>
                                <div className="col-md-4">
                                    <p style={{
                                        fontSize: '12px',
                                        textAlign: 'left',
                                        color: '#657786',
                                        margin: '0',
                                        cursor: 'pointer'
                                    }}>Following</p>
                                    <p style={{
                                        color: '#e67e22',
                                        fontWeight: 'bold',
                                        cursor: 'pointer'
                                    }}>64</p>
                                </div>
                                <div className="col-md-4">

                                    <p style={{
                                        fontSize: '12px',
                                        textAlign: 'left',
                                        color: '#657786',
                                        margin: '0',
                                        cursor: 'pointer'
                                    }}>Followers</p>
                                    <p style={{
                                        color: '#e67e22',
                                        fontWeight: 'bold',
                                        cursor: 'pointer'
                                    }}>1.2M</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Profile
