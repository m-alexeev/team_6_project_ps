package com.example.walmartpathfinder

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.walmartpathfinder.models.Item
import kotlinx.android.synthetic.main.shopping_item.view.*

class ShoppingListAdapter(
    private val shoppingList: MutableList<Item>
): RecyclerView.Adapter<ShoppingListAdapter.ShoppingListViewHolder>() {
    class ShoppingListViewHolder(itemView: View): RecyclerView.ViewHolder(itemView){

    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ShoppingListViewHolder {
        return ShoppingListViewHolder(
            LayoutInflater.from(parent.context).inflate(
                R.layout.shopping_item,
                parent,
                false
            )
        )
    }

    fun addItems(items: List<Item>){
        items.forEach{
            item->shoppingList.add(item)
        }
        notifyDataSetChanged()
    }

    override fun onBindViewHolder(holder: ShoppingListViewHolder, position: Int) {
        var currentItem = shoppingList[position]
        holder.itemView.apply {
            itemText.text = currentItem.getName()
        }
    }

    override fun getItemCount(): Int {
        return  shoppingList.size
    }
}