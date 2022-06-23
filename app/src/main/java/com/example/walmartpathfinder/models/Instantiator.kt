package com.example.walmartpathfinder.models

class Instantiator {
    companion object {
        var mainSections = mutableListOf<Section>()
        var subSections = mutableListOf<Section>()
        var items = mutableListOf<Item>()


        /**
         * Creates an Item for a section in the indexed subsection
         * Adds the created Item to the global var items list
         */
        fun createItemInSubsec(section: ConcreteSection, subSecIdx: Int, itemName: String) {
            val item = Item(itemName, section.getSubsections()[subSecIdx])
            (section.getSubsections()[subSecIdx] as ConcreteSection).addSubsection(item)
            items.add(item)
        }


        /**
         * Creates an Item for a section directly
         * Adds the created Item to the global var items list
         */
        fun createItem(section: ConcreteSection, itemName: String) {
            val item = Item(itemName, section)
            section.addSubsection(item)
            items.add(item)
        }


        /**
         *  Store structure with sections and subsections
         */
        fun createStoreStructure(): Store {
            val store = Store("Walmart")

            val mainSecNames = listOf<String>("Dairy", "Produce", "Meat", "Frozen", "Bakery")
            val subSecNames = listOf<Collection<String>>(
                listOf("A1", "A2", "A3", "A4"),
                listOf("B1", "B2", "B3"),
                listOf("C1", "C2", "C3", "C4"),
                listOf("D1", "D2"),
                listOf()
            )


            /* Add all section names and subsections names to store */
            for ((index, mainSecName) in mainSecNames.withIndex()) {
                val mainSec = ConcreteSection(mainSecName)
                store.section.addSubsection(mainSec)
                mainSections.add(mainSec)

                for (subSecName in subSecNames[index]) {
                    val subSec = ConcreteSection(subSecName)
                    mainSec.addSubsection(subSec)
                    subSections.add(subSec)
                }
            }

            /* Items in the Dairy section */
            val dairy = store.section.getSubsections()[0] as ConcreteSection
            createItemInSubsec(dairy, 0, "Milk")
            createItemInSubsec(dairy, 1, "Buttermilk")
            createItemInSubsec(dairy, 2, "Yogurt")
            createItemInSubsec(dairy, 2, "Kefir")
            createItemInSubsec(dairy, 3, "Butter")

            /* Items in the Produce section */
            val produce = store.section.getSubsections()[1] as ConcreteSection
            createItemInSubsec(produce, 0, "Cucumbers")
            createItemInSubsec(produce, 1, "Onions")
            createItemInSubsec(produce, 2, "Tomatoes")

            /* Items in the Poultry section */
            val meat = store.section.getSubsections()[2] as ConcreteSection
            createItemInSubsec(meat, 0, "Pork")
            createItemInSubsec(meat, 1, "Beef")
            createItemInSubsec(meat, 2, "Pork")
            createItemInSubsec(meat, 3, "Ground meat")

            /* Items in the Frozen Section */
            val frozen = store.section.getSubsections()[3] as ConcreteSection
            createItemInSubsec(frozen, 0, "Ice Cream")
            createItemInSubsec(frozen, 1, "Waffles")
            createItemInSubsec(frozen, 1, "Pizza")

            /* Items in the Bakery Section */
            val bakery = store.section.getSubsections()[4] as ConcreteSection
            createItem(bakery, "Bread")
            createItem(bakery, "Cake")
            createItem(bakery, "Muffins")

            return store
        }

        @JvmStatic
        fun main(args: Array<String>) {
            var walmart = createStoreStructure()
            /*
            println(mainSections)
            println(subSections)
            println(items)
             */

            // demo use of sortItemList() on an item list
            //val itemIdx = listOf<Int>(16,5,12,3,1,9,10)
            val itemIdx = listOf<Int>(3,2,1)

            var itemList = mutableListOf<Item>()
            for (idx in itemIdx) {
                itemList.add(items[idx])
            }
            println(itemList)

            var pair = walmart.section.sortItemList(itemList)
            println(pair.first)
        }
    }
}
