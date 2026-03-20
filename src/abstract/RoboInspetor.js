// PRODUTO ABSTRATO
export class RoboInspetor {
    inspecionar() {
        throw new Error("Método inspecionar() deve ser implementado");
    }
}