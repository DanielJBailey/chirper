import React, { Component } from 'react';
import '../App.css';
import covalence from '../components/covalence.jpg';
import reactLogo from '../components/react.png';
import hero from '../components/hero.png';
import google from '../components/google.svg';

class WhoToFollow extends Component {

    render() {
        return (
            <div className="section-wrapper my-3 bg-light">
                <div className='p-3 bg-light' style={{
                    fontWeight: 'bold',
                    position: 'relative'
                }}>Who To Follow
                <span style={{
                        fontSize: '12px',
                        padding: '0 5px'
                    }}>·</span>
                    <span className='change' style={{
                        color: '#e67e22',
                        fontSize: '12px',
                        fontWeight: '200',
                        cursor: 'pointer'
                    }}>Refresh</span>
                    <span style={{
                        fontSize: '12px',
                        padding: '0 5px'
                    }}>·</span>
                    <span className='change' style={{
                        color: '#e67e22',
                        fontSize: '12px',
                        fontWeight: '200',
                        cursor: 'pointer'
                    }}>View all</span>

                    <div className='container text-center'>
                        <i className="fas fa-user" style={{
                            color: '#657786',
                            fontSize: '10px',
                            marginRight: '10px'
                        }}></i>
                        <span style={{
                            color: '#657786',
                            fontSize: '12px',
                            fontWeight: '300',
                            marginRight: '5px'
                        }}>Followed by</span>
                        <a href="https://twitter.com/LIRIK" target='_blank' rel="noopener noreferrer">
                            <span className='change' style={{
                                color: '#e67e22',
                                fontSize: '12px',
                                fontWeight: '300',
                                cursor: 'pointer'
                            }}>Lirik</span></a>
                        <div className='row'>
                            <div className='col-md-3 p-0'>
                                <a href="https://twitter.com/covalence_io?lang=en" target="_blank" rel="noopener noreferrer">
                                    <img src={covalence} alt='covalence-logo' style={{
                                        width: '50px',
                                        borderRadius: '50%'
                                    }} /></a>
                            </div>
                            <div className='col-md-9 text-left pl-1'>
                                <a href="https://twitter.com/covalence_io?lang=en" target="_blank" rel="noopener noreferrer">
                                    <span className='user' style={{ marginBottom: '0', cursor: 'pointer' }}>Covalence</span></a>
                                <span style={{
                                    color: '#657786',
                                    fontSize: '14px',
                                    fontWeight: '300',
                                    marginLeft: '5px'
                                }}>@Covalence</span>
                                <button className='follow' style={{
                                    padding: '5px 30px',
                                    backgroundColor: 'none',
                                    border: '1px solid #e67e22',
                                    color: '#e67e22',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    borderRadius: '25px',
                                    fontSize: '10px',
                                    margin: '0'

                                }}>Follow</button>

                            </div>
                            <hr className='p-0 m-0 mt-2 mb-2' style={{ width: '100%' }} />
                        </div>
                    </div>


                    <div className='container text-center follow-card'>
                        <i className="fas fa-user" style={{
                            color: '#657786',
                            fontSize: '10px',
                            marginRight: '10px'
                        }}></i>
                        <span style={{
                            color: '#657786',
                            fontSize: '12px',
                            fontWeight: '300',
                            marginRight: '5px'
                        }}>Followed by</span>
                        <a href="https://twitter.com/matt_landers?lang=en" target='_blank' rel="noopener noreferrer" alt="matt's twitter">
                            <span className='change' style={{
                                color: '#e67e22',
                                fontSize: '12px',
                                fontWeight: '300',
                                cursor: 'pointer'
                            }}>Matt Landers</span></a>
                        <div className='row'>
                            <div className='col-md-3 p-0'>
                                <a href="https://twitter.com/reactjs?lang=en" target="_blank" rel="noopener noreferrer">
                                    <img src={reactLogo} alt='covalence-logo' style={{
                                        width: '50px',
                                        borderRadius: '50%'
                                    }} /></a>
                            </div>
                            <div className='col-md-9 text-left pl-1'>
                                <a href="https://twitter.com/reactjs?lang=en" target="_blank" rel="noopener noreferrer">
                                    <span className='user' style={{ marginBottom: '0', cursor: 'pointer' }}>React</span></a>
                                <span style={{
                                    color: '#657786',
                                    fontSize: '14px',
                                    fontWeight: '300',
                                    marginLeft: '5px'
                                }}>@reactjs</span>
                                <button className='follow' style={{
                                    padding: '5px 30px',
                                    backgroundColor: 'none',
                                    border: '1px solid #e67e22',
                                    color: '#e67e22',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    borderRadius: '25px',
                                    fontSize: '10px',
                                    margin: '0'

                                }}>Follow</button>

                            </div>
                            <hr className='p-0 m-0 mt-2 mb-2' style={{ width: '100%' }} />
                        </div>
                    </div>


                    <div className='container text-center follow-card'>
                        <i className="fas fa-user" style={{
                            color: '#657786',
                            fontSize: '10px',
                            marginRight: '10px'
                        }}></i>
                        <span style={{
                            color: '#657786',
                            fontSize: '12px',
                            fontWeight: '300',
                            marginRight: '5px'
                        }}>Followed by</span>
                        <a href="http://github.com" target='_blank' rel="noopener noreferrer" alt="github">
                            <span className='change' style={{
                                color: '#e67e22',
                                fontSize: '12px',
                                fontWeight: '300',
                                cursor: 'pointer'
                            }}>GitHub</span></a>
                        <div className='row'>
                            <div className='col-md-3 p-0'>
                                <a href="https://twitter.com/heroku" target="_blank" rel="noopener noreferrer">
                                    <img src={hero} alt='covalence-logo' style={{
                                        width: '50px',
                                        borderRadius: '50%'
                                    }} /></a>
                            </div>
                            <div className='col-md-9 text-left pl-1'>
                                <a href="https://twitter.com/heroku" target="_blank" rel="noopener noreferrer">
                                    <span className='user' style={{ marginBottom: '0', cursor: 'pointer', textOverflow: 'ellipsis', wordBreak: 'keep-all' }}>Heroku<i className="fas fa-check-square" style={{
                                        color: '#3498db',
                                        fontSize: '12px',
                                        marginLeft: '5px'
                                    }}></i></span></a>
                                <span style={{
                                    color: '#657786',
                                    fontSize: '14px',
                                    fontWeight: '300',
                                    marginLeft: '5px'
                                }}>@Heroku</span>
                                <button className='follow' style={{
                                    padding: '5px 30px',
                                    backgroundColor: 'none',
                                    border: '1px solid #e67e22',
                                    color: '#e67e22',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    borderRadius: '25px',
                                    fontSize: '10px',
                                    margin: '0'

                                }}>Follow</button>

                            </div>

                        </div>
                    </div>

                </div>
                <div className='bg-light'>
                    <hr className='p-0 m-0' style={{ width: '100%' }} />
                </div>
                <div className='container bg-light p-3'>

                    <div className='row'>
                        <div className='col-md-2 d-flex flex-col align-items-center'>
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                                <img src={google} alt='covalence-logo' style={{
                                    width: '40px',
                                    padding: '5px 10px',
                                    border: '1px solid #ccc',
                                    borderRadius: '3px'
                                }} /></a>
                        </div>
                        <div className='col-md-10'>
                            <p style={{
                                margin: '0 0 -5px',
                                textAlign: 'left',
                                fontSize: '16px',
                                fontWeight: 'bold'
                            }}>Find people you know</p>
                            <p style={{
                                margin: '0',
                                textAlign: 'left',
                                fontSize: '12px',
                                fontWeight: '300',
                                color: '#7f8c8d'
                            }}>Import your contacts from Gmail</p>



                        </div>
                    </div>
                    <hr className='p-0 my-3' style={{ width: '100%' }} />
                    <h4 className="advertise" style={{
                        color: '#e67e22',
                        fontSize: '12px',
                        cursor: 'pointer',
                        margin: '0'
                    }}>Connect with other address books</h4>
                </div>
            </div>
        )
    }
}

export default WhoToFollow

        //https://pbs.twimg.com/profile_images/872898282120523776/qWCC1QrI_400x400.jpg

//covalence logo