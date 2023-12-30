"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "./ui/form";
import "react-phone-number-input/style.css";

import PhoneInput from "react-phone-number-input/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { useState } from "react";
import { ToastAction } from "./ui/toast";

const formSchema = z.object({
  name: z.string().min(3, { message: "Please enter your name" }).toUpperCase(),
  phoneNumber: z.string().min(5, { message: "Please enter your number" }),
  message: z.string().max(160, {
    message: "Message must not be longer than 30 characters.",
  }),
});

const FormBlock = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      message: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;
    const templateParams = {
      from_name: values.name,
      message: `
        Phone: ${values.phoneNumber}.
        Message: ${values.message}.
      `,
    };

    try {
      setLoading(true);
      toast({
        variant: "default",
        title: "Submitting your message...",
      });
      await emailjs
        .send(serviceID, templateID, templateParams, publicKey)
        .then(function (response) {
          toast({
            variant: "default",
            title: "Success! Your message is submitted",
          });
        });
    } catch (err) {
      console.log("Error", err);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setLoading(false);
      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 text-white dark:text-primaryColor"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormMessage className="text-red-500" />
              <FormControl>
                <Input
                  {...field}
                  placeholder="Введите ваше имя"
                  autoComplete="name"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="phoneNumber"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormMessage className="text-red-500" />
              <FormControl className="input">
                <PhoneInput
                  {...field}
                  placeholder="Введите ваше номер"
                  inputComponent={Input}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Введите ваше сообщение"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant={"secondary"}>
          {!loading ? "Перезвоните мне" : "Loading..."}
        </Button>
      </form>
    </Form>
  );
};

export default FormBlock;
