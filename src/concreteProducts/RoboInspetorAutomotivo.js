import { RoboInspetor } from "../abstract/RoboInspetor.js";

export class RoboInspetorAutomotivo extends RoboInspetor {
    inspecionar() {
        return "Inspecionando peças automotivas...";
    }
}