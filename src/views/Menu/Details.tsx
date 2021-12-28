import React,{useEffect, useState} from "react"
import { useParams } from "react-router-dom"

import { MenuDetails } from "../../components/Menu/MenuDetails"
import { Header } from "../../components/Header/Header"
import { detailsMenu } from "../../services/menu"



interface IState{
    price? : number,
    name? : string,
    image?:string,
    _id?:string
}

const DetailsMenu : React.FC = ():JSX.Element =>{
    
    const [menu,setMenu] = useState<IState>()

    var params = useParams()

    useEffect(()=>{
        getMenu()
    },[])
    
    const getMenu = async () => {
        const response = await detailsMenu(params.id)
        setMenu(response)
    }


    const renderItem = ():JSX.Element =>{
        if(!menu){
            return <p>Loading</p>
        }
        return(
            <>
            <div className="card-item">
                <div className="box-img-d">
                    <img src={menu.image} alt=""  className="img-menu-d"/>
                </div>
                <div className="box-info-d">
                    <h3>{menu.name}</h3>
                    <p>{menu.price}</p>
                </div>
            </div>
            <button>Acheter</button>
            </>
        )
    }

    
    console.log(params)
    return(
        <React.Fragment>
            <Header title="Details"/>
            <div className="container main-content-d">
               {renderItem()}
            </div>
        </React.Fragment>
    )

}

export default DetailsMenu