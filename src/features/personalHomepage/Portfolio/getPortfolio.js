const API_URL = "https://api.github.com/users/Przemek8686/repos";

export const getPortfolio = async() => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error(response.text);
    }

    return await response.json();
};