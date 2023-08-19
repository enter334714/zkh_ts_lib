import { Project } from "ts-morph";


class Morph {
    constructor() {
        const project = new Project();
        project.addSourceFilesAtPaths("./src/**/*.ts");
        const sourceFiles = project.getSourceFiles();
        console.log("sourceFiles:", sourceFiles)

    }
}

new Morph();