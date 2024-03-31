import {MRT_ColumnDef} from "material-react-table";
import {IClient} from "../../service/ClientServiceApi.ts";


export const clientColumns = (): MRT_ColumnDef<IClient>[] => [
    {
        accessorKey: "id",
        header: "ИД",
        filterFn: 'includesString',
        accessorFn: row => row.id,
        size: 100,
    },

]