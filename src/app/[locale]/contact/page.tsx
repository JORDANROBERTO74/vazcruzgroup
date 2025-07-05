"use client";

import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import Link from "next/dist/client/link";
import { Button } from "@/components/ui/button";
import { TooltipContent } from "@/components/ui/tooltip";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMessages } from "next-intl";
import { useContactForm } from "@/hooks/useContactForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import moment from "moment";

const formSchema = z.object({
  name: z.string(),
  email: z.string(),
  subject: z.string(),
  message: z.string(),
});

const Page = () => {
  const messages = useMessages();
  const { toast } = useToast();
  const [isVisible, setIsVisible] = React.useState(false);
  const { mutateAsync, isLoading } = useContactForm();

  const object: any = messages?.contact;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const response = await mutateAsync({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      time: moment().format("D MMM YYYY, HH:mm"),
    });
    if (response?.status === 200) {
      form.reset();
      toast({
        title: object?.sendEmail?.success?.title,
        description: object?.sendEmail?.success?.subtitle,
      });
    } else {
      toast({
        title: object?.sendEmail?.error?.title,
        description: object?.sendEmail?.error?.subtitle,
        variant: "destructive",
      });
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 6000);
  }, []);

  return (
    <div>
      <div className="w-full h-full md:h-[82vh] flex items-start justify-center pb-[10vh]">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-6 w-full h-full">
          <div className="flex flex-col justify-center gap-2 w-full h-full"></div>
          <div className="flex items-center justify-center w-full h-full">
            {/* <div className="flex items-center gap-5">
              {socialMedias?.map((socialMedia, index) => {
                const delay = index * 0.5 * 1000;

                return (
                  <TooltipProvider key={socialMedia?.name}>
                    <Tooltip>
                      <TooltipTrigger
                        asChild
                        style={{
                          transitionDelay: `${delay}ms`,
                        }}
                        className={`transition duration-300 ease-in-out ${
                          isVisible ? "opacity-100" : "opacity-0 cursor-default"
                        }`}
                      >
                        <Link
                          key={socialMedia?.name}
                          href={socialMedia?.url}
                          target="_blank"
                        >
                          <Button
                            size="icon"
                            variant="outline"
                            className="w-fit p-6 text-[20px]"
                          >
                            {socialMedia?.icon}
                            <span className="sr-only">{socialMedia?.name}</span>
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>{socialMedia?.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              })}
            </div> */}
          </div>
        </div>
      </div>

      <div className="w-full h-full md:min-h-[100vh] flex flex-col gap-10 items-center justify-center py-10 md:py-0">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-6 justify-between w-full">
            <div className="hidden md:block w-full">
              <Separator />
            </div>
            <div className="text-center text-2xl font-bold w-full md:max-w-fit">
              {object?.sendEmail?.title}
            </div>
            <div className="hidden md:block w-full">
              <Separator />
            </div>
          </div>
          <div className="text-center gap-2 text-gray-500 md:text-xl dark:text-gray-400">
            <span className="mr-2">{object?.sendEmail?.subtitle}</span>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="name">
                        {object?.sendEmail?.form?.name?.label}
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          required
                          placeholder={
                            object?.sendEmail?.form?.name?.placeholder
                          }
                          {...field}
                        />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">
                        {object?.sendEmail?.form?.email?.label}
                      </FormLabel>
                      <FormControl>
                        <Input
                          required
                          type="email"
                          id="email"
                          placeholder={
                            object?.sendEmail?.form?.email?.placeholder
                          }
                          {...field}
                        />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="subject">
                        {object?.sendEmail?.form?.subject?.label}
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="subject"
                          required
                          placeholder={
                            object?.sendEmail?.form?.subject?.placeholder
                          }
                          {...field}
                        />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="message">
                        {object?.sendEmail?.form?.message?.label}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          required
                          placeholder={
                            object?.sendEmail?.form?.message?.placeholder
                          }
                          {...field}
                        />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    {object?.sendEmail?.form?.sendButton?.label}
                  </>
                )}
              </Button>

              {/* <ContactForm /> */}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Page;
