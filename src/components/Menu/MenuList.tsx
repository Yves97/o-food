import React from "react"


type MenuListProps = {
    id? : string,
    name : string,
    description? : string,
    image : string,
    price: number,
    dishies? : string[]
}


export const MenuList = ({id,name,description,image,price,dishies}: MenuListProps) =>{
    return(
        <div className="card-menu">
            <div className="img-menu">
                <img src={image} alt="" className="img-fluid" />
            </div>
            <div className="card-menu-info">
                <h3>{name}</h3>
            </div>
            <div className="card-menu-price">
                <p>{price} XOF</p>
            </div>
        </div>
    )
}