## POO ( Programación Orientada a Objetos )

La POO es un paradigma de programación, una manera de  programar específica, donde se organiza el código en unidades denominadas **clases**, **de las cuales se crean los objetos que se relacionan entre sí para crear el coportamiento de la web.**

En  ES6 mejora la sintaxis de los prototype y usando los clásicos class popularmente aceptados en el resto de lenguajes con POO.

### **Clases VS Objetos**

En POO hay varias terminologías que tenemos que tener claras para entender el paradigma. 

- Clases: Son  los planos del Objeto.
- Objetos: El medio el cual usamos.
- Instanciar: Es el proceso el cual, usamos una clase para elaborar un objeto. (new)

### Sintaxis de Clase

```jsx
class Tarea {
	constructor(texto, id) {
		console.log('tarea instanciada! con el texto:', texto);
		this.texto = texto;
		this.id = id;
		this.fecha = new Date();
	}

	fechaHoy() {
		this.fecha = new Date();
	}

}
```

```jsx
let tarea = new Tarea('comprar leche', 1); // "tarea instanciada!"

console.log(typeof tarea); // object
console.log(tarea); // Tarea { texto: 'comprar leche', id: 1,
fecha:{} }
```