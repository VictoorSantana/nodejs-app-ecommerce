


const fs = require('fs');

module.exports = {

    exist: function (folderName = '', query = '') {
        try {
            const tes = require(`../../public/cache/${folderName}/${query}.json`);
            return tes;
        } catch (ex) {
            return null;
        }
    },


    save: function (values = {}, folderName = '', query = '') {

        if (!fs.existsSync(`${__dirname}/../../public/cache/${folderName}/`)) {
            fs.mkdirSync(`${__dirname}/../../public/cache/${folderName}/`, { recursive: true });
        }

        fs.writeFile(`${__dirname}/../../public/cache/${folderName}/${query}.json`, JSON.stringify(values), (err) => {
            if (err) { console.error(err); return; };
            console.log("Cache JSON has been created");
        });
    },


    delete(folderName = '') {
        fs.rmdirSync(`${__dirname}/../../public/cache/${folderName}/`, { recursive: true });
    }

}