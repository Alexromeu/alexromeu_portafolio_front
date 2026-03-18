import parseURL from "../../utils/parseUrl";

export default async function handleFormSubmit(data, setShowDialog, reset) {
    
    try {
        console.log(data);
        const res = await fetch(parseURL('/contact'), {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        const result = await res.json();

        if (res.status === 200 && result.success) {
            setShowDialog(true)
            reset()
        }

    } catch (err) {
        console.error('error submitting form data', err)
    }
       
}