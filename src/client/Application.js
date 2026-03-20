export function executarFabrica(factory) {
    const montador = factory.criarRoboMontador();
    const inspetor = factory.criarRoboInspetor();

    console.log(montador.montar());
    console.log(inspetor.inspecionar());
}