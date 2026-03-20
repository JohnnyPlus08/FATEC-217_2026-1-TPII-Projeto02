import { RoboFactory } from "../abstract/RoboFactory.js";
import { RoboMontadorAutomotivo } from "../concreteProducts/RoboMontadorAutomotivo.js";
import { RoboInspetorAutomotivo } from "../concreteProducts/RoboInspetorAutomotivo.js";

export class AutomotivaFactory extends RoboFactory {
    criarRoboMontador() {
        return new RoboMontadorAutomotivo();
    }

    criarRoboInspetor() {
        return new RoboInspetorAutomotivo();
    }
}