package com.example.walmartpathfinder.models

class Instantiator {
    companion object{
        fun createStoreStructure(): Store{
            val store = Store("Walmart");

            val mainSections = listOf<String>("Dairy", "Produce", "Meat", "Frozen", "Bakery");
            val subSections = listOf<Collection<String>>(
                listOf("A1", "A2", "A3", "A4"),
                listOf("B1", "B2", "B3"),
                listOf("C1", "C2", "C3", "C4"),
                listOf("D1", "D2"),
                listOf()
            );

            for ((index, value) in mainSections.withIndex()){
                val mainSec = ConcreteSection(value);
                store.section.addSubsection(mainSec)

                for (subSec in subSections[index]){
                    mainSec.addSubsection(ConcreteSection(subSec));
                }
            }
            return store;
        }
        @JvmStatic
        fun main(args: Array<String>) {
            var walmart = createStoreStructure()
            println((walmart.section.subsections[3] as ConcreteSection).subsections)
        }
    }
}
