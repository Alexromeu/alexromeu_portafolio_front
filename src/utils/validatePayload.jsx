

export default function validatePayload(body) {
    const errors = [];

    if (!body.name || typeof body.name !== "string") {
        errors.push("Name is required");
    }

    if (!body.email || typeof body.email !== "string") {
        errors.push("Email is required");
    }

    if (!body.message || typeof body.message !== "string") {
        errors.push("Message is required");
    }
    
    if (errors > 0) {
        return errors; 
    } 

    return errors;
}
     


//{ email: "alexxromeu@gmail.com", name: "alex", message: "message!" }