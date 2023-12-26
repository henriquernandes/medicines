"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem, FormControl, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

export default function FormMedicine() {
  const formScheme = z.object({
    name: z.string(),
    interval: z.string(),
    quantity: z.string(),
  });

  const form = useForm<z.infer<typeof formScheme>>({
    resolver: zodResolver(formScheme),
    defaultValues: {
      name: "",
      interval: "",
      quantity: "",
    },
  });

  function onSubmit(data: z.infer<typeof formScheme>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Nome do Medicamento" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
