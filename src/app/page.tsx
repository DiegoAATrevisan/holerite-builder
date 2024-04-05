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
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { FormSchema, data } from "@/data/inputs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export default function Home() {
  let a = {}
  data.forEach(e => {
    if(e.type == "text"){
      // @ts-ignore
      a[e.name] = ""
    } else if(e.type == "checkbox"){
      // @ts-ignore
      a[e.name] = false
    }
  })
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: a
  })


  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="font-bold text-5xl my-4">PAY PAU</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-x-2 grid grid-cols-3 m-12">
          {data.map((input, i) => {
            return (
              <div key={i} className="flex flex-col space-y-2 justify-center my-2">
                <Label>{input.label}</Label>
                <FormField
                  control={form.control}
                  // @ts-ignore
                  name={input.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder={input.placeholder} type={input.type}/>
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
          <Button type="submit" className="col-span-3 my-4">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
