// Module with single responsibility (follows SRP)
class ReportGenerator {
  private title: string;
  private body: string;

  constructor(title: string, body: string) {
    this.title = title;
    this.body = body;
  }

  generateReportContent(): string {
    return `${this.title}\n${this.body}`;
  }
}

// Module with single responsibility (follows SRP)
class ReportSaver {
  saveToFile(filename: string): void {
    // Save to file logic
    console.log(`Report saved to ${filename}`);
  }
}

// Module with multiple responsibilities (violates SRP)
// class Report {
//   private title: string;
//   private body: string;

//   constructor(title: string, body: string) {
//     this.title = title;
//     this.body = body;
//   }

//   generateReportContent(): string {
//     return `${this.title}\n${this.body}`;
//   }

//   saveToFile(filename: string): void {
//     // Save to file logic
//     console.log(`Report saved to ${filename}`);
//   }
// }

export { ReportGenerator, ReportSaver };
