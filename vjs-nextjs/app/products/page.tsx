import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Wireless monitoring systems, level sensors, PLC control panels, IoT gateways and robotics — engineered, tested and field-proven for modern industry.",
};

export default function Page() {
  return <ProductsClient />;
}
