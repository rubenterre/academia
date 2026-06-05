import { t as getCursos } from "../../../chunks/cursos.js";
//#region src/routes/cursos/+page.server.ts
var load = async () => {
	return { cursos: await getCursos() };
};
//#endregion
export { load };
