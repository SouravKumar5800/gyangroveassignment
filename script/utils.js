export const getDate = (value) => {
    const date = new Date(value);

    return date.toLocaleDateString("en-US", {year: "numeric",
    month: "long",
    day: "numeric"})
}
