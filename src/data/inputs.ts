import { HTMLInputTypeAttribute } from "react"
import { z } from "zod"

type Input = {
  name: string
  placeholder: string
  type: HTMLInputTypeAttribute | undefined
  label: string
}

export const data: Input[] = [
  {
    name: "nomeCompletoFuncionario",
    placeholder: "Digite seu nome",
    type: "text",
    label: "Nome:"
  },
  {
    name: "cpfFuncionario",
    placeholder: "Digite seu CPF",
    type: "text",
    label: "CPF:"
  },
  {
    name: "rgFuncionario",
    placeholder: "Digite seu RG",
    type: "text",
    label: "RG:"
  },
  {
    name: "cargoFuncionario",
    placeholder: "Digite seu cargo",
    type: "text",
    label: "Cargo:"
  },
  {
    name: "departamentoFuncionario",
    placeholder: "Digite seu departamento",
    type: "text",
    label: "Departamento:"
  },
  {
    name: "telefoneFuncionario",
    placeholder: "Digite seu telefone",
    type: "text",
    label: "Telefone:"
  },
  {
    name: "emailFuncionario",
    placeholder: "Digite seu e-mail",
    type: "text",
    label: "E-mail:"
  },
]

export const FormSchema = z.object({
  emailFuncionario: z.string().min(1, {
    message: "Este campo deve estar preenchido.",
  }).email("Este não é um e-mail válido"),
  nomeCompletoFuncionario: z.string().min(3, {
    message: "Digite um nome válido.",
  }),
  cpfFuncionario: z.string().min(11, {
    message: "Digite um CPF válido.",
  }),
  telefoneFuncionario: z.string({}).refine((arg) => {
    return !Number.isNaN(Number(arg))
  }, {
    message: "Digite um número de telefone válido."
  }),
  rgFuncionario: z.string().min(7, {
    message: "Digite um RG válido.",
  }),
  cargoFuncionario: z.string().min(3, {
    message: "Digite um cargo válido.",
  }),
  departamentoFuncionario: z.string().min(3, {
    message: "Digite um departamento válido.",
  }),
})