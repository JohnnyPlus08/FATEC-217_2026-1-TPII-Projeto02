// PRODUTO ABSTRATO
export class RoboMontador {
    montar() {
        throw new Error("Método montar() deve ser implementado");
    }
}