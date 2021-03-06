'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = require('three');

var _three2 = _interopRequireDefault(_three);

var _MaterialDescriptorBase = require('./MaterialDescriptorBase');

var _MaterialDescriptorBase2 = _interopRequireDefault(_MaterialDescriptorBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MeshBasicMaterialDescriptor = function (_MaterialDescriptorBa) {
  _inherits(MeshBasicMaterialDescriptor, _MaterialDescriptorBa);

  function MeshBasicMaterialDescriptor(react3RendererInstance) {
    _classCallCheck(this, MeshBasicMaterialDescriptor);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MeshBasicMaterialDescriptor).call(this, react3RendererInstance));

    _this.hasColor();
    _this.hasWireframe();
    return _this;
  }

  _createClass(MeshBasicMaterialDescriptor, [{
    key: 'construct',
    value: function construct(props) {
      var materialDescription = this.getMaterialDescription(props);

      if (props.hasOwnProperty('map')) {
        materialDescription.map = props.map;
      }

      return new _three2.default.MeshBasicMaterial(materialDescription);
    }
  }]);

  return MeshBasicMaterialDescriptor;
}(_MaterialDescriptorBase2.default);

module.exports = MeshBasicMaterialDescriptor;