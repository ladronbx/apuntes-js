## Retoinvestigación : Eventos del DOM → Pulsación teclas en el keyboard

Busca información acerca de eventos en el DOM que tengan relación con la pulsación de teclas en el keyboard.
Hay varios de ellos, te daré una pista: puedes empezar buscando acerca de keyup

Uno de esos eventos es `keyup`. Aquí tienes detalles sobre algunos de los eventos más comunes relacionados con la pulsación de teclas:

1. **keydown:** Este evento se dispara cuando una tecla del teclado es presionada. Ocurre justo antes de que la letra o carácter correspondiente aparezca en un campo de entrada. Puedes utilizar este evento para detectar cuándo se presiona una tecla antes de que se libere.
2. **keypress:** Este evento también se dispara cuando una tecla es presionada, pero solo se aplica a teclas que generan caracteres. Esto significa que no se dispara para teclas como Shift, Ctrl, Alt, etc. Este evento solía ser más común en el pasado, pero ha sido en gran parte reemplazado por el evento `input` en muchos casos.
3. **keyup:** Este evento se activa cuando una tecla del teclado es liberada. Puedes utilizarlo para detectar cuando un usuario deja de presionar una tecla específica. Es útil para detectar acciones de entrada de texto después de que se haya completado la pulsación de una tecla.
4. **input:** Aunque no es un evento de teclado en sí, este evento se dispara cuando el contenido de un elemento de entrada cambia. Puede ocurrir como resultado de la entrada del teclado, pero también puede ser desencadenado por otras formas de entrada, como pegar contenido.
5. **keydown/keyup con propósito de control:** Además de los eventos anteriores, hay algunas teclas específicas que no generan caracteres, pero que los navegadores permiten controlar, como las teclas de flecha, las teclas de función (F1, F2, etc.) y las teclas de modificación (Shift, Ctrl, Alt, etc.). Puedes usar eventos `keydown` o `keyup` para detectar estas teclas y controlar acciones personalizadas en tu sitio web.

Aquí hay un ejemplo básico de cómo podrías usar el evento `keyup` en JavaScript para detectar cuando se suelta una tecla específica:

```jsx
document.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    // Realizar una acción cuando se suelta la tecla Enter
    console.log("La tecla Enter fue liberada");
  }
});

```

Recuerda que la propiedad `key` del objeto `event` te permite verificar qué tecla específica fue presionada o liberada.