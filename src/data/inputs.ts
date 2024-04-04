import { z } from "zod"

type Input = {
  name: string
  placeholder: string
  type: "text"
}


export const data: Input[] = [
  {
    name: "email",
    placeholder: "digite seu email",
    type: "text"
  },
  {
    name: "telefone",
    placeholder: "digite seu telefone",
    type: "text"
  },
  {
    name: "nome",
    placeholder: "digite seu nome",
    type: "text"
  }
]

export const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  nome: z.string().min(2, {
    message: "Nome must be at least 2 characters.",
  }),
  telefone: z.string({}).refine((arg) => {
    return !Number.isNaN(Number(arg))
  }, {
    message: "Phone "
  })
})