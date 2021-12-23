import React,{Component} from "react";

//component
import {Header} from '../../components/Header/Header'

class Home extends Component { 
    render(): React.ReactNode{
        return(
            <>
                <Header title="Home"/>
                <h1>Home page</h1>
            </>
        )
    }
}

export default Home