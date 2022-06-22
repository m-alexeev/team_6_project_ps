package com.example.walmartpathfinder.models

class Instantiator {
    companion object{
        fun createStoreStructure(): Store{
            val store = Store("Walmart");
            val mainCategories = listOf("Dairy","Produce", "Meat", "Frozen", "Bakery", "Checkout", "Entrance");
            // Only Dairy, Produce, Meat, and Frozen sections have subsections
            val subCategories = listOf<Collection<String>>(
                listOf("A1", "A2", "A3", "A4"),
                listOf("B1", "B2", "B3"),
                listOf("C1", "C2"),
                listOf("D1", "D2", "D3", "D4"),
            );
            for ((index, value) in mainCategories.withIndex()){
                val mainCat = ConcreteSection(value);
                for (subCat in subCategories[index]){
                    mainCat.addSubCategory(ConcreteSection(subCat));
                }
                store.addSection(mainCat);
            }
            return store;
        }

        fun createShoppingItems(store: Store) {
            // Create some items for each category in the store (Messy but this doesnt matter)
            val dairy = store.sections[0] as ConcreteSection
            dairy.addSubCategory(Item("Milk"))
            dairy.addSubCategory(Item("Eggs"))
            dairy.addSubCategory(Item("Yogurt"))

            val produce = store.sections[1] as ConcreteSection
            produce.addSubCategory(Item("Cucumbers"))
            produce.addSubCategory(Item("Onions"))
            produce.addSubCategory(Item("Tomatoes"))

            val meat = store.sections[2] as ConcreteSection
            meat.addSubCategory(Item("Pork"))
            meat.addSubCategory(Item("Beef"))
            meat.addSubCategory(Item("Chicken"))

            val frozen = store.sections[3] as ConcreteSection
            frozen.addSubCategory(Item("Ice Cream"))
            frozen.addSubCategory(Item("Waffles"))
            frozen.addSubCategory(Item("Pizza"))

            val bakery = store.sections[4] as ConcreteSection
            bakery.addSubCategory(Item("Bread"))
            bakery.addSubCategory(Item("Cake"))
            bakery.addSubCategory(Item("Muffins"))
        }

        fun createShoppingList(): List<Item>{
            var shoppingList = listOf<Item>();
            // Pull random objects from hierarchy


            return shoppingList
        }
    }
}
