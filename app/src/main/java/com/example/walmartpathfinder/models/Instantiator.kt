package com.example.walmartpathfinder.models

class Instantiator {
    companion object {
        var mainSections = mutableListOf<Section>()
        var subSections = mutableListOf<Section>()
        var items = mutableListOf<Item>()

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

            TODO("Set up items")

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
