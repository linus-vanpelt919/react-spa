import React, { useState, useEffect } from "react";
import {
    Button,
    Card,
    FormControl,
    InputLabel,
    FormHelperText,
    Input,
    Container,
    Stack,
    TextField,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
function Login() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const onSubmit = (values) => console.log(values);

    return (
        <Container maxWidth="sm" sx={{ pt: 5 }}>
            <Stack spacing={3}>
                <TextField
                    required
                    label="メールアドレス"
                    type="email"
                    {...register("email")}
                />
                {errors.email && errors.email.message}
                <TextField required label="お名前" {...register("name")} />
                <TextField
                    required
                    label="パスワード"
                    type="password"
                    {...register("password")}
                />
                {errors.password && errors.password.message}
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    onClick={handleSubmit(onSubmit)}
                >
                    作成
                </Button>
            </Stack>
        </Container>
    );
}

export default Login;
