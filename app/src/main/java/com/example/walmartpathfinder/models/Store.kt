package com.example.walmartpathfinder.models

class Store(name: String) {
    private var storeName: String = name
    var section: ConcreteSection = ConcreteSection("Store")
}