import React from "react";



type MenuProps = {
    _id? : string,
    name? : string,
    price? : number,
    image? : string
}

export const MenuDetails = ({_id,name,price,image}:MenuProps):JSX.Element =>{
    return (
        <div className="card-item">
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

