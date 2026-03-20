// FABRICA ABSTRATA
export class RoboFactory {
    criarRoboMontador() {
        throw new Error("Deve implementar criarRoboMontador()");
    }

    criarRoboInspetor() {
        throw new Error("Deve implementar criarRoboInspetor()");
    }
}