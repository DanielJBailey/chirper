import React, { Component } from 'react';
import profilePhoto from '../components/me.png';
import ChirpBuild from '../components/chirpBuild';

class TimeLine extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            chirps: [
                {
                    name: 'Daniel Bailey',
                    key: 0,
                    time: 'March 8',
                    text: 'This has been one of the funnest labs to date'
                },
                {
                    name: 'Daniel Bailey',
                    key: 1,
                    time: 'March 7',
                    text: 'Just went to @Covalence to watch their HTML/CSS Workshop. Had an awesome time helping other people starting out'
                },
                {
                    name: 'Daniel Bailey',
                    key: 2,
                    time: 'March 8',
                    text: 'This is my third example chirp for the #1 App "Chirper"'
                }
            ]


        }
    }

    handleClick(event) {
        let chirpsArray = this.state.chirps;
        if (this._inputElement.value !== "") {
            chirpsArray.unshift({
                name: "Daniel Bailey",
                key: Date.now(),
                time: "1m",
                text: this._inputElement.value,
            });
            this.setState({
                chirps: chirpsArray
            });
        }
        this._inputElement.value = "";
        event.preventDefault();
    }

    render() {
        return (
            <div className='timeline-wrapper my-3 m-3 bg-light'>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    padding: '1em 1em 10px 1em',
                    backgroundColor: 'rgba(230, 126, 34, 0.2)'
                }}>
                    <img src={profilePhoto} alt='profile-pic'
                        style={{
                            width: '30px',
                            height: 'auto',
                            borderRadius: '50%',
                            display: 'inline-block',
                            margin: '10px 10px 0 0'
                        }}
                    />
                    <form onSubmit = {this.handleClick } style={{ width: '100%' }}>
                        <textarea id='textinput' ref={a => (this._inputElement = a)} className='new-chirp-place' placeholder="What's happening?" style={{
                            resize: 'none',
                            backgroundColor: '#f5f8fa',
                            border: '2px solid rgba(230, 126, 34, 0.4)',
                            height: '100px',
                            width: '100%',
                            color: '#666',
                            display: 'inline-block',
                            padding: '5px',
                            borderRadius: '5px',
                            textIndent: '5px',
                            breakAfter: 'always'
                        }}>
                        </textarea><br />
                        <button type='submit' value='post' style={{
                            fontSize: '0.8em',
                            border: '0',
                            float: 'right',
                            background: '#e67e22',
                            color: '#fff',
                            marginRight: '10px',
                            padding: '6px 16px',
                            cursor: 'pointer',
                            borderRadius: '100px'
                        }}>Chirp</button>
                    </form>
                </div>
                <ChirpBuild chirps={this.state.chirps} />
            </div>
        )
    }
}

export default TimeLine