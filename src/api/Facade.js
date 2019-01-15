//Interface which retrieves data that needs to be rendered
import {items} from './variable';
class Facade {
    name = '';
    constructor(name){
        this.name = name;
    }
    nextVal = (type, index) => {
        return(items[this.name][type][index]);
    }

}

export default Facade;