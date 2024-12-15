import { MutableRefObject } from "react";

const addClass = (ref: any, name: string) => {
    ref.classList.add(name);
}

const removeClass = (ref: any, name: string) => {
    ref.classList.rempve(name);
}

const hasClass = (ref: any, name: string) => {
    return ref.classList.contains(name);
}

export { addClass, removeClass, hasClass };