import { Section } from "./Section";

class Item extends Section{
    checked: boolean;
    
    constructor(name: string, parent: Section){
        super();
        this.name = name;
        this.parent = parent;
        this.checked = false;
    }
    
    sortItemList(unorderedList: Item[]): [Item[], Item[]] {
        let ordered: Item[] = [];
        if (unorderedList.filter((item) => item.name === this.name)){
            ordered.push(this)
        }
        return [ordered, unorderedList]
    }
    
}

export {Item}