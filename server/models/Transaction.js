
  // Define the KPI schema as a JavaScript object
  const TransactionSchema = {
    buyer: {
      type: "string",
      description: "Buyer",
    },
    amount: {
      type: "number",
      description: "Amount",
    },
    ProductIds: [{
      type: "object",
      description: "Product",
    }],
  };



  export default TransactionSchema;