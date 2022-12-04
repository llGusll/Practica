import { menuData } from "./menuData";

export const getMenuByPublisher = (publisher) => {

    const validPublisher = ['diabeticos', 'hipertencion', 'obesidad'];
    
    if(!validPublisher.includes(publisher)){
        throw new Error(`publisher "${publisher}" no es correcto`);
    }

    return menuData.filter(menu => menu.publisher === publisher);
}
