var fs=require("fs");
var myArgs = process.argv.slice(2);
//console.log("Arguments : ", myArgs);

switch(myArgs){
    case "--create-file":
        fs.writeFile(file_name,function(err){
            if(err){
                console.log(err.message);
                console.log("File name is"+ file_name);
            }
        });
        break;

    case "--create-dir":
        fs.mkdir(file_name,function(err,path){
            if(err){
                console.log(err.message);
                console.log("Directory name is"+ file_name);
            }
        });
        break;
        
    case "--read-file":
            fs.readFile(file_name,"utf-8",function(err){
                if(err){
                    console.log(err.message);
                    console.log("Content of "+ file_name +" is"+DataTransfer.toString());
                }
            });
            break;
        
    case "--rename-file":
                fs.rename(file_name,new_name,function(err){
                    if(err){
                        console.log(err.message);
                        console.log("File "+ file_name+"name change to"+new_name);
                    }
                });
                break;
        
    case "--delete-file":
                    fs.rm(file_name,function(err){
                        if(err){
                            console.log(err.message);
                            console.log("File "+ file_name+"deleted successfully");
                        }
                    });
                    break;

    case "--delete-dir":
                        fs.rmdir(file_name,function(err){
                            if(err){
                                console.log(err.message);
                                console.log("File name is"+ file_name);
                            }
                        });
                        break;

    dafault:console.log("error hai");
    break;                    
}