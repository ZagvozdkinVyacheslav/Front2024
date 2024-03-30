import {useForm} from "@mantine/form";
import {Button, Container, Input, PasswordInput} from "@mantine/core";

const Authorization = () => {
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
        <form style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            gap: 15,
        }} onSubmit={form.onSubmit((values) => console.log(values))}>
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