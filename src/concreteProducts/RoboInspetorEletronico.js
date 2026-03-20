import { RoboInspetor } from "../abstract/RoboInspetor.js";

export class RoboInspetorEletronico extends RoboInspetor {
    inspecionar() {
        return "Inspecionando chips...";
    }
}