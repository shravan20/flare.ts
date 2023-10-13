import { expect } from "chai";
import {
  formatDate,
  getCurrentDate,
  addDaysToDate,
  getDayOfWeek,
  isLeapYear,
  getDaysInMonth,
  formatToISO,
  formatToMMDDYYYY,
  formatToLongDate,
  formatTime,
  formatToTimeAgo,
  customDateFormat,
} from "../../utility/DateUtils/index";

describe("Date/Time Utility Functions", () => {
  describe("formatDate", () => {
    it("should format date correctly", () => {
      const date = new Date(2023, 9, 13); // October 13, 2023
      const formattedDate = formatDate(date, "MM/DD/YYYY");
      expect(formattedDate).to.equal("10/13/2023");
    });
  });

  describe("getCurrentDate", () => {
    it("should return the current date", () => {
      const currentDate = getCurrentDate();
      const now = new Date();
      expect(currentDate.getFullYear()).to.equal(now.getFullYear());
      expect(currentDate.getMonth()).to.equal(now.getMonth());
      expect(currentDate.getDate()).to.equal(now.getDate());
    });
  });

  describe("addDaysToDate", () => {
    it("should correctly add days to the date", () => {
      const date = new Date(2023, 9, 13); // October 13, 2023
      const newDate = addDaysToDate(date, 5);
      expect(newDate.getDate()).to.equal(18);
    });
  });

  describe("getDayOfWeek", () => {
    it("should return the correct day of the week", () => {
      const date = new Date(2023, 9, 13); // October 13, 2023 (Friday)
      const dayOfWeek = getDayOfWeek(date);
      expect(dayOfWeek).to.equal("Friday");
    });
  });

  describe("isLeapYear", () => {
    it("should correctly determine if a year is a leap year", () => {
      expect(isLeapYear(2020)).to.equal(true);
      expect(isLeapYear(2021)).to.be.equal(false);
    });
  });

  describe("getDaysInMonth", () => {
    it("should return the correct number of days in a month", () => {
      // February 2023 (not a leap year)
      expect(getDaysInMonth(2023, 1)).to.equal(28);
      // March 2023
      expect(getDaysInMonth(2023, 2)).to.equal(31);
    });
  });

  describe("formatToISO", () => {
    it("should correctly format the date to ISO string", () => {
      const date = new Date(2023, 9, 13, 15, 30, 45);
      const isoDate = formatToISO(date);
      expect(isoDate).to.equal("2023-10-13T10:00:45.000Z");
    });
  });

  describe("formatToTimeAgo", () => {
    it("should correctly format the time difference to `time ago`", () => {
      const now = new Date();
      const oneMinuteAgo = new Date(now.getTime() - 60000);
      const timeAgo = formatToTimeAgo(oneMinuteAgo);
      expect(timeAgo).to.equal("1 minute ago");
    });
  });

  describe("customDateFormat", () => {
    it("should correctly apply the custom date format", () => {
      const date = new Date(2023, 9, 13, 15, 30, 45);
      const customFormattedDate = customDateFormat(date, "YYYY-MM-DD HH:mm:ss");
      expect(customFormattedDate).to.equal("2023-10-13 15:30:45");
    });

    it("should handle various format options", () => {
      const date = new Date(2023, 9, 13, 8, 5, 12);
      const customFormattedDate = customDateFormat(date, "MM/DD/YYYY HH:mm:ss");
      expect(customFormattedDate).to.equal("10/13/2023 08:05:12");
    });
  });

  describe("formatToLongDate", () => {
    it("should correctly format the date to a long date string", () => {
      const date = new Date(2023, 9, 13); // October 13, 2023
      const longDate = formatToLongDate(date);
      expect(longDate).to.equal("Friday, October 13, 2023");
    });
  });
});

describe("Date Formatting Utility Functions", () => {
  describe("formatToMMDDYYYY", () => {
    it("should format to MM/DD/YYYY", () => {
      const date = new Date(2023, 9, 13); // October 13, 2023
      const formattedDate = formatToMMDDYYYY(date);
      expect(formattedDate).to.equal("10/13/2023");
    });
  });

  describe("formatTime", () => {
    it("should format time correctly", () => {
      const date = new Date(2023, 9, 13, 15, 30, 45); // 3:30:45 PM
      const formattedTime = formatTime(date);
      console.log(formatTime)
      expect(formattedTime).to.equal("03:30 PM");
    });
  });
});
