'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = require('three');

var _three2 = _interopRequireDefault(_three);

var _PolyhedronGeometryDescriptorBase = require('./PolyhedronGeometryDescriptorBase');

var _PolyhedronGeometryDescriptorBase2 = _interopRequireDefault(_PolyhedronGeometryDescriptorBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IcosahedronGeometryDescriptor = function (_PolyhedronGeometryDe) {
  _inherits(IcosahedronGeometryDescriptor, _PolyhedronGeometryDe);

  function IcosahedronGeometryDescriptor() {
    _classCallCheck(this, IcosahedronGeometryDescriptor);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(IcosahedronGeometryDescriptor).apply(this, arguments));
  }

  _createClass(IcosahedronGeometryDescriptor, [{
    key: 'construct',
    value: function construct(props) {
      var radius = props.radius;
      var detail = props.detail;


      return new _three2.default.IcosahedronGeometry(radius, detail);
    }
  }]);

  return IcosahedronGeometryDescriptor;
}(_PolyhedronGeometryDescriptorBase2.default);

module.exports = IcosahedronGeometryDescriptor;