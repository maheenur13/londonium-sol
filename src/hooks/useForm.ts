import { useState } from 'react';

interface FormData {
    [key: string]: any;
}

interface Errors {
    [key: string]: string;
}

const useForm = (initialValues: FormData) => {
    const [formData, setFormData] = useState<FormData>(initialValues);
    const [errors, setErrors] = useState<Errors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Validate the input and clear error if valid
        if (name === 'name' && value) {
            setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
        }
        if (name === 'email') {
            if (!value) {
                setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is invalid' }));
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
            }
        }
        if (name === 'phone' && value) {
            setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
        }
        if (name === 'department' && value) {
            setErrors((prevErrors) => ({ ...prevErrors, department: '' }));
        }
        if (name === 'message' && value) {
            setErrors((prevErrors) => ({ ...prevErrors, message: '' }));
        }
    };

    const validateForm = () => {
        let formErrors: Errors = {};
        let isValid = true;

        if (!formData.name) {
            formErrors.name = 'Name is required';
            isValid = false;
        }
        if (!formData.email) {
            formErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email is invalid';
            isValid = false;
        }
        if (!formData.message) {
            formErrors.message = 'Message is required';
            isValid = false;
        }
        if (!formData.phone) {
            formErrors.phone = 'Phone number is required';
            isValid = false;
        }
        if (!formData.department) {
            formErrors.department = 'department is required';
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    return {
        formData,
        errors,
        handleChange,
        validateForm,
        setFormData,
        setErrors,
    };
};

export default useForm;
