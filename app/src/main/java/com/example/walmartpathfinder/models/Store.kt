package com.example.walmartpathfinder.models

class Store(name: String) {
    private var section: MutableList<Section> = mutableListOf();
    private var storeName: String = name;
}