const fs = require("fs");

const fileName = "sample.txt";


// CREATE FILE

fs.writeFile(fileName, "Hello! This is my first file.", (err) => {

    if (err) {
        console.log("Error creating file");
        return;
    }

    console.log("File created successfully");


    // READ FILE

    fs.readFile(fileName, "utf8", (err, data) => {

        if (err) {
            console.log("Error reading file");
            return;
        }

        console.log("File Content:");
        console.log(data);


        // UPDATE FILE

        fs.appendFile(
            fileName,
            "\nThis text is added to the file.",
            (err) => {

                if (err) {
                    console.log("Error updating file");
                    return;
                }

                console.log("File updated successfully");


                // DELETE FILE

                fs.unlink(fileName, (err) => {

                    if (err) {
                        console.log("Error deleting file");
                        return;
                    }

                    console.log("File deleted successfully");

                });

            }
        );

    });

});

