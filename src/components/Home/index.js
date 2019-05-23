import React, { Component } from 'react';
import Item1 from '../../components/home/item1'
import Item2 from '../../components/home/item2'
import Item3 from '../../components/home/item3'
import Item4 from '../../components/home/item4'
class Home extends Component {
    constructor(props){
        super(props)

    }

    render(){
        return (
            <div className='home-container'>
                <Item1 />
                {/*新上好课*/}
                <Item2 />
                {/*新手入门*/}
                <Item3/>

                <Item4/>
            </div>
        )
    }
}

export default Home;