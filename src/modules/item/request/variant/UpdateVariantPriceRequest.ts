export default interface UpdateVariantPriceRequest {
  /**
   * Shopee's unique identifier for an item. Please input the item_id of an item to be changed.
   */
  item_id: Number,
  /**
   * Shopee's unique identifier for an item. Please input the item_id of an item to be changed.
   */
  variation_id?: Number,
  /**
   * Specify the revised price of one variation of the item.
   */
  price: Number,
}