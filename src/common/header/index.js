import React,{Component,Fragment} from 'react'
import Login from '../../common/login'

import sxxlogo from "../../images/header/sxxlogo.png"
import { CSSTransition } from 'react-transition-group';
class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            inputbg:false
        }
    }

    render() {
        let {inputbg}=this.state
        return(
            <div className="header-container">
                <div className="header-logo">
                    <img src={sxxlogo} alt="思学行" title='思学行'/>
                </div>
                <div className="header-ul">
                    <li>免费课程</li>
                    <li>实战课程</li>
                    <li>就业班</li>
                    <li>专栏</li>
                    <li>猿问</li>
                    <li>手记</li>
                </div>
                <div className="header-input">
                    <input type="text"
                           onFocus={()=> this.setState({inputbg:true})}
                           onBlur={()=>this.setState({inputbg:false})}
                    />
                    <div className={inputbg?"input-search searchbg":"input-search"}>
                        <svg className='icon-svg'>
                            <use xlinkHref='#iconsousuo'></use>
                        </svg>
                    </div>
                </div>
                <div className="header-right">
                    <div className='text'>
                        <svg className='icon-svg'>
                            <use xlinkHref='#iconhongbao-'></use>
                        </svg>
                        <div>分销返利</div>
                    </div>
                    <div className='text'>下载APP</div>
                    <div className='shopBar'>
                        <svg className="icon-svg">
                            <use xlinkHref='#icongouwuche-copy'></use>
                        </svg>
                        购物车
                    </div>
                    <Login ref={node=>this.login=node}/>
                    <div className="header-btn login" onClick={()=>{
                        this.login.showModal()
                        this.login.changeTab('login')
                    }}>登录</div>
                    <div className='btn-line'>/</div>
                    <div className="header-btn register" onClick={()=>{
                        this.login.showModal()
                        this.login.changeTab('register')
                    }}>注册</div>

                </div>
            </div>
        )
    }
}



export default Header