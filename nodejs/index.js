import app from "./api/index.js";

const port = 8000;

app.listen(port, () => {
    try {
        console.log(`Servidor backend corriendo en http://localhost:${port}`);
    } catch (error) {
        console.log(error)
    }
});