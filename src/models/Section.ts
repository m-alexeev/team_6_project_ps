import { Item } from "./Item";

abstract class Section{
    name: string | undefined;
    parent: Section | undefined;
    
    isDescendantOf(section: Section): Boolean{
        let cur = this as Section;
        while(cur.parent != null){
            cur = cur.parent;
            if (cur == section){
                return true;
            }
        }
        return false;
    } 

    setParent(parent: Section): void{
        this.parent = parent;
    }

    abstract sortItemList(unorderedList: Array<Item>): [Array<Item>, Array<Item>]
}


export {Section};