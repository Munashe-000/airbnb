'use client';

import axios from 'axios';
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterController from '@/app/hooks/useRegisterController';
import Controller from './Controller';
import Heading from '../Heading';
import Input from '../inputs/Input';
import toast from 'react-hot-toast';
import CloseButton from '../CloseButton';
import { FaFacebook } from 'react-icons/fa';

const RegisterController = () => {
const registerController = useRegisterController();
const [isLoading, setIsLoading] = useState(false);

const {
    register, handleSubmit, formState: {
        errors,
    }
} = useForm<FieldValues>({
    defaultValues: {
        name: '',
        email: '',
        password: ''
    }
});

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post('/api/register', data)
            .then(() => {
                registerController.onClose();
            })
            .catch((error) => {
                toast.error('Something went wrong');
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading 
            title='Welcome to GlobeStay'
            subtitle='Create an account'
            />
            <Input 
                id='name'
                label='Name'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input 
                id='email'
                label='Email'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input 
                id='password'
                label='Password'
                type='password'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    const footerContent = (
        <div className="
            flex
            flex-col
            gap-4
            mt-3
        ">
            <hr />
            <CloseButton 
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => {}}
            />
            <CloseButton 
                outline
                label="Continue with Facebook"
                icon={FaFacebook}
                onClick={() => {}}
            />
            <div
                className="
                    text-neutral-500
                    text-center
                    mt-4
                    font-light
                "
            >
                <div className="
                    flex
                    flex-row
                    item-center
                    gap-2
                    justify-center
                ">
                    <div>
                        Already have an account?
                    </div>     
                    <div 
                    onClick={registerController.onClose}
                    className="
                        text-neutral-800
                        cursor-pointer
                        hover:underline
                    ">
                        Log in
                    </div>                
                </div>

            </div>
        </div>
    )

    return (
        <Controller disabled={isLoading} isOpen={registerController.isOpen} title="Sign Up" actionLabel="Confirm" 
        onClose={registerController.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} footer={footerContent} />
    );
};

export default RegisterController;