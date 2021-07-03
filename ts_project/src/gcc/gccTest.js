const ClosureCompiler = require('google-closure-compiler').compiler;

console.log(ClosureCompiler.COMPILER_PATH); // absolute path to the compiler jar
console.log(ClosureCompiler.CONTRIB_PATH); // absolute path to the contrib folder which contain externs

const closureCompiler = new ClosureCompiler({
  js: 'main.js',
  compilation_level: 'SIMPLE',
  js_output_file:"main.min.js",
  // extra_annotation_name:"Laya",
  // jscomp_error:["Laya"],
  jscomp_off:"*"
});

const compilerProcess = closureCompiler.run((exitCode, stdOut, stdErr) => {
  //compilation complete
  console.log("exitCode:",exitCode);
  console.log("stdOut:",stdOut);
  console.log("stdErr:",stdErr);

});

