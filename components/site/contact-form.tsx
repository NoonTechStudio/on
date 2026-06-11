"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  industry: string;
  budget: string;
  projectScope: string;
}

const industries = [
  "Finance & Fintech",
  "Legal & Professional Services",
  "Healthcare & Wellness",
  "Retail & E-commerce",
  "Construction & Trades",
  "Property & Real Estate",
  "Hospitality & Food",
  "Education & Training",
  "Logistics & Transport",
  "Manufacturing",
  "Charity & Non-profit",
  "Other",
];

const budgets = ["Under £5k", "£5k–£15k", "£15k–£50k", "£50k+", "Not sure yet"];

const selectClass =
  "border border-input rounded-lg w-full px-3.5 py-2.5 text-sm bg-card text-foreground/80 h-10 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 outline-none transition-colors";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const subject = encodeURIComponent(
      `New enquiry from ${data.fullName}${data.companyName ? ` — ${data.companyName}` : ""}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${data.fullName}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "—"}`,
        `Company: ${data.companyName || "—"}`,
        `Industry: ${data.industry || "—"}`,
        `Budget: ${data.budget || "—"}`,
        "",
        data.projectScope,
      ].join("\n")
    );
    window.location.assign(
      `mailto:hello@oceannova.co.uk?subject=${subject}&body=${body}`
    );
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6">
        <div className="w-14 h-14 rounded-full bg-accent text-primary flex items-center justify-center mb-5">
          <CheckCircle size={28} aria-hidden />
        </div>
        <h3 className="text-xl font-bold mb-2">Thank you!</h3>
        <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
          Your enquiry is ready to send in your email app. We respond to every
          enquiry within one working day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-primary text-sm font-semibold hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="fullName">Full name *</Label>
          <Input
            id="fullName"
            placeholder="Jane Smith"
            aria-invalid={!!errors.fullName}
            {...register("fullName", { required: "Please enter your name" })}
          />
          {errors.fullName && (
            <p className="text-destructive text-xs">{errors.fullName.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="jane@company.co.uk"
            aria-invalid={!!errors.email}
            {...register("email", {
              required: "Please enter your email",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
            })}
          />
          {errors.email && (
            <p className="text-destructive text-xs">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" placeholder="07xxx xxxxxx" {...register("phone")} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="companyName">Company name</Label>
          <Input id="companyName" placeholder="Your business" {...register("companyName")} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="industry">Industry</Label>
          <select id="industry" className={selectClass} {...register("industry")}>
            <option value="">Select industry</option>
            {industries.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="budget">Budget range</Label>
          <select id="budget" className={selectClass} {...register("budget")}>
            <option value="">Select budget</option>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="projectScope">Tell us about your project *</Label>
        <Textarea
          id="projectScope"
          rows={4}
          placeholder="What would you like to build or improve?"
          aria-invalid={!!errors.projectScope}
          className="resize-none"
          {...register("projectScope", { required: "Please describe your project" })}
        />
        {errors.projectScope && (
          <p className="text-destructive text-xs">{errors.projectScope.message}</p>
        )}
      </div>

      <button
        type="submit"
        className={cn(
          "btn-ocean w-full rounded-full py-3.5 font-semibold text-base",
          "flex items-center justify-center gap-2"
        )}
      >
        Send Enquiry <ArrowRight size={17} aria-hidden />
      </button>
      <p className="text-xs text-muted-foreground text-center leading-relaxed">
        We&apos;ll only use your details to respond to your enquiry. No spam, ever.
      </p>
    </form>
  );
}
