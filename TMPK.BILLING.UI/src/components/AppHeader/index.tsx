import {Flex, Image} from "@mantine/core";

const AppHeader = () => {
    // const menu = [
    //     // {id: 'Мониторинг', icon: <PieChartOutlined/>, link: LinkTo.MONITORING()},
    //     // {id: 'Журнал запросов', icon: <HistoryOutlined/>, link: LinkTo.REQUEST_JOURNAL()},
    //     // {id: 'Рег. запросы', icon: <FileSearchOutlined/>, link: LinkTo.REG_QUERY()},
    //     // {
    //     //     id: 'Витрины',
    //     //     icon: <DatabaseOutlined/>,
    //     //     link: LinkTo.VITRINAS()
    //     // },
    //     // {id: 'Потребители РЗ', icon: <UserOutlined/>, link: LinkTo.USERS()},
    //     // {id: 'Пользователи ИС', icon: <UserOutlined/>, link: LinkTo.SECURITY(), access: roles.ADMIN.id},
    // ]

    return (
        <div style={{
            fontSize: 16,
            lineHeight: "1.5",
            width: '100%',
        }}>
            <Flex
                style={{
                    display: 'flex',
                    padding: 10,
                    paddingRight: 15,
                    paddingLeft: 15,
                    boxSizing: 'border-box',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    maxWidth: 1300
                }}>
                <Image src={'../../../logo/logo_header.svg'} style={{width: 98, display: 'flex'}}/>
                {/*<Flex>Биллинг</Flex>*/}
            </Flex>
            <Flex style={{position: 'relative'}}>
                <div style={{
                    height: 25,
                    width: '100%',
                    paddingLeft: 15,
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    justifyContent: 'flex-end',
                    display: 'flex',
                    backgroundColor: '#3c5df5',
                }}>
                    <div style={{
                        display: 'flex',
                        fontFamily: 'Gilroy, sans-serif',
                        height: '100%',
                        fontSize: '18px',
                        maxWidth: 1300,
                        textTransform: 'uppercase'
                    }}>
                        <span style={{color: '#f4b940'}}>#время</span>
                        <span style={{backgroundColor: '#f4b940', color: '#3c5df5', paddingRight: 300}}>цифры</span>
                    </div>
                </div>
            </Flex>
        </div>
    )
}

export default AppHeader;