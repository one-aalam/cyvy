const fs = require('fs');
const PDFDoc = require('pdfkit');

module.exports = {
    parse(resumeObj){
        let doc = new PDFDoc();
            doc.pipe(fs.createWriteStream('output.pdf'));
            
        // Keys of interest 
        let {
            basics,
            work,
            volunteer,
            education,
            awards,
            publications,
            skills,
            languages,
            interests,
            references
        } = resumeObj;
    
        // Kickstart generation...
        if(basics){

        }
    }
}