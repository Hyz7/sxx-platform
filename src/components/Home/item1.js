import React,{Component} from 'react'
import Slider from "../../common/myswiper/slider";
import imgHot from "../../images/banner-bottom/new-path.png";
import img from "../../images/zhanwei.png";
import img1 from "../../images/banner/1.jpg";
import img2 from "../../images/banner/2.jpg";

class Item1 extends Component{
    constructor(props){
        super(props)
        this.state={
            tabStatus:''
        }
    }
    changeStatus=(status)=>{
        this.setState({tabStatus:status})
    }
    render(){
        const list=[
            {
                bannerId:1,
                bannerImage:img1
            },
            {
                bannerId:2,
                bannerImage:img2
            }
        ]
        const color='rgba(0,98,225,0.1)'
        const { tabStatus } =this.state
        return (
            <div className="item1-box" style={{background: `linear-gradient(${color}, white)`}}>
                <div className="navbar-container" onMouseLeave={()=>this.setState({tabStatus:''})}>
                    <div className="menubar" >
                        <div className="menuContent"  >
                            <div className="item" onMouseOver={()=>this.changeStatus('a')}>
                                <a href="javascript:void(0)">
                                    <span className="group">前沿 / 区块链 / 人工智能</span>
                                    <i className="arrow"></i>
                                </a>
                                {tabStatus=='a'&&<div className="menu-list" >
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
                                </div>}
                            </div>
                            <div className="item" onMouseOver={()=>this.setState({tabStatus:'b'})}>
                                <a href="javascript:void(0)">
                                    <span className="group">前端 / 小程序 / JS</span>
                                    <i className="arrow"></i>
                                </a>
                                {tabStatus=='b'&&<div className="menu-list" >
                                    <div className="title"><p>前端开发</p><span></span></div>
                                    <ul className='list'>
                                        <a target="_blank" href="">HTML/CSS</a>
                                        <a target="_blank" href="">JavaScript</a>
                                        <a target="_blank" href="">Vue.js</a>
                                        <a target="_blank" href="">React.JS</a>
                                        <a target="_blank" href="">Angular</a>
                                        <a target="_blank" href="">Node.js</a>
                                        <a target="_blank" href="">jQuery</a>
                                        <a target="_blank" href="">Bootstrap</a>
                                        <a target="_blank" href="">Sass/Less</a>
                                        <a target="_blank" href="">WebApp</a>
                                        <a target="_blank" href="">小程序</a>
                                        <a target="_blank" href="">前端工具</a>
                                        <a target="_blank" href="">CSS</a>
                                        <a target="_blank" href="">Html5</a>
                                        <a target="_blank" href="">CSS3</a>
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
                                </div>}
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
                    </div>
                    <div className="slider-box">
                        <Slider
                            items={list}
                            speed={1}
                            delay={3}
                            pause={true}
                            autoplay={true}
                            dots={true}
                        />
                        <div className="slider-bottom">
                            <img src={imgHot} alt=""/>
                            <div className="item">
                                <i className='i-icon icon1'></i>
                                <div className="tit">Web前端攻城狮</div>
                                <div className="desc">从未接触编程也可以学好</div>
                            </div>
                            <div className="item">
                                <i className='i-icon icon2'></i>
                                <div className="tit">Java攻城狮</div>
                                <div className="desc">综合就业排名第一</div>
                            </div>
                            <div className="item">
                                <i className='i-icon icon3'></i>
                                <div className="tit">Python攻城狮</div>
                                <div className="desc">迅速崛起的主流编程语言</div>
                            </div>
                            <div className="item">
                                <i className='i-icon icon4'></i>
                                <div className="tit">Android攻城狮</div>
                                <div className="desc">移动设备市场份额第一</div>
                            </div>
                            <div className="item">
                                <i className='i-icon icon5'></i>
                                <div className="tit">PHP攻城狮</div>
                                <div className="desc">最为广泛的Web后端开发语言</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="item1-2">
                    <h3 className="types-title">
                        <span className="tit-icon icon-shizhan-l tit-icon-l"></span>
                        <em>实</em>／<em>战</em>／<em>推</em>／<em>荐</em>
                        <span className="tit-icon icon-shizhan-r tit-icon-r"></span>
                    </h3>
                    <div className="types-content">
                        <div className="item">
                            <div className="course-card-top">
                                <img src={img} alt=""/>
                                <div className="course-label">
                                    <label>ReactJS</label>
                                    <label>VueJS</label>
                                </div>
                            </div>
                            <div className="course-card-content">
                                <div className="course-card-name">
                                    全面系统python3入门+进阶课程 零基础学python 小白也能听懂
                                </div>
                                <div className="course-card-bottom">
                                    <div className="course-card-info">
                                        <span>实战</span>
                                        <span>初级</span>
                                        <span>
                                                <svg className='icon-svg'>
                                                    <use xlinkHref='#iconyonghuming'></use>
                                                </svg>
                                                8439
                                            </span>
                                        <span className="course-star-box">
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                            </span>
                                    </div>
                                    <div className="course-card-price">
                                        ￥366.00
                                        <span className="sales-tip">满减</span>
                                        <span className="sales-tip sales-tip1">分享有礼</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-card-top">
                                <img src={img} alt=""/>
                                <div className="course-label">
                                    <label>ReactJS</label>
                                    <label>VueJS</label>
                                </div>
                            </div>
                            <div className="course-card-content">
                                <div className="course-card-name">
                                    全面系统python3入门+进阶课程 零基础学python 小白也能听懂
                                </div>
                                <div className="course-card-bottom">
                                    <div className="course-card-info">
                                        <span>实战</span>
                                        <span>初级</span>
                                        <span>
                                                <svg className='icon-svg'>
                                                    <use xlinkHref='#iconyonghuming'></use>
                                                </svg>
                                                8439
                                            </span>
                                        <span className="course-star-box">
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                            </span>
                                    </div>
                                    <div className="course-card-price">
                                        ￥366.00
                                        <span className="sales-tip">满减</span>
                                        <span className="sales-tip sales-tip1">分享有礼</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-card-top">
                                <img src={img} alt=""/>
                                <div className="course-label">
                                    <label>ReactJS</label>
                                    <label>VueJS</label>
                                </div>
                            </div>
                            <div className="course-card-content">
                                <div className="course-card-name">
                                    全面系统python3入门+进阶课程 零基础学python 小白也能听懂
                                </div>
                                <div className="course-card-bottom">
                                    <div className="course-card-info">
                                        <span>实战</span>
                                        <span>初级</span>
                                        <span>
                                                <svg className='icon-svg'>
                                                    <use xlinkHref='#iconyonghuming'></use>
                                                </svg>
                                                8439
                                            </span>
                                        <span className="course-star-box">
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                            </span>
                                    </div>
                                    <div className="course-card-price">
                                        ￥366.00
                                        <span className="sales-tip">满减</span>
                                        <span className="sales-tip sales-tip1">分享有礼</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-card-top">
                                <img src={img} alt=""/>
                                <div className="course-label">
                                    <label>ReactJS</label>
                                    <label>VueJS</label>
                                </div>
                            </div>
                            <div className="course-card-content">
                                <div className="course-card-name">
                                    全面系统python3入门+进阶课程 零基础学python 小白也能听懂
                                </div>
                                <div className="course-card-bottom">
                                    <div className="course-card-info">
                                        <span>实战</span>
                                        <span>初级</span>
                                        <span>
                                                <svg className='icon-svg'>
                                                    <use xlinkHref='#iconyonghuming'></use>
                                                </svg>
                                                8439
                                            </span>
                                        <span className="course-star-box">
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                            </span>
                                    </div>
                                    <div className="course-card-price">
                                        ￥366.00
                                        <span className="sales-tip">满减</span>
                                        <span className="sales-tip sales-tip1">分享有礼</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-card-top">
                                <img src={img} alt=""/>
                                <div className="course-label">
                                    <label>ReactJS</label>
                                    <label>VueJS</label>
                                </div>
                            </div>
                            <div className="course-card-content">
                                <div className="course-card-name">
                                    全面系统python3入门+进阶课程 零基础学python 小白也能听懂
                                </div>
                                <div className="course-card-bottom">
                                    <div className="course-card-info">
                                        <span>实战</span>
                                        <span>初级</span>
                                        <span>
                                                <svg className='icon-svg'>
                                                    <use xlinkHref='#iconyonghuming'></use>
                                                </svg>
                                                8439
                                            </span>
                                        <span className="course-star-box">
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                                <svg className='icon-svg'><use xlinkHref='#icongongneng_xingxing-'></use></svg>
                                            </span>
                                    </div>
                                    <div className="course-card-price">
                                        ￥366.00
                                        <span className="sales-tip">满减</span>
                                        <span className="sales-tip sales-tip1">分享有礼</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Item1