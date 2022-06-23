package com.example.walmartpathfinder.models

class Store(name: String) {
    /* Store Information */
    private var storeName: String = name
    var section: ConcreteSection = ConcreteSection("Store")
}