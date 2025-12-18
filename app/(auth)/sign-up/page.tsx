"use client"
import React from 'react'
import {SubmitHandler, useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import InputFeild from "@/components/form/InputFeild";
import {SelectFeild} from "@/components/form/SelectFeild";
import {INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS} from "@/lib/constants";
import {CountrySelectFeild} from "@/components/form/CountrySelectFeild";
import FooterLink from "@/components/form/FooterLink";
//import CountrySelectFeild from "@/components/form/CountrySelectFeild";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        control,
        formState : {errors , isSubmitting},
    } = useForm<SignUpFormData>({
        defaultValues : {
            fullName: "",
            email: "",
            password: "",
            country: "",
            investmentGoals: "Growth",
            riskTolerance: "Medium",
            preferredIndustry: "Technology"
        } ,
        mode : "onBlur"
    }, );
    const onSubmit  = async (data : SignUpFormData) => {
        try {
            console.log(data);
        }catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <h1 className={"form-title"}>Sign Up & Personalize</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={"space-y-5"}>
                <InputFeild
                    name = "fullName"
                    label = "Full Name"
                    placeholder = "Ben Rimmington"
                    register = {register}
                    error = {errors.fullName}
                    validation = {{required:"Full name is required" , minLength:2}}
                    />

                <InputFeild
                    name = "email"
                    label = "Email"
                    placeholder = "BenR@gmail.com"
                    register = {register}
                    error = {errors.email}
                    validation = {{required:"Email is required" , pattern : /^\w+@\w+\.\w+$/ , message: "Please enter a valid email address"}}
                />

                <InputFeild
                    name = "password"
                    label = "Password"
                    placeholder = "Enter a Strong Password"
                    type = "password"
                    register = {register}
                    error = {errors.password}
                    validation = {{required:"Password is required" , minLength:8}}
                />

                <CountrySelectFeild
                    name="country"
                    label="Country"
                    control={control}
                    error={errors.country}
                    required
                />

                <SelectFeild
                    name = "investmentGoals"
                    label = "Investment Goals"
                    palceholder = "Select your Investments Goals"
                    options = {INVESTMENT_GOALS}
                    control = {control}
                    error = {errors.investmentGoals}
                    required
                />

                <SelectFeild
                    name = "riskTolerance"
                    label = "Risk Tolerance"
                    palceholder = "Select your Risk Level"
                    options = {RISK_TOLERANCE_OPTIONS}
                    control = {control}
                    error = {errors.riskTolerance}
                    required
                />

                <SelectFeild
                    name = "preferredIndustry"
                    label = "Preferred Industry"
                    palceholder = "Select your preferred industries"
                    options = {PREFERRED_INDUSTRIES}
                    control = {control}
                    error = {errors.preferredIndustry}
                    required
                />

                <Button type={"submit"} disabled={isSubmitting} className={"yellow-btn w-full mt-5"}>
                    {isSubmitting ? "Creating Account" : "Start your Investment Journey"}
                </Button>

                <FooterLink text={"Already have an Account"} linkText={"Sign in"} href={"/sign-in"} />
            </form>
        </>
    )
}
export default SignUp;