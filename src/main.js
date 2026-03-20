import { AutomotivaFactory } from "./factories/AutomotivaFactory.js";
import { EletronicosFactory } from "./factories/EletronicosFactory.js";
import { executarFabrica } from "./client/Application.js";

console.log("===== LINHA AUTOMOTIVA =====");
executarFabrica(new AutomotivaFactory());

console.log("\n===========================\n");

console.log("===== LINHA ELETRÔNICA =====");
executarFabrica(new EletronicosFactory());