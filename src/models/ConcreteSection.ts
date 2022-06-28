import { Section } from "./Section"
import { Item } from './Item'

class ConcreteSection extends Section{
    subsections: Array<Section> = [];

    constructor(name: string, parent: Section | undefined){
        super();
        this.name = name;
        this.parent = parent ;
    }

    addSubsection(subsection: Section){
        this.subsections.push(subsection);
        subsection.setParent(this);
    }

    getSubsections(): Array<Section>{
        return this.subsections;
    }

    sortItemList(unorderedList: Array<Item>): [Array<Item>, Array<Item>] {
        // console.log(`Concrete Section input: ${this.name}`)
        // console.log(unorderedList)
        let unordered: Array<Item> = [];
        let ordered: Array<Item> = [];

        for (let i = 0; i < unorderedList.length; i++){
            const item = unorderedList[i]
            if (item.isDescendantOf(this)){
                ordered.push(item)
            }else{
                unordered.push(item);
            }
        }

        let subsectionUnordered = ordered;
        ordered = [];
        for (let i = 0; i < this.subsections.length; i++){
            const subsection = this.subsections[i]
            let listPair = subsection.sortItemList(subsectionUnordered)
            ordered = ordered.concat(listPair[0])
            subsectionUnordered = listPair[1]
            if (subsectionUnordered.length == 0) {
                break;
            }
        }
        // console.log(`Concrete Section return: ${this.name}`)
        // console.log([ordered, unordered])
        return [ordered, unordered]
    }
}

export {ConcreteSection}