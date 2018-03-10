import React, { Component } from 'react';

class Trending extends Component {

    render() {
        return (
            <div className='my-3 p-3 bg-light'
                style={{
                    fontWeight: 'bold',
                    fontSize: '18px',
                    position: 'relative'
                }}>Trends for you
                <span style={{
                    fontSize: '12px',
                    padding: '0 5px'
                }}>·</span>
                <span className = 'change' style={{
                    color: '#e67e22',
                    fontSize: '12px',
                    fontWeight: '200',
                    cursor: 'pointer'
                }}>Change</span>
                <div className = "trender pt-2">
                <h3 style = {{
                    fontSize: '14px',
                    margin: '0',
                    color: '#e67e22',
                    cursor: 'pointer'
                }}>#AfterTheFinalRose</h3>
                <h4 style = {{
                    fontSize: '10px',
                    color: '#657786',
                    paddingTop: '3px',
                    cursor: 'pointer'
                }}>96.1K Chirps</h4>
                </div>
                <div className = "trender pt-2">
                <h3 style = {{
                    fontSize: '14px',
                    margin: '0',
                    color: '#e67e22',
                    cursor: 'pointer'
                }}>#Oscars</h3>
                <h4 style = {{
                    fontSize: '10px',
                    color: '#657786',
                    paddingTop: '3px',
                    cursor: 'pointer',
                }}>264K Chirps</h4>
                </div>
                <div className = "trender pt-2">
                <h3 style = {{
                    fontSize: '14px',
                    margin: '0',
                    color: '#e67e22',
                    cursor: 'pointer'
                }}>#BlackPantherTheMovie</h3>
                <h4 style = {{
                    fontSize: '10px',
                    color: '#657786',
                    paddingTop: '3px',
                    cursor: 'pointer'
                }}>1K Chirps</h4>
                </div>
                <div className = "trender pt-2">
                <h3 style = {{
                    fontSize: '14px',
                    margin: '0',
                    color: '#e67e22',
                    cursor: 'pointer'
                }}>#StormyDaniels</h3>
                <h4 style = {{
                    fontSize: '10px',
                    color: '#657786',
                    paddingTop: '3px',
                    cursor: 'pointer'
                }}>99.2K Chirps</h4>
                </div>
                <div className = "trender pt-2">
                <h3 style = {{
                    fontSize: '14px',
                    margin: '0',
                    color: '#e67e22',
                    cursor: 'pointer'
                }}>#Covalence</h3>
                <h4 style = {{
                    fontSize: '10px',
                    color: '#657786',
                    paddingTop: '3px',
                    cursor: 'pointer'
                }}>3M Chirps</h4>
                </div>
                <div className = "trender pt-2">
                <h3 style = {{
                    fontSize: '14px',
                    margin: '0',
                    color: '#e67e22',
                    cursor: 'pointer'
                }}>#DanielBailey</h3>
                <h4 style = {{
                    fontSize: '10px',
                    color: '#657786',
                    paddingTop: '3px',
                    cursor: 'pointer'
                }}>300M Chirps</h4>
                </div>
                <div className = "trender pt-2">
                <h3 style = {{
                    fontSize: '14px',
                    margin: '0',
                    color: '#e67e22',
                    cursor: 'pointer'
                }}>#ReactDevelopment</h3>
                <h4 style = {{
                    fontSize: '10px',
                    color: '#657786',
                    paddingTop: '3px',
                    cursor: 'pointer'
                }}>200.1K Chirps</h4>
                </div>
                <div className = "trender pt-2">
                <h3 style = {{
                    fontSize: '14px',
                    margin: '0',
                    color: '#e67e22',
                    cursor: 'pointer'
                }}>#MadeWithCare</h3>
                <h4 style = {{
                    fontSize: '10px',
                    color: '#657786',
                    paddingTop: '3px',
                    cursor: 'pointer'
                }}>22K Chirps</h4>
                </div>
                <div className = "trender pt-2">
                <h3 style = {{
                    fontSize: '14px',
                    margin: '0',
                    color: '#e67e22',
                    cursor: 'pointer'
                }}>#FortNite</h3>
                <h4 style = {{
                    fontSize: '10px',
                    color: '#657786',
                    paddingTop: '3px',
                    cursor: 'pointer'
                }}>1M Chirps</h4>
                </div>
            </div>



        )
    }
}

export default Trending