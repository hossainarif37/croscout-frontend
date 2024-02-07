export function storeToken(token: string): void {
    localStorage.setItem('Token', token);
}

export function getStoredToken(): string | null {
    return localStorage.getItem('Token');
}