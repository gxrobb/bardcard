export interface ExampleComponentProps {
    title: string;
    description?: string;
}

export type ThemeColors = {
    primary: string;
    secondary: string;
    background: string;
    text: string;
};

export interface User {
    id: number;
    name: string;
    email: string;
}