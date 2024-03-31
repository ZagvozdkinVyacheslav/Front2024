import {useForm} from "@mantine/form";
import {Button, Container, Input, PasswordInput} from "@mantine/core";
import {AuthService, logIn, useCurrentUser} from "../../service/AuthService.ts";
import {useEffect, useState} from "react";
import {OperatorServiceApi} from "../../service/OperatorService.ts";

const Authorization = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        OperatorServiceApi.getById(new AuthService().getOperatorId() ?? '', new AuthService().getOperatorId() ?? '')
            .then(value => {
                if (value) {
                    setUser(user)
                }
            })
    }, [])

    const form = useForm({
        initialValues: {
            login: '',
            password: ''
        },
        validate: {
            // email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });
    return (
        <form
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                gap: 15,
            }}
            onSubmit={
                form.onSubmit((values) => logIn(values.login, values.password))
            }
        >
            <Container miw={400}>
                <Input
                    radius={'md'}
                    size={'lg'}
                    w={'100%'}
                    style={{fontWeight: 400}}
                    placeholder="Логин"
                    {...form.getInputProps('login')}
                />
            </Container>
            <Container miw={400}>
                <PasswordInput
                    radius={'md'}
                    w={'100%'}
                    size={'lg'}
                    style={{borderColor: 'black', fontWeight: 400}}
                    placeholder="Пароль"
                    {...form.getInputProps('password')}
                />
            </Container>
            <Button
                type="submit"
                radius="md"
                size={'lg'}
                style={{backgroundColor: '#f4b940', fontWeight: 400}}
            >
                ВОЙТИ
            </Button>
        </form>
    );
};

export default Authorization;