import React, {Component} from 'react';
import Swiper from 'react-id-swiper'

import avatar from '../../images/item5/avatar.jpg'
class Item5 extends Component {
    render() {
        const params = {
            slidesPerView: 5,
            spaceBetween: 20,
            slidesPerGroup: 5,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-right',
                prevEl: '.swiper-button-left'
            }
        }
        const swiperData=[
            {
                img:avatar,
                name:'liuyubobobo',
                title:'全栈工程师',
                p:'创业者，全栈工程师，持续学习者。对技术开发，产品设计、前后端，ios，html5，智能算法等领域均有接触；拥有多款独立App作品；对一切可编程的东西有浓厚兴趣，对游戏编程格外感兴趣。相信编程改变一切。'
            },
            {
                img:avatar,
                name:'枫荇',
                title:'JAVA开发工程师',
                p:'我是枫荇，互联网公司的系统架构组技术负责人，负责公司整体的架构，包括基础架构、中间件开发和PaaS平台架构。擅长分布式微服务系统以及其周边生态系统的架构和中间件，包括全链路监控平台、微服务网关等技术平台。'
            },
            {
                img:avatar,
                name:'ustbhuangyi',
                title:'前端工程师',
                p:'北京科技大学毕业，计算机专业硕士。对前端工程化，前后端性能优化有丰富的经验。曾任职百度、滴滴，现担任Zoom前端架构师。慕课网明星讲师，Vue.js 布道者，《Vue.js 技术揭秘》独立作者，《Vue.js 权威指南》主要作者。开源项目 better-scroll 作者，并主导滴滴开源项目 cube-ui，建立团队技术博客。'
            },
            {
                img:avatar,
                name:'2',
                title:'前端工程师',
                p:'...'
            },
            {
                img:avatar,
                name:'3',
                title:'python开发工程师',
                p:'...'
            },
            {
                img:avatar,
                name:'3',
                title:'python开发工程师',
                p:'...'
            },
        ]
        return (
            <div className='item5-box'>
                {/*<img src={imgbg} alt=""/>*/}
                <h3 className="types-title">
                    <span className="tit-icon icon-teacher-l tit-icon-l"></span>
                    <em>思</em>／<em>学</em>／<em>行</em>／<em>精</em>／<em>英</em>／<em>名</em>／<em>师</em>
                    <span className="tit-icon icon-teacher-r tit-icon-r"></span>
                    <a href="" className="types-title-more" target="_blank">
                        <span>查看更多</span>
                        <svg className='icon-svg'>
                            <use xlinkHref='#iconyoujiantou'></use>
                        </svg>
                    </a>
                </h3>
                <div className="Swiper-box">
                    <Swiper {...params}>
                        {swiperData.map((item,index)=>{
                            return (
                                <a className="lecturer-item" key={index}>
                                    <img src={item.img} alt=""/>
                                    <div className="lecturer-name">{item.name}</div>
                                    <div className="lecturer-title">{item.title}</div>
                                    <div className="lecturer-p">
                                        {item.p}
                                    </div>
                                </a>
                            )
                        })}
                    </Swiper>
                </div>

            </div>
        );
    }
}

export default Item5;