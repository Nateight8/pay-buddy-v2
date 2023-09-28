"use client";

import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const formSchema = z.object({
  staffSize: z.string().min(2).max(50),
  company: z.string(),
  emailCompany: z.string(),
  location: z.string(),
});

function FormComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      staffSize: "",
      company: "",
      emailCompany: "",
      location: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const staffSize = [
    {
      id: "1",
      number: 1,
    },
    {
      id: "2",
      number: 2,
    },
    {
      id: "3",
      number: 3,
    },
    {
      id: "4",
      number: 4,
    },
  ];
  const location = [
    {
      id: "1",
      name: "Nigeria",
    },
    {
      id: "2",
      name: "Canada",
    },
    {
      id: "3",
      name: "South Africa",
    },
    {
      id: "4",
      name: "Brazil",
    },
  ];

  return (
    <div className="mt-10 mx-auto max-w-4xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-7"
        >
          <div className="col-span-full">
            <FormField
              control={form.control}
              name="staffSize"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger
                        style={{
                          boxShadow: "4px 4px 15px 0px hsla(0, 0%, 0%, 0.25);",
                        }}
                      >
                        <SelectValue placeholder="Number of employees" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="">
                      {staffSize.map(({ id, number }) => (
                        <SelectItem value={id} key={id}>
                          {number}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Company's name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emailCompany"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Company's email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="col-span-full">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Location" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="">
                      {location.map(({ id, name }) => (
                        <SelectItem value={id} key={id}>
                          {name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
          <Button
            variant="secondary"
            type="submit"
            className="col-span-full px-5 py-6 text-lg"
          >
            Next
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default FormComponent;
