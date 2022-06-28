import { ConcreteSection } from "./ConcreteSection";
import { Item } from "./Item";
import { Section } from "./Section";
import { Store} from "./Store";

class Instantiator{
    static mainSections: Section[] = []
    static subSections: Section[] = []
    static store: Store | undefined = undefined
    static items: Item[] = []
    
    static createItemInSubsection(section: ConcreteSection, subSectionIdx: number, itemName: string){
        const item = new Item(itemName, section.getSubsections()[subSectionIdx]);
        (section.getSubsections()[subSectionIdx] as ConcreteSection).addSubsection(item)
        this.items.push(item)
    }

    static createItem(section: ConcreteSection, itemName: string){
        const item = new Item(itemName, section)
        section.addSubsection(item)
        this.items.push(item)
    }

    static createStoreStructure(){
        const store = new Store("Walmart");

        const mainSectionNames: string[] = ["Dairy", "Produce", "Meat", "Frozen", "Bakery"] 
        const subSectionNames = [
            ["A1", "A2", "A3", "A4"],
            ["B1", "B2", "B3"],
            ["C1", "C2", "C3", "C4"],
            ["D1", "D2"],
            []
        ]

        for (let i = 0; i < mainSectionNames.length; i ++){
            let mainSec = new ConcreteSection(mainSectionNames[i], undefined);
            store.section.addSubsection(mainSec);
            this.mainSections.push(mainSec);

            for (let j = 0; j < subSectionNames[i].length; j ++){
                let subSec = new ConcreteSection(subSectionNames[i][j], undefined)
                mainSec.addSubsection(subSec)
                this.subSections.push(subSec)
            }
        }

        let dairy = store.section.getSubsections()[0] as ConcreteSection
        this.createItemInSubsection(dairy, 0, "Milk")
        this.createItemInSubsection(dairy, 1, "Buttermilk")
        this.createItemInSubsection(dairy, 2, "Yogurt")
        this.createItemInSubsection(dairy, 2, "Kefir")
        this.createItemInSubsection(dairy, 3, "Butter")

        let produce = store.section.getSubsections()[1] as ConcreteSection
        this.createItemInSubsection(produce, 0, "Cucumbers")
        this.createItemInSubsection(produce, 1, "Onions")
        this.createItemInSubsection(produce, 2, "Tomatoes")

        let meat = store.section.getSubsections()[2] as ConcreteSection
        this.createItemInSubsection(meat, 0, "Pork")
        this.createItemInSubsection(meat, 1, "Beef")
        this.createItemInSubsection(meat, 2, "Chicken")
        this.createItemInSubsection(meat, 3, "Ground meat")

        /* Items in the Frozen Section */
        let frozen = store.section.getSubsections()[3] as ConcreteSection
        this.createItemInSubsection(frozen, 0, "Ice Cream")
        this.createItemInSubsection(frozen, 1, "Waffles")
        this.createItemInSubsection(frozen, 1, "Pizza")

        /* Items in the Bakery Section */
        let bakery = store.section.getSubsections()[4] as ConcreteSection
        this.createItem(bakery, "Bread")
        this.createItem(bakery, "Cake")
        this.createItem(bakery, "Muffins")

        this.store = store;
    }
}

export {Instantiator}