import { ReportGenerator, ReportSaver } from "./index";

describe("Single Responsibility Principle example", () => {
  describe("ReportGenerator", () => {
    it("should generate report content", () => {
      const reportGenerator = new ReportGenerator("Title", "Body");
      expect(reportGenerator.generateReportContent()).toEqual("Title\nBody");
    });
  });

  describe("ReportSaver", () => {
    it("should save report to file", () => {
      const consoleSpy = jest.spyOn(console, "log");
      const reportSaver = new ReportSaver();
      reportSaver.saveToFile("report.txt");
      expect(consoleSpy).toHaveBeenCalledWith("Report saved to report.txt");
    });
  });
});
