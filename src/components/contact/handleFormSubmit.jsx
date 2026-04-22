import parseURL from "../../utils/parseUrl";

export default async function handleFormSubmit(data) {
    try {
        const res = await fetch(parseURL('/contact'), {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        const result = await res.json();
        return res.status === 200 && result.success
    } catch (err) {
        console.error('error submitting form data', err)
        return false
    }
}