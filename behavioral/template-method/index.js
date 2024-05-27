class ExtractToFile {
  constructor() {
    this.file = null;
  }

  openFile(filePath) {
    console.log("Opening file", filePath);
  }

  extractRowData() {
    // required method
    throw new Error("Method extractRowData must be implemented");
  }

  parseData() {
    // required method
    throw new Error("Method parseData must be implemented");
  }

  analysis() {
    console.log("Analysis data");
  }

  sendReport() {
    console.log("Sending report");
  }

  closeFile(filePath) {
    console.log("Closing file", filePath);
  }

  //main method
  extract(filePath) {
    this.openFile(filePath);
    this.extractRowData();
    this.parseData();
    this.analysis();
    this.sendReport();
    this.closeFile(filePath);
  }
}

class ExtractDOCFile extends ExtractToFile {
  extractRowData() {
    console.log("Extracting row data from DOC file");
  }

  parseData() {
    console.log("Parsing data from DOC file");
  }
}

class ExtractCSVFile extends ExtractToFile {
  extractRowData() {
    console.log("Extracting row data from CSV file");
  }

  parseData() {
    console.log("Parsing data from CSV file");
  }
}

class ExtractPDFFile extends ExtractToFile {
  extractRowData() {
    console.log("Extracting row data from PDF file");
  }

  parseData() {
    console.log("Parsing data from PDF file");
  }
}

//TESTING

// const extractDOCFile = new ExtractDOCFile();
// extractDOCFile.extract("sample.doc");
// console.log("\n");

// const extractCSVFile = new ExtractCSVFile();
// extractCSVFile.extract("sample.csv");
// console.log("\n");

// const extractPDFFile = new ExtractPDFFile();
// extractPDFFile.extract("sample.pdf");
