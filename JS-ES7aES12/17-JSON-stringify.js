// Se ha presentado una nueva propuesta Well-formed JSON.stringify para evitar que
// JSON.stringify devuelva cadenas mal formadas de Unicode.
// La solución propuesta es representar los puntos de código sustituto no apareados
// como secuencias de escape JSON en lugar de devolverlos como unidades de código
// UTF-16 únicas.

JSON.stringify('\uDF06\uD834');
JSON.stringify('\uDEAD');
