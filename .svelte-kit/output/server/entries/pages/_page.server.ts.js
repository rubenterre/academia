import { n as getCursosDestacados } from "../../chunks/cursos.js";
//#region src/routes/+page.server.ts
var load = async () => {
	return { cursosDestacados: await getCursosDestacados(6) };
};
//#endregion
export { load };
