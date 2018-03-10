import React, { Component } from 'react';

class CopyRight extends Component {


render () {
    return (
    <div className = 'my-3 bg-light'>
    <ul className = "nav-list" style = {{
        color: '#657786',
        listStyleType: 'none',
        fontSize: '12px',
        fontWeight: '300'
    }}>
        <li>© 2018 Chirper</li>
        <li>About</li>
        <li>Help Center</li>
        <li>Terms</li>
        <li>Privacy Policy</li>
        <li>Cookies</li>
        <li>Ads Info</li>
        <li>Brand</li>
        <li>Blog</li>
        <li>Status</li>
        <li>Apps</li>
        <li>Jobs</li>
        <li>Marketing</li>
        <li>Businesses</li>
        <li>Developers</li>
    </ul>
    <hr style = {{margin: '0'}}/>
    <h4 className = "advertise" style = {{
        color: '#e67e22',
        fontSize: '12px',
        padding: '15px',
        cursor: 'pointer',
        margin: '0'
    }}><span><i className="fas fa-external-link-alt" alt = "Advertise with Chirper" style={{marginRight: '5px'}}></i></span>Advertise with Chirper</h4>
    </div>
    )
}
}


 
        
    

    


export default CopyRight