export default function validateShop(shop: string): boolean {
  const shopUrlRegex: RegExp = /(https|http)\:\/\/[a-zA-Z0-9][a-zA-Z0-9\-]*\.myshopify\.com[\/]*$/;
  return shopUrlRegex.test(shop);
}