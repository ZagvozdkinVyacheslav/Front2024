import {useEffect, useRef, useState} from 'react';
import {Button, Container, Space} from "@mantine/core";
import {ClientServiceApi, IClient} from "../../service/ClientServiceApi.ts";
import {AuthService} from "../../service/AuthService.ts";
import {clientColumns} from "./columns.tsx";
import {MaterialReactTable} from "material-react-table";
import {useDisclosure} from "@mantine/hooks";
import ClientModal from "../../components/ClientModal";


const Clients = () => {
    const [data, setData] = useState<IClient[] | null>(null)
    const operatorId = new AuthService().getOperatorId() ?? ''
    const [opened, { open, close }] = useDisclosure(false);
    useEffect(() => {
        ClientServiceApi.getAll(operatorId)
            .then(value => {
                setData(value)
            })
    }, [])

    if (data) {
        console.log('clients = ', data[0].clientInfo)
    }


    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            position: 'relative',
        }}
        >
            {data ?
                <>
                    <ClientModal opened={opened} close={close}/>
                    <MaterialReactTable
                        data={data ?? []}
                        columns={clientColumns()}
                        getRowId={(originalRow) => originalRow?.id.toString()}
                        renderTopToolbarCustomActions={() => {
                            return <Space>
                                <Button radius={'xl'} color={'rgb(60, 93, 245)'} onClick={() => open()}>
                                    +
                                </Button>
                            </Space>
                        }}
                        enableDensityToggle
                        enableColumnResizing
                        enableGlobalFilter={true}
                        enable
                    />
                </>
                :
                <></>
            }
        </div>
    );
};

export default Clients;