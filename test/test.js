// const expect = chai.expect,
//   should = chai.should(),
//   assert = chai.assert;

const assert = chai.assert;

describe('CONFIRM PURCHASE PROJECT:', function() {
  describe('Labels:', function() {
    describe('Card Holder Name', function() {
      const cardNameLabel = document.getElementById('ownerLabel');
      it('cardName label should exist', function() {
        assert.notEqual(cardNameLabel, null);
      });
      it('cardName label should have text', function() {
        assert.equal(cardNameLabel.innerHTML, 'Card Holder Name');
      });
    });
    describe('CVV', function() {
      const cvvLabel = document.getElementById('cvvLabel');
      it('cardName label should exist', function() {
        assert.notEqual(cvvLabel, null);
      });
      it('cardName label should have text', function() {
        assert.equal(cvvLabel.innerHTML, 'CVV');
      });
    });
    describe('Card Number', function() {
      const cardNumberLabel = document.getElementById('cardNumberLabel');
      it('cardName label should exist', function() {
        assert.notEqual(cardNumberLabel, null);
      });
      it('cardName label should have text', function() {
        assert.equal(cardNumberLabel.innerHTML, 'Card Number');
      });
    });
  });

  describe('Input Fields:', function() {
    describe('Name on Card', function() {
      const nameOnCardElement = document.getElementById('cardName');
      it('should be a string', function() {
        assert.equal(typeof(nameOnCardElement.value), 'string');
      });
      it('should be empty', function() {
        assert.equal(nameOnCardElement.value, '');
      });
      it('should have placeholder with text', function() {
        assert.equal(nameOnCardElement.placeholder, 'e.g. ANI BARABANI');
      });
    });
    describe('CVV', function() {
      const cvv = document.getElementById('cvv');
      it('should be a string', function() {
        assert.equal(typeof(cvv.value), 'string');
      });
      it('should be empty', function() {
        assert.equal(cvv.value, '');
      });
      it('should have placeholder with text', function() {
        assert.equal(cvv.placeholder, 'e.g. 567');
      });
    });
    describe('Card Number', function() {
      const cardNumber = document.getElementById('cardNumber');
      it('should be a string', function() {
        assert.equal(typeof(cardNumber.value), 'string');
      });
      it('should be empty', function() {
        assert.equal(cardNumber.value, '');
      });
      it('should have placeholder with text', function() {
        assert.equal(cardNumber.placeholder, 'e.g. 1234 5647 8901');
      });
    });
  });

  describe('Expiration Date:', function() {
    describe('Month:', function() {
      const dateMonth = document.getElementById('month');
      it('should be a string', function() {
        assert.equal(typeof(dateMonth[0].innerHTML), 'string');
      });
      it('should be equal January', function() {
        assert.equal(dateMonth[0].innerHTML, 'January');
      });
      it('should have 12 options', function() {
        assert.equal(dateMonth.childElementCount, '12');
      });
      it('last options should be December', function() {
        assert.equal(dateMonth[dateMonth.length - 1].innerHTML, 'December');
      });
    });
    describe('Year:', function() {
      const dateYear = document.getElementById('year');
      it('should be a string', function() {
        assert.equal(typeof(dateYear[0].innerHTML), 'string');
      });
      it('should be equal 2017', function() {
        assert.equal(dateYear[0].innerHTML, '2017');
      });
      it('should have 11 options', function() {
        assert.equal(dateYear.childElementCount, '11');
      });
      it('last options should be 2027', function() {
        assert.equal(dateYear[dateYear.length - 1].innerHTML, '2027');
      });
    });
  });
});