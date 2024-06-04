'use client';

import axios from 'axios';
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterController from '@/app/hooks/useRegisterController';

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

    return (
        <div></div>
    );
};

export default RegisterController;