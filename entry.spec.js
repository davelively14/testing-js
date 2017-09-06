describe("entry", function() {

  // So this actually doesn't work...
  beforeEach(function() {
    // When called, returns a new version of filea's exports with mocks in
    // place where we specify.
    let fileInjector = require("inject-loader!entry");

    // The mock. Instead of returning 10, our mock for the getSpecialValue
    // function will return 1. If we had other functions we wished to override
    // then we could do that here as well.
    this.filea = {
      getSpecialValue: function() {
        return 1;
      }
    };

    // Since we want to mock the filea module, we pass our mock to the filea
    // property. That mock will be an object that contains all of our mocked
    // functions (in this case, just the getSpecialValue).
    this.entry = fileInjector({
      "filea": this.filea
    });

    // Attaches spy to our mocked this.filea. This exposes methods like
    // calledOnce (see last test).
    sinon.spy(this.filea, "getSpecialValue");
  });

  it("works without override", function() {
    expect(require("entry.js").getValue()).to.equal(20);
  });

  it("overrides", function() {
    expect(this.entry.getValue()).to.equal(2);
  });

  it("gets a special value from filea", function() {
    this.entry.getValue();
    expect(this.filea.getSpecialValue.calledOnce).to.be.true
  });
});
