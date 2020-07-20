export function setName(name) {
    console.log(name, "is the new set name.")
    const stringifiedName = JSON.stringify({ "name": name });
    // console.log(stringifiedName);
    window.localStorage.setItem("test", stringifiedName)

}
export function getName(name) {
    const json = window.localStorage.getItem("test");
    const data = JSON.parse(json);
    if (data) {
        return data.name;
    }
    else {
        return "Undefined."
    }
}
