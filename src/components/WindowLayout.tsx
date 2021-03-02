import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'


interface childProp {
    [propName: string]: any;
}

const WindowLayout: React.FC<childProp> = (props) => {
    
    const searchHandle = () => {
        var element = document.getElementById("seachName");
        element?.classList.toggle("close-width");
    }
    const barExtend = () => {
        var element = document.getElementById("window-bar");
        element?.classList.toggle("addheight");
    }  
    return (
        <>
            <div className="mian-window-box" id={props.windowName}>
                <div className="window-heder-bar" id="window-bar">
                    <div className="bar-box">
                        <div className="d-flex align-items-center">
                            <div className="banner-search close-width" id="seachName">
                                <div className="input-group mb-3">
                                    <Dropdown className="input-group-prepend">
                                        <Dropdown.Toggle className="btn btn-outline-secondary search-btn-ali" id="dropdown-basic" >
                                            <img src={`${process.env.PUBLIC_URL}/assets/icon/arrow-down-s.png`} />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <input type="text" placeholder="password" className="form-control" />
                                    <button className="btn-search-al" onClick={() => searchHandle()}>
                                        <img src={`${process.env.PUBLIC_URL}/assets/icon/search-icon.svg`} />
                                    </button>
                                </div>
                            </div>
                            <div className="bar-icons" onClick={() => barExtend()}>
                                <img src={`${process.env.PUBLIC_URL}/assets/icon/bar-icon.svg`} alt="" />
                            </div>
                            <div className="arrow-btn">
                                <a href="#"><i className="fa fa-angle-left"></i></a>
                                <a href="#"><i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                        <div className="window-resize-action">
                            <button className="window-cross">
                                {/* <img src={`${process.env.PUBLIC_URL}/assets/icon/times.svg`} /> */}
                                {props.authenicated?
                                <i className="fa fa-user-circle fa-3x"></i>:
                                <button className="login-btn"><a href="/auth">Enter</a></button>
                                }
                            </button>
                        </div>

                    </div>
                    <div className="droplink">
                        <ul className="d-flex align-items-center px-4">
                            <li className="list">
                                <a href="https://ganexus.com" className="link">Website</a>
                            </li>
                            <li className="list">
                                <a href="/my-gans" className="link">My Gans</a>
                            </li>
                            <li className="list">
                                <a href="/public-gans" className="link">Public Gans</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>


                <div className="mian-content-nexus">
                    <div className="container-fluid" style={{ padding: 0, paddingBottom: 20 }}>
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WindowLayout;