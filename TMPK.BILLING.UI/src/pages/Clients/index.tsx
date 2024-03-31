import {useEffect, useRef, useState} from 'react';
import {Button, Space} from "@mantine/core";
import {ClientServiceApi, IClient} from "../../service/ClientServiceApi.ts";
import {AuthService} from "../../service/AuthService.ts";
import {clientColumns} from "./columns.tsx";
import {MaterialReactTable} from "material-react-table";


const Clients = () => {
    const [data, setData] = useState<IClient[] | null>(null)
    const operatorId = new AuthService().getOperatorId() ?? ''

    useEffect(() => {
        ClientServiceApi.getAll(operatorId)
            .then(value => {
                setData(value)
            })
    }, [])

    console.log('clients = ', data)


    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            gap: 15,
        }}>
            {data ?
                <>
                    <MaterialReactTable
                        data={data ?? []}
                        columns={clientColumns()}
                        getRowId={(originalRow) => originalRow?.id.toString()}
                        renderTopToolbarCustomActions={() => {
                            return <Space>
                                <Button onClick={() => console.log('add client')}>
                                    Добавить
                                </Button>
                                <Button onClick={() => console.log('delete client')}>
                                    Удалить
                                </Button>
                            </Space>
                        }}
                        enableDensityToggle
                        enableColumnOrdering
                        enableColumnResizing
                        enableGlobalFilter={true}
                    />
                </>
                :
                <></>
            }
        </div>

    );
};

export default Clients;