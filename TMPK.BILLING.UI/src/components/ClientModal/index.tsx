import React from 'react';
import {Modal} from "@mantine/core";

const ClientModal = (props: {
    opened: boolean,
    close: () => void
}) => {
    const {opened, close} = props;
    return (
        <Modal opened={opened} onClose={close} title="Создание/Редактирование клиента">

        </Modal>
    );
};

export default ClientModal;