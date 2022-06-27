import { ConcreteSection } from "./ConcreteSection";

class Store{
    storeName: string
    section: ConcreteSection
    constructor(name: string){
        this.storeName = name;
        this.section = new ConcreteSection(name, undefined);
    }

}
export {Store}