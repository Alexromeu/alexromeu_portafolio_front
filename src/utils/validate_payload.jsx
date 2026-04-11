

export default function validate_data(payload) {
  const errors = []

  const { email, name, message } = payload

  if (typeof email !== "string" || email.length < 3 || !email.includes("@")) {
    errors.push("Invalid email")
  }

  if (typeof name !== "string" || name.length < 3) {
    errors.push("Invalid name")
  }

  if (typeof message !== "string" || message.length < 3) {
    errors.push("Invalid message")
  }

  return errors
}


//{ email: "alexxromeu@gmail.com", name: "alex", message: "message!" }