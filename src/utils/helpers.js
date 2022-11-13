export const NumberFormat = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
// export const NumberFormat = (number) => {
//   return number.toLocaleString("en-IN", {
//     maximumSignificantDigits: 3,
//   })
// }
