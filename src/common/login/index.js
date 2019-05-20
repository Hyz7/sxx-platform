import React, {Component} from 'react';
import {Modal} from 'antd'

class Login extends Component {
    state = {
        visible: false,
        tabStatus:'login'
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    render() {
        let {tabStatus}=this.state
        return (
            <div className='login-container'>
                <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                    className='login-modal'
                    centered={true}
                    width={384}
                    closable={false}
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <div
                                className={tabStatus=='login'?'text active':'text'}
                                onClick={()=>this.changeTab('login')}>登陆
                                <span></span>
                            </div>
                            <div
                                className={tabStatus=='register'?'text active':'text'}
                                onClick={()=>this.changeTab('register')}>注册
                                <span></span>
                            </div>
                        </div>
                        {tabStatus=='login'&&<div className="login-box">
                            <div className="modal-input">
                                <div className="input-box">
                                    <input type="text" placeholder='请输入登录手机号/邮箱'/>
                                </div>
                                <div className="input-box">
                                    <input type="password" placeholder='请输入密码'/>
                                </div>
                                <div className="input-bottom">
                                    <div className="autoLogin"><input type="checkbox"/>7天内自动登录</div>
                                    <div className="searchSecret"><span>找回密码</span><div className='line'>|</div><span>无法登录</span></div>
                                </div>

                            </div>
                            <div className="loginBtn">登录</div>
                            <div className="login-bottom">
                                <div className="text">手机短信登陆</div>
                                <div className="line"></div>
                                <svg className='icon-svg'>
                                    <use xlinkHref='#iconxinlangweibo'></use>
                                </svg>
                                <svg className='icon-svg1'>
                                    <use xlinkHref='#iconweixin'></use>
                                </svg>
                                <svg className='icon-svg2'>
                                    <use xlinkHref='#iconQQ'></use>
                                </svg>
                            </div>
                            <div className="rightBottom">
                                <div className="caret"></div>
                                <svg className='icon-svg'>
                                    <use xlinkHref='#iconerweima'></use>
                                </svg>
                            </div>

                        </div>}
                        {tabStatus=='register'&&<div className="register-box">
                            <div className="modal-input">
                                <div className="input-box">
                                    <input type="text" placeholder='请输入注册手机号'/>
                                </div>
                                <div className="input-box">
                                    <input type="password" placeholder='请输入验证码'/>
                                </div>
                                <div className="input-bottom">
                                    <div className="autoLogin"><input type="checkbox"/>同意  </div>
                                    <span>《思学行注册协议》</span>
                                </div>

                            </div>
                            <div className="loginBtn">注册</div>
                            <div className="login-bottom">
                                <div className="text">其他方式登录</div>
                                <div className="line"></div>
                                <svg className='icon-svg2'>
                                    <use xlinkHref='#iconQQ'></use>
                                </svg>
                                <svg className='icon-svg1'>
                                    <use xlinkHref='#iconweixin'></use>
                                </svg>
                                <svg className='icon-svg'>
                                    <use xlinkHref='#iconxinlangweibo'></use>
                                </svg>
                            </div>
                        </div>}

                    </div>
                </Modal>
            </div>
        );
    }
    changeTab=(value)=>{
        this.setState({
            tabStatus:value
        })
    }

}

export default Login;