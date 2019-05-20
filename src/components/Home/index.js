import React, { Component } from 'react';
import Slider from '../../common/myswiper/slider'
class Home extends Component {
    render(){
        const color='rgba(0,98,225,0.1)'
        const list=[
            {
                bannerId:1,
                bannerImage:''
            },
            {
                bannerId:2,
                bannerImage:''
            },
            {
                bannerId:3,
                bannerImage:''
            }
        ]
        return (
            <div className='home-container'>
                <div className="item1-box" style={{background: `linear-gradient(${color}, white)`}}>
                    <div className="navbar-container">
                        <div className="menubar">
                            <div className="menuContent">
                                <div className="item">
                                    <a href="javascript:void(0)">
                                        <span className="group">前沿 / 区块链 / 人工智能</span>
                                        <i className="arrow"></i>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="javascript:void(0)">
                                        <span className="group">前端 / 小程序 / JS</span>
                                        <i className="arrow"></i>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="javascript:void(0)">
                                        <span className="group">后端 / JAVA / Python</span>
                                        <i className="arrow"></i>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="javascript:void(0)">
                                        <span className="group">移动 / Android / iOS</span>
                                        <i className="arrow"></i>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="javascript:void(0)">
                                        <span className="group">云计算 / 大数据 / 容器</span>
                                        <i className="arrow"></i>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="javascript:void(0)">
                                        <span className="group">运维 / 测试 / 数据库</span>
                                        <i className="arrow"></i>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="javascript:void(0)">
                                        <span className="group">UI设计 / 3D动画 / 游戏</span>
                                        <i className="arrow"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="menu-list">
                                <div className="title"><p>前沿技术</p><span></span></div>
                                <ul className='list'>
                                    <a target="_blank" href="">微服务</a>
                                    <a target="_blank" href="">区块链</a>
                                    <a target="_blank" href="">以太坊</a>
                                    <a target="_blank" href="">人工智能</a>
                                    <a target="_blank" href="">机器学习</a>
                                    <a target="_blank" href="">深度学习</a>
                                    <a target="_blank" href="">计算机视觉</a>
                                    <a target="_blank" href="">自然语言处理</a>
                                    <a target="_blank" href="">数据分析&amp;挖掘</a>
                                </ul>
                                <div className="imgTextDesc">
                                    <div className="img-box">
                                        <img src="" alt=""/>
                                        <div className="content">
                                            <div className="title1">OpenCV+TensorFlow 入门人工智能图像处理</div>
                                            <div className="text">
                                                <div className="price">￥299.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img-box">
                                        <img src="" alt=""/>
                                        <div className="content">
                                            <div className="title1">OpenCV+TensorFlow 入门人工智能图像处理</div>
                                            <div className="text">
                                                <div className="price">￥299.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img-box">
                                        <img src="" alt=""/>
                                        <div className="content">
                                            <div className="title1">OpenCV+TensorFlow 入门人工智能图像处理</div>
                                            <div className="text">
                                                <div className="price">￥299.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img-box">
                                        <img src="" alt=""/>
                                        <div className="content">
                                            <div className="title1">OpenCV+TensorFlow 入门人工智能图像处理</div>
                                            <div className="text">
                                                <div className="price">￥299.00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Slider {...list} />
                </div>

            </div>
        )
    }
}

export default Home;