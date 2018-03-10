import React from 'react';
import profilePhoto from '../components/me.png';

const chirpBuild = props => {

    let chirpList = props.chirps.map((chirp) => {


        return (
            <div key={chirp.key} className='chirp' style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '15px'
            }}>
                <img src={profilePhoto} alt='Daniel Bailey' style={{
                    width: 'auto',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'inline-block',
                    marginRight: '10px'
                }} />
                <div className='tweet-body' style={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'left'
                }}>
                    <span style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold'
                    }}> {chirp.name} <span className='text-muted' style={{
                        fontWeight: '300',
                        fontSize: '14px',
                        marginLeft: '5px'
                    }}>@Daniel_J_Bailey · 1m</span></span>

                    <p style={{
                        fontSize: '0.9rem',
                        fontWeight: '300'
                    }}> {chirp.text} </p>
                </div>

            </div>
        )
    });

    return (
        <div> {chirpList} </div>
    )

}


export default chirpBuild