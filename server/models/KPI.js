// Define the day schema as a JavaScript object
const daySchema = {
    date: {
      type: "string",
      description: "Date in YYYY-MM-DD format",
    },
    revenue: {
      type: "number",
      description: "Revenue in USD",
    },
    expenses: {
      type: "number",
      description: "Expenses in USD",
    },
  };
  
  // Define the month schema as a JavaScript object
  const monthSchema = {
    month: {
      type: "string",
      description: "Month name",
    },
    revenue: {
      type: "number",
      description: "Revenue in USD",
    },
    expenses: {
      type: "number",
      description: "Expenses in USD",
    },
    operationalExpenses: {
      type: "number",
      description: "Operational expenses in USD",
    },
    nonOperationalExpenses: {
      type: "number",
      description: "Non-operational expenses in USD",
    },
  };
  
  // Define the KPI schema as a JavaScript object
  const KPISchema = {
    totalProfit: {
      type: "number",
      description: "Total profit in USD",
    },
    totalRevenue: {
      type: "number",
      description: "Total revenue in USD",
    },
    totalExpenses: {
      type: "number",
      description: "Total expenses in USD",
    },
    expensesByCategory: {
      type: "object",
      description: "Expenses by category",
    },
    monthlyData: {
      type: "array",
      description: "Monthly data",
    },
    dailyData: {
      type: "array",
      description: "Daily data",
    },
  };



  export default KPISchema;
  