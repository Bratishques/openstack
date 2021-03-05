export type Store = {
    title: string;
    subdomain?: string
};

export const initialState: Store = {
    title: "Hello World!"
};