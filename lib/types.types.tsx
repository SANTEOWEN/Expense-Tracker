//NOTE: create a User interface for the near future incase we implement authentications.

export interface Category {
    category_id: number;
    name: string;
    type: 'expense' | 'income'
    color: string;
    icon: string;
    created_at: string;
}

export interface Transaction {
    transaction_id: number;
    category_id: number;
    amount: number;
    type: 'expense' | 'income';
    description: string;
    transaction_date: string;
    created_at: string;
}
