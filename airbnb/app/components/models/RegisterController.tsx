'use client';

import axios from 'axios';
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterController from '@/app/hooks/useRegisterController';
import Controller from './Controller';
import Heading from '../Heading';

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
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading 
            title='Welcome to GlobeStay'
            subtitle='Please create an account'
            />
        </div>
    )

    return (
        <Controller disabled={isLoading} isOpen={registerController.isOpen} title="Sign Up" actionLabel="Confirm" 
        onClose={registerController.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} />
    );
};

export default RegisterController;