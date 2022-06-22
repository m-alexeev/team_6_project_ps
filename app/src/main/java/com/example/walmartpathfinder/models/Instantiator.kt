package com.example.walmartpathfinder.models

class Instantiator {
    companion object{
        fun createStoreStructure(): Store{
            val store = Store("Walmart");
            val mainCategories = listOf<String>("Beverages", "Bakery", "Canned Foods", "Dairy", "Dry/Baking Goods", "Frozen Foods", "Meat", "Produce", "Cleaners", "Paper Goods", "Personal Care");
            val subCategories = listOf<Collection<String>>(
                listOf("Coffee / Tea", "Juice", "Soda"),
                listOf("Breads", "Bagels", "Muffins"),
                listOf("Vegetables", "Sauces", "Soup"),
                listOf("Milk", "Cheese", "Eggs"),
                listOf("Cereal", "Flour", "Pasta"),
                listOf("Vegetables", "Meals", "Ice Cream"),
                listOf("Poultry", "Beef", "Pork"),
                listOf("Fruits", "Vegetables", "Organic"),
                listOf("Detergent", "All Purpose", "Dishwasher Detergent"),
                listOf("Paper Towels", "Toilet Paper", "Sandwich Bags"),
                listOf("Shampoo", "Soap", "Shaving Cream"),
                listOf("Fish", "Shrimp", "Crawfish")
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
    }
}
