package com.example.walmartpathfinder.models

class Store(name: String) {
    /* Store Information */
    private var name: String = name
    var rootSection: ConcreteSection = ConcreteSection("Store")
}