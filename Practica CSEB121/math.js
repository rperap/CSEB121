export const secretNumber = 30

export let name = 'my math module'

export let x= 30, y = 100;

export function add (x, y) {
    return x + y
}

export function subtract (x, y) {
    return x - y
}

export function multiply (x, y) {
    return x * y
}

export function divide (x, y) {
    return x / y
}

export default {
    add, subtract
}
// se usa para exportar funciones por defecto