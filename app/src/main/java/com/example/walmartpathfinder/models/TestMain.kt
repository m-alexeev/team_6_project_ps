package com.example.walmartpathfinder.models

class TestMain {
    companion object {
        @JvmStatic
        fun main(args: Array<String>) {
            Instantiator.createStoreStructure()
            println(Instantiator.items)
        }
    }
}