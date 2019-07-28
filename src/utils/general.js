export function generateToken(size = 190){
    let token = "";
    let codeAlphabet  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        codeAlphabet += "abcdefghijklmnopqrstuvwxyz";
        codeAlphabet += "0123456789";
        codeAlphabet += "*!@$()";

    for (let i = 0; i < size; i++)
        token += codeAlphabet[parseInt(Math.random() * codeAlphabet.length)];

    return token;
}
