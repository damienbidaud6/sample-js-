parse(){

   const basePath = '/components/detail/';
   const dirPath = `${__dirname + this._paths.componentsPath}`;
   return new Promise((resolve, reject) => {fs.readdir(dirPath, (err, files) => {
     const directoryStructure = [];

     if(err) {
       reject(err);
     }
     files.map((file) => {return path.join(dirPath, file); })
       .filter((file) => {return fs.statSync(file).isDirectory(); })
       .forEach((file) => {
         const direName = path.basename(file);
         directoryStructure.push({
           name: direName,
           path: `${basePath + direName}`
         });
       });
     resolve(directoryStructure);
   })});
 }

 export.defaults = parse;
