import {restApiDomen} from "../config/envs.ts";

export namespace SecurityServiceAPI {

    async function get() {
        const res = await window.fetch(`${restApiDomen}/logIn`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(res);
    }

}