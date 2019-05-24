import React, {Component} from 'react';
import avatar from '../../images/item/leadavatar.jpg'
import otherImg from '../../images/item/otheravatar.jpg'
import { Popover } from 'antd';
class Item6 extends Component {
    render() {

        return (
            <div className='item6-box'>
                <h3 className="types-title">
                    <span className="tit-icon icon-star-l tit-icon-l"></span>
                        <em>吊</em>／<em>炸</em>／<em>天</em>／<em>全</em>／<em>明</em>／<em>星</em>
                    <span className="tit-icon icon-star-r tit-icon-r"></span>
                </h3>
                <div className="star-list">
                    <div className="lead-list">
                        <div className="lead">
                            <div className="lead-item-photo">
                                <img src={avatar} alt=""/>
                                <svg className='icon-svg'>
                                    <use xlinkHref='#iconhuangguan'></use>
                                </svg>
                            </div>
                            <div className="lead-item-name">
                                梨不开的桃子
                            </div>
                            <div className="lead-item-tit">风骚课程学霸</div>
                        </div>
                        <div className="lead">
                            <div className="lead-item-photo">
                                <img src={avatar} alt=""/>
                                <svg className='icon-svg'>
                                    <use xlinkHref='#iconhuangguan'></use>
                                </svg>
                            </div>
                            <div className="lead-item-name">
                                战渣渣
                            </div>
                            <div className="lead-item-tit">神秘解疑大神</div>
                        </div>
                        <div className="lead">
                            <div className="lead-item-photo">
                                <img src={avatar} alt=""/>
                                <svg className='icon-svg'>
                                    <use xlinkHref='#iconhuangguan'></use>
                                </svg>
                            </div>
                            <div className="lead-item-name">
                                量子位
                            </div>
                            <div className="lead-item-tit">智慧文章王者</div>
                        </div>
                        <div className="lead">
                            <div className="lead-item-photo">
                                <img src={avatar} alt=""/>
                                <svg className='icon-svg'>
                                    <use xlinkHref='#iconhuangguan'></use>
                                </svg>
                            </div>
                            <div className="lead-item-name">
                                EightXu
                            </div>
                            <div className="lead-item-tit">思学行第一土豪</div>
                        </div>
                    </div>

                    <div className="other-list">
                        <div className="other-item">
                            <a href="">
                                <Popover
                                    content={(
                                        <div className='other-style' style={{width:'202px',height:'90px'}}>
                                            <p className="title" style={{fontSize: '12px',
                                                lineHeight: '16px',
                                                fontWeight: 400}}>="风骚课程学霸"=</p>
                                            <p className="nickname" style={{
                                                fontSize: '14px',
                                                lineHeight: '24px',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap'
                                            }}>不爱吃胡萝卜的小兔子</p>
                                            <p className="desc" style={{
                                                fontSize: '12px',
                                                lineHeight: '16px',
                                                marginTop: '8px',
                                                fontWeight: 400
                                            }}>一周获得 66积分</p>
                                        </div>
                                    )}
                                >
                                    <img src={otherImg} alt=""/>
                                </Popover>
                            </a>
                        </div>
                        <div className="other-item">
                            <a href="">
                                <Popover
                                    content={(
                                        <div className='other-style' style={{width:'202px',height:'90px'}}>
                                            <p className="title" style={{fontSize: '12px',
                                                lineHeight: '16px',
                                                fontWeight: 400}}>="风骚课程学霸"=</p>
                                            <p className="nickname" style={{
                                                fontSize: '14px',
                                                lineHeight: '24px',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap'
                                            }}>不爱吃胡萝卜的小兔子</p>
                                            <p className="desc" style={{
                                                fontSize: '12px',
                                                lineHeight: '16px',
                                                marginTop: '8px',
                                                fontWeight: 400
                                            }}>一周获得 66积分</p>
                                        </div>
                                    )}
                                >
                                    <img src={otherImg} alt=""/>
                                </Popover>
                            </a>
                        </div>
                        <div className="other-item">
                            <a href="">
                                <Popover
                                    content={(
                                        <div className='other-style' style={{width:'202px',height:'90px'}}>
                                            <p className="title" style={{fontSize: '12px',
                                                lineHeight: '16px',
                                                fontWeight: 400}}>="风骚课程学霸"=</p>
                                            <p className="nickname" style={{
                                                fontSize: '14px',
                                                lineHeight: '24px',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap'
                                            }}>不爱吃胡萝卜的小兔子</p>
                                            <p className="desc" style={{
                                                fontSize: '12px',
                                                lineHeight: '16px',
                                                marginTop: '8px',
                                                fontWeight: 400
                                            }}>一周获得 66积分</p>
                                        </div>
                                    )}
                                >
                                    <img src={otherImg} alt=""/>
                                </Popover>
                            </a>
                        </div>
                        <div className="other-item">
                            <a href="">
                                <Popover
                                    content={(
                                        <div className='other-style' style={{width:'202px',height:'90px'}}>
                                            <p className="title" style={{fontSize: '12px',
                                                lineHeight: '16px',
                                                fontWeight: 400}}>="风骚课程学霸"=</p>
                                            <p className="nickname" style={{
                                                fontSize: '14px',
                                                lineHeight: '24px',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap'
                                            }}>不爱吃胡萝卜的小兔子</p>
                                            <p className="desc" style={{
                                                fontSize: '12px',
                                                lineHeight: '16px',
                                                marginTop: '8px',
                                                fontWeight: 400
                                            }}>一周获得 66积分</p>
                                        </div>
                                    )}
                                >
                                    <img src={otherImg} alt=""/>
                                </Popover>
                            </a>
                        </div>
                        <div className="other-item">
                            <a href="">
                                <Popover
                                    content={(
                                        <div className='other-style' style={{width:'202px',height:'90px'}}>
                                            <p className="title" style={{fontSize: '12px',
                                                lineHeight: '16px',
                                                fontWeight: 400}}>="风骚课程学霸"=</p>
                                            <p className="nickname" style={{
                                                fontSize: '14px',
                                                lineHeight: '24px',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap'
                                            }}>不爱吃胡萝卜的小兔子</p>
                                            <p className="desc" style={{
                                                fontSize: '12px',
                                                lineHeight: '16px',
                                                marginTop: '8px',
                                                fontWeight: 400
                                            }}>一周获得 66积分</p>
                                        </div>
                                    )}
                                >
                                    <img src={otherImg} alt=""/>
                                </Popover>
                            </a>
                        </div>
                        <div className="other-item">
                            <a href="">
                                <Popover
                                    content={(
                                        <div className='other-style' style={{width:'202px',height:'90px'}}>
                                            <p className="title" style={{fontSize: '12px',
                                                lineHeight: '16px',
                                                fontWeight: 400}}>="风骚课程学霸"=</p>
                                            <p className="nickname" style={{
                                                fontSize: '14px',
                                                lineHeight: '24px',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap'
                                            }}>不爱吃胡萝卜的小兔子</p>
                                            <p className="desc" style={{
                                                fontSize: '12px',
                                                lineHeight: '16px',
                                                marginTop: '8px',
                                                fontWeight: 400
                                            }}>一周获得 66积分</p>
                                        </div>
                                    )}
                                >
                                    <img src={otherImg} alt=""/>
                                </Popover>
                            </a>
                        </div>
                        <div className="other-item">
                            <a href="">
                                    <img src={otherImg} alt=""/>

                            </a>
                        </div>
                        <div className="other-item">
                            <a href="">
                                <img src={otherImg} alt=""/>

                            </a>
                        </div>
                        <div className="other-item">
                            <a href="">
                                <img src={otherImg} alt=""/>

                            </a>
                        </div>
                        <div className="other-item">
                            <a href="">
                                <img src={otherImg} alt=""/>

                            </a>
                        </div>
                        <div className="other-item">
                            <a href="">
                                <img src={otherImg} alt=""/>

                            </a>
                        </div>
                        <div className="other-item">
                            <a href="">
                                <img src={otherImg} alt=""/>

                            </a>
                        </div>
                        <div className="other-item">
                            <a href="">
                                <img src={otherImg} alt=""/>

                            </a>
                        </div>
                        <div className="other-item">
                            <a href="">
                                <img src={otherImg} alt=""/>

                            </a>
                        </div>
                        <div className="other-item">
                            <a href="">
                                <img src={otherImg} alt=""/>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item6;