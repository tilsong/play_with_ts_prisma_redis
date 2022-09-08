import Argon from "argon2";

export const hashPassword = async (password: string) => {
    const hashedPassword = await Argon.hash(password);
    return hashedPassword;
}

export const verifyPassword  = async (inputPassword: string, passwordHash: string) => {
    const isCorrect = await Argon.verify(passwordHash, inputPassword);
    return isCorrect;
};

export const isProd = () => process.env.NODE_ENV === "prodection";