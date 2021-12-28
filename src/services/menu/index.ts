import { baseUrl} from "../../config";



export const menuItems = async () =>{
    const route:string = `${baseUrl}menus`
    var options: Object = {
        method: 'GET',
      };
    const response = await fetch(route,options)
    return await response.json()
}

export const detailsMenu = async (menuId:any) =>{
  const route:string = `${baseUrl}menu/${menuId}`
  var options: Object = {
    method: 'GET',
    headers : {
      'Content-Type' : 'application/json'
    }
  }
  const response = await fetch(route,options)
  return await response.json()
}