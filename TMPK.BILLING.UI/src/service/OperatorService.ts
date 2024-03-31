import {restApiDomen} from "../config/envs.ts";
import {AuthService} from "./AuthService.ts";

export interface IOperator {
    id: number,
    operatorInfo: IOperatorInfo,
    login: string,
    role: IRole,
    creatorId: number,
}

export interface IOperatorInfo {
    id: number,
    lastName: string,
    firstName: string,
    middleName: string,
    phoneNumber: string,
    birthData: string
}

export interface IRole {
    id: number,
    name: string
}

export namespace OperatorServiceApi {

    export async function getById(operatorId: number | string, targetId: number | string): Promise<IOperator | null> {
        const auth = new AuthService();
        const res = await window.fetch(`${restApiDomen}/api/operator/getOperatorById?operatorId=${operatorId}&targetId=${targetId}`, {
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