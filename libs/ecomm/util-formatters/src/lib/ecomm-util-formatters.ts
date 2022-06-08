export function formattedPrice(price:any): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default formattedPrice