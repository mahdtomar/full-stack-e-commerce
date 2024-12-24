const log = (msg = "data", data) => {
    if (import.meta.env.VITE_ENV === "DEV") {
        console.log(msg, data);
    }
};
export default log;
