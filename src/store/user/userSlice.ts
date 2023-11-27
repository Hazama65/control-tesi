
import { createSlice } from '@reduxjs/toolkit';

export enum Status {
    active = 'active',
    inactive = 'inactive',
    checking = 'checking'
}

export interface User {
    id_user: number;
    name_user: string;
    last_name: string;
    middle_name: string;
    email: string;
    register_number: string,
    degree: string,
    role: string;
}
export type UserState = {
    status: Status,
    user: User,
    errorMessage: string | undefined
}

const initialState: UserState = {
    status: Status.checking,
    user: {
        id_user: 0,
        name_user: '',
        last_name: '',
        middle_name: '',
        email: '',
        register_number: '',
        degree: '',
        role: ''
    },
    errorMessage: undefined
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        status: Status.checking,
        user: initialState.user,
        errorMessage: undefined
    },
    reducers: {
        onChecking: ( state: UserState ) => {
            state.status = Status.checking;
            state.errorMessage = undefined;
            state.user = initialState.user
        },
        onLogin: ( state: UserState, {payload}) => {
            state.status = Status.active;
            state.user = payload
            state.errorMessage = undefined
        },
        onLogout: ( state: UserState, {payload}) => {
            state.status = Status.inactive;
            state.user = initialState.user;
            state.errorMessage = payload
        },
        clearErrorMessage: (state ) => {
            state.errorMessage = undefined;
        }

    }
});

export const { onChecking, onLogin, onLogout, clearErrorMessage } = userSlice.actions;

