export async function fetchCompanies() {
    const response = await fetch('http://localhost:3000/companies');
    console.log("response", response);
    return response.json()
}