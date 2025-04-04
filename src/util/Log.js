const log = (msg = "data", data) => {
    if (import.meta.env.VITE_ENV === "DEV") {
        console.log(msg, data?data:'');
    }
};
export default log;
