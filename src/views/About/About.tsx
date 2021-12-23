import React , {Component} from 'react'

import {Header} from '../../components/Header/Header'


class About extends Component{

    render(): React.ReactNode {
        return(
            <>
                <Header title='About'/>
                <div className='container'>
                    <h1>About Page</h1>
                </div>
            
            </>
        )
    }
}

export default About