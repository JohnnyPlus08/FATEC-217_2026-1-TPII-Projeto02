import { RoboFactory } from "../abstract/RoboFactory.js";
import { RoboMontadorEletronico } from "../concreteProducts/RoboMontadorEletronico.js";
import { RoboInspetorEletronico } from "../concreteProducts/RoboInspetorEletronico.js";

export class EletronicosFactory extends RoboFactory {
    criarRoboMontador() {
        return new RoboMontadorEletronico();
    }

    criarRoboInspetor() {
        return new RoboInspetorEletronico();
    }
}