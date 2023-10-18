export const getUserShortName=()=>{
    const firstName= localStorage.getItem("firstName");
    const lastName= localStorage.getItem("lastName");
        const shortName= `${firstName[0]}${lastName[0]}`;
        return shortName.toUpperCase();
}