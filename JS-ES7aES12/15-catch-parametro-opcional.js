// En el pasado, la cláusula catch de una try/catch declaración requería una variable.
// Ahora puedes utilizarlo sin necesidad de especificarlo como catch(error) sino
// directamente usarlo en el scope del catch.

try{
    throw new Error("some error");
} catch {
console. log("no params for catch");
}