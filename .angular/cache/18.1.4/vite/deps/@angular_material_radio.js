import {
  UniqueSelectionDispatcher
} from "./chunk-DWTH4YG3.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-BSPNSL6G.js";
import {
  FocusMonitor,
  MatCommonModule,
  MatRipple,
  MatRippleModule,
  _MatInternalFormField
} from "./chunk-TGD3FD3I.js";
import "./chunk-6XVBT7Y7.js";
import "./chunk-4H2MIMVP.js";
import {
  CommonModule
} from "./chunk-YJAHL4QH.js";
import {
  ANIMATION_MODULE_TYPE,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Optional,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  afterNextRender,
  booleanAttribute,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵviewQuery
} from "./chunk-O52VBTXF.js";
import "./chunk-ORNLS2RR.js";
import "./chunk-7KUA62RY.js";
import "./chunk-D4JAG7AO.js";
import "./chunk-WCSART4P.js";
import "./chunk-35ENWJA4.js";

// node_modules/@angular/material/fesm2022/radio.mjs
var _c0 = ["input"];
var _c1 = ["formField"];
var _c2 = ["*"];
var nextUniqueId = 0;
var MatRadioChange = class {
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatRadioGroup),
  multi: true
};
var MAT_RADIO_GROUP = new InjectionToken("MatRadioGroup");
var MAT_RADIO_DEFAULT_OPTIONS = new InjectionToken("mat-radio-default-options", {
  providedIn: "root",
  factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
});
function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: "accent"
  };
}
var _MatRadioGroup = class _MatRadioGroup {
  /** Name of the radio button group. All radio buttons inside this group will use this name. */
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._updateRadioButtonNames();
  }
  /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition;
  }
  set labelPosition(v) {
    this._labelPosition = v === "before" ? "before" : "after";
    this._markRadiosForCheck();
  }
  /**
   * Value for the radio-group. Should equal the value of the selected radio button if there is
   * a corresponding radio button with a matching value. If there is not such a corresponding
   * radio button, this value persists to be applied in case a new radio button is added with a
   * matching value.
   */
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (this._value !== newValue) {
      this._value = newValue;
      this._updateSelectedRadioFromValue();
      this._checkSelectedRadioButton();
    }
  }
  _checkSelectedRadioButton() {
    if (this._selected && !this._selected.checked) {
      this._selected.checked = true;
    }
  }
  /**
   * The currently selected radio button. If set to a new radio button, the radio group value
   * will be updated to match the new selected button.
   */
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.value = selected ? selected.value : null;
    this._checkSelectedRadioButton();
  }
  /** Whether the radio group is disabled */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._markRadiosForCheck();
  }
  /** Whether the radio group is required */
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = value;
    this._markRadiosForCheck();
  }
  constructor(_changeDetector) {
    this._changeDetector = _changeDetector;
    this._value = null;
    this._name = `mat-radio-group-${nextUniqueId++}`;
    this._selected = null;
    this._isInitialized = false;
    this._labelPosition = "after";
    this._disabled = false;
    this._required = false;
    this._controlValueAccessorChangeFn = () => {
    };
    this.onTouched = () => {
    };
    this.change = new EventEmitter();
  }
  /**
   * Initialize properties once content children are available.
   * This allows us to propagate relevant attributes to associated buttons.
   */
  ngAfterContentInit() {
    this._isInitialized = true;
    this._buttonChanges = this._radios.changes.subscribe(() => {
      if (this.selected && !this._radios.find((radio) => radio === this.selected)) {
        this._selected = null;
      }
    });
  }
  ngOnDestroy() {
    this._buttonChanges?.unsubscribe();
  }
  /**
   * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
   * radio buttons upon their blur.
   */
  _touch() {
    if (this.onTouched) {
      this.onTouched();
    }
  }
  _updateRadioButtonNames() {
    if (this._radios) {
      this._radios.forEach((radio) => {
        radio.name = this.name;
        radio._markForCheck();
      });
    }
  }
  /** Updates the `selected` radio button from the internal _value state. */
  _updateSelectedRadioFromValue() {
    const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
    if (this._radios && !isAlreadySelected) {
      this._selected = null;
      this._radios.forEach((radio) => {
        radio.checked = this.value === radio.value;
        if (radio.checked) {
          this._selected = radio;
        }
      });
    }
  }
  /** Dispatch change event with current selection and group value. */
  _emitChangeEvent() {
    if (this._isInitialized) {
      this.change.emit(new MatRadioChange(this._selected, this._value));
    }
  }
  _markRadiosForCheck() {
    if (this._radios) {
      this._radios.forEach((radio) => radio._markForCheck());
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value
   */
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  /**
   * Registers a callback to be triggered when the model value changes.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  /**
   * Registers a callback to be triggered when the control is touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
   * @param isDisabled Whether the control should be disabled.
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetector.markForCheck();
  }
};
_MatRadioGroup.ɵfac = function MatRadioGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatRadioGroup)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_MatRadioGroup.ɵdir = ɵɵdefineDirective({
  type: _MatRadioGroup,
  selectors: [["mat-radio-group"]],
  contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MatRadioButton, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._radios = _t);
    }
  },
  hostAttrs: ["role", "radiogroup", 1, "mat-mdc-radio-group"],
  inputs: {
    color: "color",
    name: "name",
    labelPosition: "labelPosition",
    value: "value",
    selected: "selected",
    disabled: [2, "disabled", "disabled", booleanAttribute],
    required: [2, "required", "required", booleanAttribute]
  },
  outputs: {
    change: "change"
  },
  exportAs: ["matRadioGroup"],
  standalone: true,
  features: [ɵɵProvidersFeature([MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
    provide: MAT_RADIO_GROUP,
    useExisting: _MatRadioGroup
  }]), ɵɵInputTransformsFeature]
});
var MatRadioGroup = _MatRadioGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioGroup, [{
    type: Directive,
    args: [{
      selector: "mat-radio-group",
      exportAs: "matRadioGroup",
      providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: MatRadioGroup
      }],
      host: {
        "role": "radiogroup",
        "class": "mat-mdc-radio-group"
      },
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    change: [{
      type: Output
    }],
    _radios: [{
      type: ContentChildren,
      args: [forwardRef(() => MatRadioButton), {
        descendants: true
      }]
    }],
    color: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _MatRadioButton = class _MatRadioButton {
  /** Whether this radio button is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (this._checked !== value) {
      this._checked = value;
      if (value && this.radioGroup && this.radioGroup.value !== this.value) {
        this.radioGroup.selected = this;
      } else if (!value && this.radioGroup && this.radioGroup.value === this.value) {
        this.radioGroup.selected = null;
      }
      if (value) {
        this._radioDispatcher.notify(this.id, this.name);
      }
      this._changeDetector.markForCheck();
    }
  }
  /** The value of this radio button. */
  get value() {
    return this._value;
  }
  set value(value) {
    if (this._value !== value) {
      this._value = value;
      if (this.radioGroup !== null) {
        if (!this.checked) {
          this.checked = this.radioGroup.value === value;
        }
        if (this.checked) {
          this.radioGroup.selected = this;
        }
      }
    }
  }
  /** Whether the label should appear after or before the radio button. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || "after";
  }
  set labelPosition(value) {
    this._labelPosition = value;
  }
  /** Whether the radio button is disabled. */
  get disabled() {
    return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
  }
  set disabled(value) {
    this._setDisabled(value);
  }
  /** Whether the radio button is required. */
  get required() {
    return this._required || this.radioGroup && this.radioGroup.required;
  }
  set required(value) {
    this._required = value;
  }
  /**
   * Theme color of the radio button. This API is supported in M2 themes only, it
   * has no effect in M3 themes.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/theming#using-component-color-variants.
   */
  get color() {
    return this._color || this.radioGroup && this.radioGroup.color || this._providerOverride && this._providerOverride.color || "accent";
  }
  set color(newValue) {
    this._color = newValue;
  }
  /** ID of the native input element inside `<mat-radio-button>` */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  constructor(radioGroup, _elementRef, _changeDetector, _focusMonitor, _radioDispatcher, animationMode, _providerOverride, tabIndex) {
    this._elementRef = _elementRef;
    this._changeDetector = _changeDetector;
    this._focusMonitor = _focusMonitor;
    this._radioDispatcher = _radioDispatcher;
    this._providerOverride = _providerOverride;
    this._uniqueId = `mat-radio-${++nextUniqueId}`;
    this.id = this._uniqueId;
    this.disableRipple = false;
    this.tabIndex = 0;
    this.change = new EventEmitter();
    this._checked = false;
    this._value = null;
    this._removeUniqueSelectionListener = () => {
    };
    this._injector = inject(Injector);
    this.radioGroup = radioGroup;
    this._noopAnimations = animationMode === "NoopAnimations";
    if (tabIndex) {
      this.tabIndex = numberAttribute(tabIndex, 0);
    }
  }
  /** Focuses the radio button. */
  focus(options, origin) {
    if (origin) {
      this._focusMonitor.focusVia(this._inputElement, origin, options);
    } else {
      this._inputElement.nativeElement.focus(options);
    }
  }
  /**
   * Marks the radio button as needing checking for change detection.
   * This method is exposed because the parent radio group will directly
   * update bound properties of the radio button.
   */
  _markForCheck() {
    this._changeDetector.markForCheck();
  }
  ngOnInit() {
    if (this.radioGroup) {
      this.checked = this.radioGroup.value === this._value;
      if (this.checked) {
        this.radioGroup.selected = this;
      }
      this.name = this.radioGroup.name;
    }
    this._removeUniqueSelectionListener = this._radioDispatcher.listen((id, name) => {
      if (id !== this.id && name === this.name) {
        this.checked = false;
      }
    });
  }
  ngDoCheck() {
    this._updateTabIndex();
  }
  ngAfterViewInit() {
    this._updateTabIndex();
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (!focusOrigin && this.radioGroup) {
        this.radioGroup._touch();
      }
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._removeUniqueSelectionListener();
  }
  /** Dispatch change event with current value. */
  _emitChangeEvent() {
    this.change.emit(new MatRadioChange(this, this._value));
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  _onInputClick(event) {
    event.stopPropagation();
  }
  /** Triggered when the radio button receives an interaction from the user. */
  _onInputInteraction(event) {
    event.stopPropagation();
    if (!this.checked && !this.disabled) {
      const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
      this.checked = true;
      this._emitChangeEvent();
      if (this.radioGroup) {
        this.radioGroup._controlValueAccessorChangeFn(this.value);
        if (groupValueChanged) {
          this.radioGroup._emitChangeEvent();
        }
      }
    }
  }
  /** Triggered when the user clicks on the touch target. */
  _onTouchTargetClick(event) {
    this._onInputInteraction(event);
    if (!this.disabled) {
      this._inputElement.nativeElement.focus();
    }
  }
  /** Sets the disabled state and marks for check if a change occurred. */
  _setDisabled(value) {
    if (this._disabled !== value) {
      this._disabled = value;
      this._changeDetector.markForCheck();
    }
  }
  /** Gets the tabindex for the underlying input element. */
  _updateTabIndex() {
    const group = this.radioGroup;
    let value;
    if (!group || !group.selected || this.disabled) {
      value = this.tabIndex;
    } else {
      value = group.selected === this ? this.tabIndex : -1;
    }
    if (value !== this._previousTabIndex) {
      const input = this._inputElement?.nativeElement;
      if (input) {
        input.setAttribute("tabindex", value + "");
        this._previousTabIndex = value;
        afterNextRender(() => {
          queueMicrotask(() => {
            if (group && group.selected && group.selected !== this && document.activeElement === input) {
              group.selected?._inputElement.nativeElement.focus();
              if (document.activeElement === input) {
                this._inputElement.nativeElement.blur();
              }
            }
          });
        }, {
          injector: this._injector
        });
      }
    }
  }
};
_MatRadioButton.ɵfac = function MatRadioButton_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatRadioButton)(ɵɵdirectiveInject(MAT_RADIO_GROUP, 8), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(UniqueSelectionDispatcher), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), ɵɵdirectiveInject(MAT_RADIO_DEFAULT_OPTIONS, 8), ɵɵinjectAttribute("tabindex"));
};
_MatRadioButton.ɵcmp = ɵɵdefineComponent({
  type: _MatRadioButton,
  selectors: [["mat-radio-button"]],
  viewQuery: function MatRadioButton_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
      ɵɵviewQuery(_c1, 7, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._inputElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._rippleTrigger = _t.first);
    }
  },
  hostAttrs: [1, "mat-mdc-radio-button"],
  hostVars: 15,
  hostBindings: function MatRadioButton_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focus", function MatRadioButton_focus_HostBindingHandler() {
        return ctx._inputElement.nativeElement.focus();
      });
    }
    if (rf & 2) {
      ɵɵattribute("id", ctx.id)("tabindex", null)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
      ɵɵclassProp("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("mat-mdc-radio-checked", ctx.checked)("_mat-animation-noopable", ctx._noopAnimations);
    }
  },
  inputs: {
    id: "id",
    name: "name",
    ariaLabel: [0, "aria-label", "ariaLabel"],
    ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
    disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
    tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
    checked: [2, "checked", "checked", booleanAttribute],
    value: "value",
    labelPosition: "labelPosition",
    disabled: [2, "disabled", "disabled", booleanAttribute],
    required: [2, "required", "required", booleanAttribute],
    color: "color"
  },
  outputs: {
    change: "change"
  },
  exportAs: ["matRadioButton"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c2,
  decls: 13,
  vars: 16,
  consts: [["formField", ""], ["input", ""], ["mat-internal-form-field", "", 3, "labelPosition"], [1, "mdc-radio"], [1, "mat-mdc-radio-touch-target", 3, "click"], ["type", "radio", 1, "mdc-radio__native-control", 3, "change", "id", "checked", "disabled", "required"], [1, "mdc-radio__background"], [1, "mdc-radio__outer-circle"], [1, "mdc-radio__inner-circle"], ["mat-ripple", "", 1, "mat-radio-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mdc-label", 3, "for"]],
  template: function MatRadioButton_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 2, 0)(2, "div", 3)(3, "div", 4);
      ɵɵlistener("click", function MatRadioButton_Template_div_click_3_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._onTouchTargetClick($event));
      });
      ɵɵelementEnd();
      ɵɵelementStart(4, "input", 5, 1);
      ɵɵlistener("change", function MatRadioButton_Template_input_change_4_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._onInputInteraction($event));
      });
      ɵɵelementEnd();
      ɵɵelementStart(6, "div", 6);
      ɵɵelement(7, "div", 7)(8, "div", 8);
      ɵɵelementEnd();
      ɵɵelementStart(9, "div", 9);
      ɵɵelement(10, "div", 10);
      ɵɵelementEnd()();
      ɵɵelementStart(11, "label", 11);
      ɵɵprojection(12);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("labelPosition", ctx.labelPosition);
      ɵɵadvance(2);
      ɵɵclassProp("mdc-radio--disabled", ctx.disabled);
      ɵɵadvance(2);
      ɵɵproperty("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled)("required", ctx.required);
      ɵɵattribute("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby);
      ɵɵadvance(5);
      ɵɵproperty("matRippleTrigger", ctx._rippleTrigger.nativeElement)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true);
      ɵɵadvance(2);
      ɵɵproperty("for", ctx.inputId);
    }
  },
  dependencies: [MatRipple, _MatInternalFormField],
  styles: ['.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled])~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size);top:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color);opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color);opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio--disabled{cursor:default;pointer-events:none}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color)}.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color)}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element{background-color:var(--mat-radio-checked-ripple-color)}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color);font-family:var(--mat-radio-label-text-font);line-height:var(--mat-radio-label-text-line-height);font-size:var(--mat-radio-label-text-size);letter-spacing:var(--mat-radio-label-text-tracking);font-weight:var(--mat-radio-label-text-weight)}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color)}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, black)}.mat-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}'],
  encapsulation: 2,
  changeDetection: 0
});
var MatRadioButton = _MatRadioButton;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioButton, [{
    type: Component,
    args: [{
      selector: "mat-radio-button",
      host: {
        "class": "mat-mdc-radio-button",
        "[attr.id]": "id",
        "[class.mat-primary]": 'color === "primary"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class.mat-mdc-radio-checked]": "checked",
        "[class._mat-animation-noopable]": "_noopAnimations",
        // Needs to be removed since it causes some a11y issues (see #21266).
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null",
        // Note: under normal conditions focus shouldn't land on this element, however it may be
        // programmatically set, for example inside of a focus trap, in this case we want to forward
        // the focus to the native element.
        "(focus)": "_inputElement.nativeElement.focus()"
      },
      exportAs: "matRadioButton",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatRipple, _MatInternalFormField],
      template: '<div mat-internal-form-field [labelPosition]="labelPosition" #formField>\n  <div class="mdc-radio" [class.mdc-radio--disabled]="disabled">\n    <!-- Render this element first so the input is on top. -->\n    <div class="mat-mdc-radio-touch-target" (click)="_onTouchTargetClick($event)"></div>\n    <input #input class="mdc-radio__native-control" type="radio"\n           [id]="inputId"\n           [checked]="checked"\n           [disabled]="disabled"\n           [attr.name]="name"\n           [attr.value]="value"\n           [required]="required"\n           [attr.aria-label]="ariaLabel"\n           [attr.aria-labelledby]="ariaLabelledby"\n           [attr.aria-describedby]="ariaDescribedby"\n           (change)="_onInputInteraction($event)">\n    <div class="mdc-radio__background">\n      <div class="mdc-radio__outer-circle"></div>\n      <div class="mdc-radio__inner-circle"></div>\n    </div>\n    <div mat-ripple class="mat-radio-ripple mat-mdc-focus-indicator"\n         [matRippleTrigger]="_rippleTrigger.nativeElement"\n         [matRippleDisabled]="_isRippleDisabled()"\n         [matRippleCentered]="true">\n      <div class="mat-ripple-element mat-radio-persistent-ripple"></div>\n    </div>\n  </div>\n  <label class="mdc-label" [for]="inputId">\n    <ng-content></ng-content>\n  </label>\n</div>\n',
      styles: ['.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled])~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size);top:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color);opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color);opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio--disabled{cursor:default;pointer-events:none}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color)}.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color)}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element{background-color:var(--mat-radio-checked-ripple-color)}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color);font-family:var(--mat-radio-label-text-font);line-height:var(--mat-radio-label-text-line-height);font-size:var(--mat-radio-label-text-size);letter-spacing:var(--mat-radio-label-text-tracking);font-weight:var(--mat-radio-label-text-weight)}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color)}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, black)}.mat-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}']
    }]
  }], () => [{
    type: MatRadioGroup,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RADIO_GROUP]
    }]
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: FocusMonitor
  }, {
    type: UniqueSelectionDispatcher
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RADIO_DEFAULT_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }], {
    id: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _rippleTrigger: [{
      type: ViewChild,
      args: ["formField", {
        read: ElementRef,
        static: true
      }]
    }]
  });
})();
var _MatRadioModule = class _MatRadioModule {
};
_MatRadioModule.ɵfac = function MatRadioModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatRadioModule)();
};
_MatRadioModule.ɵmod = ɵɵdefineNgModule({
  type: _MatRadioModule,
  imports: [MatCommonModule, CommonModule, MatRippleModule, MatRadioGroup, MatRadioButton],
  exports: [MatCommonModule, MatRadioGroup, MatRadioButton]
});
_MatRadioModule.ɵinj = ɵɵdefineInjector({
  imports: [MatCommonModule, CommonModule, MatRippleModule, MatRadioButton, MatCommonModule]
});
var MatRadioModule = _MatRadioModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CommonModule, MatRippleModule, MatRadioGroup, MatRadioButton],
      exports: [MatCommonModule, MatRadioGroup, MatRadioButton]
    }]
  }], null, null);
})();
export {
  MAT_RADIO_DEFAULT_OPTIONS,
  MAT_RADIO_DEFAULT_OPTIONS_FACTORY,
  MAT_RADIO_GROUP,
  MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR,
  MatRadioButton,
  MatRadioChange,
  MatRadioGroup,
  MatRadioModule
};
//# sourceMappingURL=@angular_material_radio.js.map
