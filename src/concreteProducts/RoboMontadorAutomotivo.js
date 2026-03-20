import { RoboMontador } from "../abstract/RoboMontador.js";

export class RoboMontadorAutomotivo extends RoboMontador {
    montar() {
        return "Montando carros...";
    }
}