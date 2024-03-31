import {Button, Container, Modal,TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";
import {DateInput} from "@mantine/dates";

const ClientModal = (props: {
    opened: boolean,
    close: () => void
}) => {
    const form = useForm({
        initialValues: {
            lastname: '',
            firstname: '',
            middlename: '',
            birthDate: '',
            phoneNumber: '',
            city: '',
            street: '',
            buildingNumber: '',
            flatNumber: '',
        },
    });
    const {opened, close} = props;
    return (
        <Modal opened={opened} onClose={close} title="Добавление клиента">
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
            >
                <Container miw={400}>
                    <TextInput
                        radius={'md'}
                        size={'md'}
                        w={'100%'}
                        withAsterisk
                        label={'Фамилия'}
                        style={{fontWeight: 400}}
                        placeholder="Иванов"
                        {...form.getInputProps('lastname')}
                    />
                </Container>
                <Container miw={400}>
                    <TextInput
                        radius={'md'}
                        size={'md'}
                        w={'100%'}
                        withAsterisk
                        label={'Имя'}
                        style={{fontWeight: 400}}
                        placeholder="Иван"
                        {...form.getInputProps('firstname')}
                    />
                </Container>
                <Container miw={400}>
                    <TextInput
                        radius={'md'}
                        size={'md'}
                        w={'100%'}
                        withAsterisk
                        label={'Отчество'}
                        style={{fontWeight: 400}}
                        placeholder="Иванович"
                        {...form.getInputProps('middlename')}
                    />
                </Container>
                <Container miw={400}>
                    <DateInput
                        alueFormat="DD.MM.YYYY"
                        placeholder={'01.01.2000'}
                        radius={'md'}
                        size={'md'}
                        w={'100%'}
                        withAsterisk
                        label={'Дата рождения'}
                        style={{fontWeight: 400}}
                        {...form.getInputProps('birthDate')}
                    />
                </Container>
                <Container miw={400}>
                    <TextInput
                        radius={'md'}
                        size={'md'}
                        w={'100%'}
                        withAsterisk
                        label={'Телефон'}
                        style={{fontWeight: 400}}
                        placeholder="+77777777777"
                        {...form.getInputProps('phoneNumber')}
                    />
                </Container>
                <Container miw={400}>
                    <TextInput
                        radius={'md'}
                        size={'md'}
                        w={'100%'}
                        withAsterisk
                        label={'Город'}
                        style={{fontWeight: 400}}
                        placeholder="Дубна"
                        {...form.getInputProps('city')}
                    />
                </Container>
                <Container miw={400}>
                    <TextInput
                        radius={'md'}
                        size={'md'}
                        w={'100%'}
                        withAsterisk
                        label={'Улица'}
                        style={{fontWeight: 400}}
                        placeholder="Университетская"
                        {...form.getInputProps('street')}
                    />
                </Container>
                <Container miw={400}>
                    <TextInput
                        radius={'md'}
                        size={'md'}
                        w={'100%'}
                        withAsterisk
                        label={'Здание'}
                        style={{fontWeight: 400}}
                        placeholder="14"
                        {...form.getInputProps('buildingNumber')}
                    />
                </Container>
                <Container miw={400}>
                    <TextInput
                        radius={'md'}
                        size={'md'}
                        w={'100%'}
                        withAsterisk
                        label={'Квартира'}
                        style={{fontWeight: 400}}
                        placeholder="28"
                        {...form.getInputProps('flatNumber')}
                    />
                </Container>
                <Button
                    type="submit"
                    radius="md"
                    size={'lg'}
                    style={{backgroundColor: '#f4b940', fontWeight: 400}}
                >
                    Добавить
                </Button>
            </form>
        </Modal>
    );
};

export default ClientModal;