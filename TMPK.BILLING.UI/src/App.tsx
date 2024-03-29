import AppHeader from "./components/AppHeader";
import {AppShell, Group} from "@mantine/core";
import {Route, Routes} from "react-router-dom";
import {routes} from "./config/routes.tsx";

function App() {

    return (
        <AppShell
            header={{ height: 60 }}
            footer={{ height: 60 }}
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <AppHeader/>
                </Group>
            </AppShell.Header>
            <AppShell.Main style={{padding: '50px 50px'}}>
                <Routes>
                    {
                        routes.find(it => it.path === '/')?.children?.map((route) => {
                            return (
                                <Route key={route.path} path={route.path} element={route.element}/>
                            )
                        })
                    }
                </Routes>
            </AppShell.Main>
            <AppShell.Footer
                style={{textAlign: 'center'}}>©ТМПК {new Date().getFullYear()}
            </AppShell.Footer>
        </AppShell>
    )
        ;
}

export default App
