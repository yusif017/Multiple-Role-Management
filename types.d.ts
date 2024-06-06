import { NextPage } from 'next';

declare module 'next' {
    export type NextPageWithLayout = NextPage & {
        layout?: 'auth' | 'user' | 'entrepreneur' | 'admin';
        getLayout?: (page: React.ReactElement) => React.ReactNode;
    };
}
