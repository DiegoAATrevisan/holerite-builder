'use client'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { FormSchema, data } from "@/data/inputs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export default function Home() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      nome: "",
      telefone: ""
    }
  })


  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {data.map((input, i) => {
          console.log({ input })
          return (
            <div key={i}>
              <FormField
                control={form.control}
                // @ts-ignore
                name={input.name}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder={input.placeholder} type={input.type} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              {
                // @ts-ignore
                form.formState.errors[input.name] && form.formState.errors[input.name].message
              }
            </div>
          )
        })}
        {/* <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              {data.map(input => {
                return (
                  <FormControl>
                    <Input placeholder={input.placeholder} {...field}/>
                  </FormControl>
                )
              })}
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
