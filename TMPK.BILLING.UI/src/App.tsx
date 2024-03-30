import AppHeader from "./components/AppHeader";
import {AppShell} from "@mantine/core";
import {Route, Routes} from "react-router-dom";
import {routes} from "./config/routes.tsx";
import AppFooter from "./components/AppFooter";

function App() {

    return (
        <AppShell padding="md" style={{fontFamily: 'Gilroy, sans-serif, inherit', display: 'flex', minHeight: '100hv'}}>
            <AppShell.Header style={{ width: '100%'}}>
                <AppHeader/>
            </AppShell.Header>
            <AppShell.Main style={{ width: '100%', padding: '60px 50px'}}>
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
            <AppShell.Footer style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <AppFooter/>
            </AppShell.Footer>
        </AppShell>
    );
}

export default App
