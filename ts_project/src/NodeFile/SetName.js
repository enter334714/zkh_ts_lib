var fs = require("fs");

var path = __dirname;
console.log("path:", path);
path = path + "/files"


function readChild(jsonData) {
    // console.log("jsonData:", JSON.stringify(jsonData));
    let props = jsonData.props;
    if (props) {
        let vvar = props.var;
        if (vvar) {
            if (!props.name) {
                props.name = vvar;
                console.log(props.name);
            }
        }
    }
    let child = jsonData.child;
    // console.log("child:", child)
    if (child && child.length > 0) {
        for (var i = 0; i < child.length; i++) {
            readChild(child[i]);
        }
    } else {
        return;
    }
}

fs.readdir(path, (error, files) => {
    if (error) {
        console.log("出错了：", error);
        return;
    }
    console.log("文件列表:", files);
    files.forEach(function (file) {

        file = path + "/" + file;
        console.log("文件名:", file)
        fs.open(file, "r+", function (err, fd) {
            if (err) {
                console.log(err, file);
                return;
            }
            console.log("打开成功:" + file);
            // var buffer = new Buffer();
            fs.readFile(file, function (err, data) {
                if (err) {
                    return console.error(err);
                }

                // console.log("读取成功:" + file);
                let jsonData = JSON.parse(data.toString());
                // let props = jsonData.props;
                let child = jsonData.child;
                if (child.length > 0) {
                    for (var i = 0; i < child.length; i++) {
                        readChild(child[i]);
                    }
                }

                fs.writeFile(file, JSON.stringify(jsonData), function (err) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log("数据写入成功！", file);

                });
                    
                // console.log("props:",props)
                // if(props){
                //     let vvar = props.var;
                //     if(vvar){
                //         if(!props.name){
                //             props.name = vvar;
                //             fs.writeFile(file, JSON.stringify(jsonData),function(err) {
                //                 if (err) {
                //                     return console.error(err);
                //                 }
                //                 console.log("数据写入成功！",file,"name:",vvar);

                //              });
                //         }
                //     }
                // }

            });
        })
    })
})

function writeFile(file) {
    fs.open()
}