define(['app/core-uk', 'app/N/mock/Record'], function (core, Record) {
  "use strict";

  var mockRec = new Record({
    type: 'employee'
  });


  describe("testModule", function () {
    it("should be true", function () {
      expect(core.PeriodNo(new Date())).toBe(1);
      expect(core.convertPeriod(new Date())).toBe(false);
      expect(mockRec.id).toBe(undefined);
      expect(mockRec.getFields().length).toBe(0);
    });
  });
});
