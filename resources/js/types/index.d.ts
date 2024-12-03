import { Config } from "ziggy-js";

export interface User {
    id: number;
    name: string;
    email: string;
    image_url: string;
    phone_number?: string;
    role_id: number;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
    flash: {
        success?: string;
        error?: string;
    };
};
