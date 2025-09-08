/*
 * Project specific types and definitions
 *
 * e.g.
 * export interface User {
 *   id: number;
 *   name: string;
 *   email: string;
 *   avatar?: string;
 * }
 * */

// Globally page props provided by HandleInertiaRequests.php

export type AppPageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    name: string
}
