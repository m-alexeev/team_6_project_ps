package com.example.walmartpathfinder.models

class Instantiator {
    companion object {
        var mainSections = mutableListOf<Section>()
        var subSections = mutableListOf<Section>()
        var items = mutableListOf<Item>()

        /* Store structure with sections and subsections*/
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

            val dairy = store.section.getSubsections()[0] as ConcreteSection
            (dairy.getSubsections()[0] as ConcreteSection).addSubsection(Item("Milk",dairy.getSubsections()[0]))
            (dairy.getSubsections()[1] as ConcreteSection).addSubsection(Item("Buttermilk",dairy.getSubsections()[1]))
            (dairy.getSubsections()[2] as ConcreteSection).addSubsection(Item("Yogurt",dairy.getSubsections()[2]))
            (dairy.getSubsections()[3] as ConcreteSection).addSubsection(Item("Butter",dairy.getSubsections()[3]))


            val produce = store.section.getSubsections()[1] as ConcreteSection
            (produce.getSubsections()[0] as ConcreteSection).addSubsection(Item("Cucumbers",produce.getSubsections()[0]))
            (produce.getSubsections()[1] as ConcreteSection).addSubsection(Item("Onions",produce.getSubsections()[1]))
            (produce.getSubsections()[2] as ConcreteSection).addSubsection(Item("Tomatoes",produce.getSubsections()[2]))

            val meat = store.section.getSubsections()[2] as ConcreteSection
            (meat.getSubsections()[0] as ConcreteSection).addSubsection(Item("Pork", meat.getSubsections()[0]))
            (meat.getSubsections()[1] as ConcreteSection).addSubsection(Item("Beef", meat.getSubsections()[1]))
            (meat.getSubsections()[2] as ConcreteSection).addSubsection(Item("Chicken", meat.getSubsections()[2]))
            (meat.getSubsections()[4] as ConcreteSection).addSubsection(Item("Ground meat", meat.getSubsections()[4]))

            val frozen = store.section.getSubsections()[3] as ConcreteSection
            (frozen.getSubsections()[0] as ConcreteSection).addSubsection(Item("Ice Cream", frozen.getSubsections()[0]))
            (frozen.getSubsections()[1] as ConcreteSection).addSubsection(Item("Waffles", frozen.getSubsections()[1]))
            (frozen.getSubsections()[1] as ConcreteSection).addSubsection(Item("Pizza", frozen.getSubsections()[1]))

            val bakery = store.section.getSubsections()[4] as ConcreteSection
            bakery.addSubsection(Item("Bread", bakery))
            bakery.addSubsection(Item("Cake", bakery))
            bakery.addSubsection(Item("Muffins",bakery))

            return store
        }

        @JvmStatic
        fun main(args: Array<String>) {
            var walmart = createStoreStructure()
            println(mainSections)
            println(subSections)
            println(items)

            TODO("demo use of generateList() on an item list")
        }
    }
}
