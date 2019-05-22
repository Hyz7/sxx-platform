import {Component} from "react";
import img from "../../images/zhanwei.png";
import React from "react";

class Item3 extends Component{
    render(){
        return (
            <div className="item3-box">
                <h3 className="types-title">
                    <span className="tit-icon icon-job-l tit-icon-l"></span>
                    <em>新</em>／<em>手</em>／<em>入</em>／<em>门</em>
                    <span className="tit-icon icon-job-r tit-icon-r"></span>
                </h3>
                <div className="item3-content">
                    <div className="adv-box">
                        <div className="adv">
                            <img src={img} alt=""/>
                            <div className="adv-content">
                                <div className="adv-tit">站上微信小程序风口，实现职业华丽转身</div>
                                <div className="adv-desc">入门技能+项目开发，逐步深入学习微信小程序开发</div>
                            </div>
                        </div>
                        <div className="adv">
                            <img src={img} alt=""/>
                            <div className="adv-content">
                                <div className="adv-tit">慕课微课</div>
                                <div className="adv-desc">超值课程最低一元体验</div>
                            </div>
                        </div>
                    </div>
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
                    </div>
                </div>
            </div>
        )
    }
}
export default Item3