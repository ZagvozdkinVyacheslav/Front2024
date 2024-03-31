
import {useQuery} from "@tanstack/react-query";
import {restApiDomen} from "../config/envs.ts";
import {OperatorServiceApi} from "./OperatorService.ts";

export const currUserKeys = {
    curr: ['currentUser'] as const,
    check: ['check'] as const,
}

export async function logIn(login: string, password: string) {
    const res = await window.fetch(`${restApiDomen}/logIn?login=${login}&password=${password}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(value => value.json().then(value1 => {
            const auth = new AuthService();
            auth.setOperatorId(value1['operatorId'])
            auth.setToken(value1['token'])
        }));
}

export async function logOut() {
    const res = await window.fetch(`${restApiDomen}/logOut`, {
        mode: 'no-cors',
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log(res);
}

export const useCurrentUser = () => {
    return new AuthService().currentUser()
}

export const useCheck = () => {
    return useQuery({
        queryKey: currUserKeys.check,
        queryFn: () => new AuthService().check(),
        refetchIntervalInBackground: true,
        refetchOnWindowFocus: "always",
        refetchInterval: 7000
    })
}

export class AuthService {
    public getToken() {
        return sessionStorage.getItem("token")
    }

    public setToken(token: string) {
        sessionStorage.setItem("token", token)
    }

    public async currentUser() {
        const operatorId = this.getOperatorId()
        if (operatorId) {
            return await OperatorServiceApi.getById(operatorId, operatorId)
        } else {
            return null
        }
    }

    public getOperatorId() {
        return sessionStorage.getItem("operatorId")
    }

    public setOperatorId(operatorId: string) {
        sessionStorage.setItem("operatorId", operatorId)
    }

    public logout() {
        return axios.get("/api/logout", {
            headers: {
                "Authorization": `Bearer ${this.getToken()}`
            }
        })
            .then(() => {
                sessionStorage.setItem("token", "")
                router.navigate(LinkTo.LOGIN())
            })
            .catch(() => {
                sessionStorage.setItem("token", "")
                router.navigate(LinkTo.LOGIN())
            })
    }

    public check() {
        return axios.get(`/api/token`, {
            headers: {
                "Authorization": `Bearer ${this.getToken()}`
            }
        })
            .then(res => {
                if (res.data) {
                    return true;
                } else {
                    sessionStorage.setItem("token", "")
                    this.setUser("")
                    router.navigate(LinkTo.LOGIN())
                    return false;
                }
            })
            .catch(() => {
                sessionStorage.setItem("token", "")
                router.navigate(LinkTo.LOGIN())
                this.setUser("")
                return false;
            })
    }
}