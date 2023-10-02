export interface ExpensesByCategory {
    salaries: string;
    services: string;
    supplies: string;
  }
  
  export interface Month {
    month: string;
    revenue: string;
    expenses: string;
    nonOperationalExpenses: string;
    operationalExpenses: string;
  }
  
  export interface Day {
    date: string;
    revenue: string;
    expenses: string;
  }
  
  export interface GetKpisResponse {
    _id: string;
    totalProfit: string;
    totalRevenue: string;
    totalExpenses: string;
    expensesByCategory: ExpensesByCategory;
    monthlyData: Array<Month>;
    dailyData: Array<Day>;
    createdAt: string;
    updatedAt: string;
  }

  export interface GetProductsResponse {
    _id: string;
    price: string;
    expense: string;
    transactions: Array<string>;
    createdAt: string;
    updatedAt: string;
  }

  export interface GetTransactionsResponse {
    _id: string;
    buyer: string;
    amount: string;
    productIds: Array<string>;
    createdAt: string;
    updatedAt: string;
  }