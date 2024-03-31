import {MRT_ColumnDef} from "material-react-table";
import {IClient} from "../../service/ClientServiceApi.ts";
import {Badge} from "@mantine/core";


export const clientColumns = (): MRT_ColumnDef<IClient>[] => [
    {
        accessorKey: "id",
        header: "ИД",
        filterFn: 'includesString',
        accessorFn: row => row.id,
        size: 50,
    },
    {
        header: "Состояние",
        enableSorting: false,
        accessorFn: row => {
            switch (row.clientStatusType.name) {
                case 'Подключение':
                    return <Badge color="blue">{row.clientStatusType.name}</Badge>;
                case 'Активен':
                    return <Badge color="green">{row.clientStatusType.name}</Badge>;
                case 'Блокировка':
                    return <Badge color="yellow">{row.clientStatusType.name}</Badge>;
                case 'Расторгнут':
                    return <Badge color="red">{row.clientStatusType.name}</Badge>;
            }
        },
        size: 150,
    },
    {
        header: "ФИО",
        filterFn: 'includesString',
        accessorFn: row => row.clientInfo.lastname + ' ' + row.clientInfo.firstname + ' ' + row.clientInfo.middlename,
        size: 300,
    },
    {
        accessorKey: "clientInfo.organisationName",
        header: "Организация",
        filterFn: 'includesString',
        size: 200,
    },
    {
        accessorKey: "balance.balanceValue",
        header: "Баланс",
        filterFn: 'includesString',
        size: 150,
    },
    {
        accessorKey: "balance.limitValue",
        header: "Лимит",
        filterFn: 'includesString',
        size: 150,
    },
    {
        accessorKey: "clientInfo.city",
        header: "Город",
        filterFn: 'includesString',
        accessorFn: row => row.clientInfo.city,
        size: 150
    },
    {
        accessorKey: "clientInfo.street",
        header: "Улица",
        filterFn: 'includesString',
        size: 150
    },
    {
        accessorKey: "clientInfo.buildingNumber",
        header: "Здание",
        filterFn: 'includesString',
        size: 150
    },
    {
        accessorKey: "clientInfo.postalCode",
        header: "Индекс",
        filterFn: 'includesString',
        size: 100
    },


]