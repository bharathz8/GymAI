import { atom } from "recoil";

const currentIndexAtom = atom ({
    key: "currentIndexAtom",
    default: 0
})

const reviewIndexAtom = atom ({
    key: "reviewIndexAtom",
    default: 0
})

const visibleAtom = atom ({
    key: "visibleAtom",
    default: false
})

const openAtom = atom ({
    key: "openAtom",
    default: null
})

const menuAtom = atom ({
    key: "menuAtom",
    default: false
}) 

export {currentIndexAtom, visibleAtom, reviewIndexAtom, openAtom, menuAtom};