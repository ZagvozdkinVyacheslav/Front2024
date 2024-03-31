import {AuthService} from "./AuthService.ts";
import {restApiDomen} from "../config/envs.ts";

export interface IClient {
    id: number,
    balance: IBalance,
    clientStatusType: IClientStatusType,
    clientInfo: IClientInfo,
    creatorId: number,
    created: string,
    modified: string
}

export interface IClientInfo {
    id: number,
    lastName: string,
    firstName: string,
    middleName: string,
    organisationName: string,
    phoneNumber: string,
    birthDate: string,
    city: string,
    postalCode: string,
    street: string,
    buildingNumber: string,
    flatNumber: string,
    clientType: IClientType
}

export interface IBalance {
    id: number,
    balanceValue: number,
    limitValue: number,
    modified: string
}

export interface IClientStatusType {
    id: number,
    name: string
}

export interface IClientType {
    id: number,
    name: string
}

export namespace ClientServiceApi {

    export async function getById(operatorId: number | string, targetId: number | string): Promise<IClient | null> {
        const auth = new AuthService();
        const res = await window.fetch(`${restApiDomen}/api/client/getClientById?operatorId=${operatorId}&targetId=${targetId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": auth.getToken() ? `Bearer ${auth.getToken()}` : ''
            },
        })
        if (res.ok) {
            return await res.json();
        } else {
            return null;
        }
    }

    export async function getAll(operatorId: number | string): Promise<IClient[] | null> {
        const auth = new AuthService();
        const res = await window.fetch(`${restApiDomen}/api/client/getAllClients?operatorId=${operatorId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": auth.getToken() ? `Bearer ${auth.getToken()}` : ''
            },
        })
        if (res.ok) {
            return await res.json();
        } else {
            return null;
        }
    }

}