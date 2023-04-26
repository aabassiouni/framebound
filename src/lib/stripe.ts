
import Stripe from "stripe"

console.log("STRIPE_API_KEY", process.env.STRIPE_API_KEY)
export const stripe: Stripe = new Stripe(process.env.STRIPE_API_KEY || "", {
  apiVersion: "2022-11-15",
  typescript: true,
});

