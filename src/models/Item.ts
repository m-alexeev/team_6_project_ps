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

        if (this in unorderedList){
            ordered.push(this)
            unorderedList.filter((val) => {
                return val != this
            })
        }
        return [ordered, unorderedList]
    }
    
}

export {Item}