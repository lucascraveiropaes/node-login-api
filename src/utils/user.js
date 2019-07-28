export function validateUserLogin(data) {
    return !(
        typeof data.login !== "string" &&
        data.login.length === 0 &&
        typeof data.password !== "string" &&
        data.password.length === 0
    );
}
