import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from "./Styles";
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as z from 'zod'
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../Contexts/TransactionsContext";

  const newTransactionsFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
  })

  type NewTransactionFormInputs = z.infer<typeof newTransactionsFormSchema>

  export function NewTransactionsModal() {

    const { createTransaction } = useContext(TransactionsContext)
    const {   
            control,
            register, 
            handleSubmit,
            reset,
            formState: {isSubmitting} } = useForm<NewTransactionFormInputs>({
      resolver: zodResolver(newTransactionsFormSchema),

      //Selecionar o default do modal como entrada no field.values
      // defaultValues: {
      //   type: 'income'
      // }
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
      const { description, price, category, type } = data;
        await createTransaction({
          description,
          price,
          category,
          type
        })
      
      reset()
    }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X/>
        </CloseButton>


        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input type="text" 
          placeholder="Descrição" 
          required 
          {...register('description')}
          />
          <input type="number" 
          placeholder="Preço" 
          required 
          {...register('price', { valueAsNumber: true })}
          
          />
          <input type="text" 
          placeholder="Categoria" 
          required 
          {...register('category')}

          />

          <Controller 
          control={control}
          name="type"
          render={({ field }) => {
            return (
              <TransactionType onValueChange={field.onChange} value={field.value}>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24}/> 
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24}/> 
              Saída
            </TransactionTypeButton>
          </TransactionType>
            )
          }}
          />



          <button type="submit" disabled={isSubmitting}>Cadastrar</button>


        </form>
      </Content>
    </Dialog.Portal>
  );
}
