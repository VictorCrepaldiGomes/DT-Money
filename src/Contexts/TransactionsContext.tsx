import { createContext, type ReactNode } from "react";
import { useEffect, useState } from "react";
import { api } from "../Lib/Axios";

interface CreateTransactionsInput {
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome'
}
interface Transactions {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionsContextType {
    transactions: Transactions[]
    fetchTransactions: (query?: string) => Promise<void>
    createTransaction: (data: CreateTransactionsInput) => Promise<void>
}

interface TransactionsProviderProps {
    children: ReactNode
}



export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transactions[]>([])

    async function fetchTransactions(query?: string) {
        const response = await api.get('/transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            }
        })
        setTransactions(response.data)
        console.log(response.data);
        
        
    }

    async function createTransaction(data: CreateTransactionsInput) {
        const { description, price, category, type } = data

        const response = await api.post('/transactions', {
            description,
            price,
            category,
            type,
            createdAt: new Date(),
        })
        setTransactions(state => [response.data, ...state])
        
    }

    useEffect(() => {
        fetchTransactions()
    }, [])
    return (
        <TransactionsContext.Provider value={{transactions, fetchTransactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}