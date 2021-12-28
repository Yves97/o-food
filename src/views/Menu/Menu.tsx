import React, { useState,useEffect } from 'react'

import {useNavigate} from 'react-router-dom'

import {Header} from '../../components/Header/Header'
import {MenuList} from '../../components/Menu/MenuList'
import {menuItems} from '../../services/menu'

interface Item {
    _id : string,
    name : string,
    image : string,
    price : number
}

const Menu: React.FC = ():JSX.Element =>{

    const [list,setList] = useState([])
    var navigate = useNavigate()

    useEffect(()=>{
        _getMenu()
    },[])
 
    const _getMenu  = async () => {
        const data = await menuItems()
        setList(data)
    }

    const _details = (id:string|number) => navigate(`/menu/${id}`)

    const _renderMenu = ()  => {
        if(list.length === 0){
            return (<p>Loading...</p>)
        }
        else{
            return (
                <div className='row'>
                   {list.map((item:Item)=>{
                       return(
                        <div className="col-md-3" key={item._id} onClick={() => _details(item._id)}>
                            <MenuList name={item.name} price={item.price} image={item.image} />
                        </div>
                       )
                   })}
                </div>
            )
        } 
    }
        
    
    return (
        <>  
            <Header title="Menu"/>
            <div className='container'>
                <h1>Nos Menu</h1>
                {_renderMenu()}
            </div>
        </>
    )
}

export default Menu