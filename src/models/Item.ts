import { Section } from "./Section";

class Item extends Section{
    checked : boolean = false;
    
    constructor(name: string, parent: Section){
        super();
        this.name = name;
        this.parent = parent;
    }
    
    sortItemList(unorderedList: Item[]): [Item[], Item[]] {
        // console.log(`Item iput: ${this.name}`)
        // console.log(unorderedList)
        let ordered: Item[] = [];
        if (unorderedList.length != 0 
            && unorderedList.find((item) => item.name === this.name)) {
                ordered.push(this)
                unorderedList = unorderedList.filter((item) => item.name !== this.name)
            }
        // console.log(`Item return: ${this.name}`)
        // console.log([ordered, unorderedList])
        return [ordered, unorderedList]
    }

    getAisle(): string {
        var aisle = [];
        var parent = this.parent;
        while(parent){
            aisle.unshift(parent.name);
            parent = parent.parent;
        } 
        aisle.shift();
        const aislePath = aisle.reduce((prev, cur) =>  `${prev} - ${cur}`)
        return aislePath ? aislePath : ""
    }
    
}

export {Item}