export const validatelogin = (email, password, name) => {
    const isemailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const ispasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isname = /^[a-zA-Z ]{2,30}$/.test(name);
    if (!isemailvalid)
        return "Email is not Valid"
    if (!ispasswordvalid)
        return "Password Not valid"
    if (!isname)
        return "Enter Correct Name"
    return null;
}