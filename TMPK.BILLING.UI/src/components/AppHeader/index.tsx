

// const {Header} = Layout;

// type AppHeaderProps = {
//     auth: AuthContextProps;
//     currentUser?: IUserIs;
// }
// {currentUser, auth}: AppHeaderProps
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

    return <div style={{display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
        <div style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center', lineHeight: "normal", marginRight: 15, width: '100%'}}>ТМПК Биллинг
        </div>
        {/*<div style={{left: 0, width: "calc(100vw - 200px)"}}>*/}
        {/*    <Menu*/}
        {/*        theme="dark"*/}
        {/*        mode="horizontal"*/}
        {/*        selectedKeys={[menu.find(it => location.pathname.includes(it.link))?.link!!]}*/}
        {/*        items={menu.filter(it => (it.access && currentUser?.roleId === it.access) || !it.access).map(it => ({*/}
        {/*            key: it.link,*/}
        {/*            label: <Link to={it.link}>{it.id}</Link>,*/}
        {/*            icon: it.icon*/}
        {/*        }))}*/}
        {/*    />*/}
        {/*</div>*/}
        {/*<Space>*/}
        {/*    <Dropdown.Button*/}
        {/*        type="primary"*/}
        {/*        icon={<UserOutlined/>}*/}
        {/*        menu={{*/}
        {/*            items: [*/}
        {/*                {*/}
        {/*                    key: "exit",*/}
        {/*                    label: <Button type="link" onClick={() => {*/}
        {/*                        auth.signoutSilent()*/}
        {/*                    }}>Выйти</Button>*/}
        {/*                }*/}
        {/*            ]*/}
        {/*        }} placement="bottomRight">*/}
        {/*        {auth.user?.profile.preferred_username}*/}
        {/*    </Dropdown.Button>*/}
        {/*</Space>*/}
    </div>
}

export default AppHeader;