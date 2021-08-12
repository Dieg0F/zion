
export enum RouteList {
    DEFAULT = '/index.html',
    HOME = '/home',
    PROFILE = '/perfil',
    SCHEDULED = '/agendados',
    LOGIN = '/login',
    REDEFINE_PASS = '/nova-senha',
    RESET_PASS = '/restaurar-senha',
    NEW_ACCOUNT = '/nova-conta',
    CONFIG_USER = '/configuracoes',
}

export enum StorePatterns {
    AUTH_SIGN_IN = '@auth/SIGN_IN',
    AUTH_SIGN_OUT = '@auth/SIGN_OUT',
    USER_SAVE_USER = '@user/SAVE_USER',
    PERSIST_TOKEN = 'persist/REHYDRATE',
}