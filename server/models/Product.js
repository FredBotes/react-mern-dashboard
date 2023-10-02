
  // Define the KPI schema as a JavaScript object
  const ProductSchema = {
    price: {
      type: "number",
      description: "Total price in USD",
    },
    expense: {
      type: "number",
      description: "Total expense in USD",
    },
    transactions: [{
      type: "object",
      description: "Transaction",
    }],
  };



  export default ProductSchema;
  