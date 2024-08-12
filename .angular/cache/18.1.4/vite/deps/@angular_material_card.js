import {
  MatCommonModule
} from "./chunk-TGD3FD3I.js";
import "./chunk-6XVBT7Y7.js";
import "./chunk-4H2MIMVP.js";
import {
  CommonModule
} from "./chunk-YJAHL4QH.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵStandaloneFeature,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-O52VBTXF.js";
import "./chunk-ORNLS2RR.js";
import "./chunk-7KUA62RY.js";
import "./chunk-D4JAG7AO.js";
import "./chunk-WCSART4P.js";
import "./chunk-35ENWJA4.js";

// node_modules/@angular/material/fesm2022/card.mjs
var _c0 = ["*"];
var _c1 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["", "mat-card-image", ""], ["", "matCardImage", ""], ["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""], ["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""], ["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""], ["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]], "*"];
var _c2 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]", "*"];
var _c3 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
var _c4 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
var MAT_CARD_CONFIG = new InjectionToken("MAT_CARD_CONFIG");
var _MatCard = class _MatCard {
  constructor(config) {
    this.appearance = config?.appearance || "raised";
  }
};
_MatCard.ɵfac = function MatCard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCard)(ɵɵdirectiveInject(MAT_CARD_CONFIG, 8));
};
_MatCard.ɵcmp = ɵɵdefineComponent({
  type: _MatCard,
  selectors: [["mat-card"]],
  hostAttrs: [1, "mat-mdc-card", "mdc-card"],
  hostVars: 4,
  hostBindings: function MatCard_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("mat-mdc-card-outlined", ctx.appearance === "outlined")("mdc-card--outlined", ctx.appearance === "outlined");
    }
  },
  inputs: {
    appearance: "appearance"
  },
  exportAs: ["matCard"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MatCard_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mdc-elevated-card-container-color);border-color:var(--mdc-elevated-card-container-color);border-radius:var(--mdc-elevated-card-container-shape);box-shadow:var(--mdc-elevated-card-container-elevation)}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mdc-elevated-card-container-shape)}.mat-mdc-card-outlined{background-color:var(--mdc-outlined-card-container-color);border-radius:var(--mdc-outlined-card-container-shape);border-width:var(--mdc-outlined-card-outline-width);border-color:var(--mdc-outlined-card-outline-color);box-shadow:var(--mdc-outlined-card-container-elevation)}.mat-mdc-card-outlined::after{border:none}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font);line-height:var(--mat-card-title-text-line-height);font-size:var(--mat-card-title-text-size);letter-spacing:var(--mat-card-title-text-tracking);font-weight:var(--mat-card-title-text-weight)}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color);font-family:var(--mat-card-subtitle-text-font);line-height:var(--mat-card-subtitle-text-line-height);font-size:var(--mat-card-subtitle-text-size);letter-spacing:var(--mat-card-subtitle-text-tracking);font-weight:var(--mat-card-subtitle-text-weight)}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}'],
  encapsulation: 2,
  changeDetection: 0
});
var MatCard = _MatCard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCard, [{
    type: Component,
    args: [{
      selector: "mat-card",
      host: {
        "class": "mat-mdc-card mdc-card",
        "[class.mat-mdc-card-outlined]": 'appearance === "outlined"',
        "[class.mdc-card--outlined]": 'appearance === "outlined"'
      },
      exportAs: "matCard",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      template: "<ng-content></ng-content>\n",
      styles: ['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mdc-elevated-card-container-color);border-color:var(--mdc-elevated-card-container-color);border-radius:var(--mdc-elevated-card-container-shape);box-shadow:var(--mdc-elevated-card-container-elevation)}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mdc-elevated-card-container-shape)}.mat-mdc-card-outlined{background-color:var(--mdc-outlined-card-container-color);border-radius:var(--mdc-outlined-card-container-shape);border-width:var(--mdc-outlined-card-outline-width);border-color:var(--mdc-outlined-card-outline-color);box-shadow:var(--mdc-outlined-card-container-elevation)}.mat-mdc-card-outlined::after{border:none}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font);line-height:var(--mat-card-title-text-line-height);font-size:var(--mat-card-title-text-size);letter-spacing:var(--mat-card-title-text-tracking);font-weight:var(--mat-card-title-text-weight)}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color);font-family:var(--mat-card-subtitle-text-font);line-height:var(--mat-card-subtitle-text-line-height);font-size:var(--mat-card-subtitle-text-size);letter-spacing:var(--mat-card-subtitle-text-tracking);font-weight:var(--mat-card-subtitle-text-weight)}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}']
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_CARD_CONFIG]
    }, {
      type: Optional
    }]
  }], {
    appearance: [{
      type: Input
    }]
  });
})();
var _MatCardTitle = class _MatCardTitle {
};
_MatCardTitle.ɵfac = function MatCardTitle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardTitle)();
};
_MatCardTitle.ɵdir = ɵɵdefineDirective({
  type: _MatCardTitle,
  selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]],
  hostAttrs: [1, "mat-mdc-card-title"],
  standalone: true
});
var MatCardTitle = _MatCardTitle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardTitle, [{
    type: Directive,
    args: [{
      selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
      host: {
        "class": "mat-mdc-card-title"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatCardTitleGroup = class _MatCardTitleGroup {
};
_MatCardTitleGroup.ɵfac = function MatCardTitleGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardTitleGroup)();
};
_MatCardTitleGroup.ɵcmp = ɵɵdefineComponent({
  type: _MatCardTitleGroup,
  selectors: [["mat-card-title-group"]],
  hostAttrs: [1, "mat-mdc-card-title-group"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c2,
  decls: 4,
  vars: 0,
  template: function MatCardTitleGroup_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵelementStart(0, "div");
      ɵɵprojection(1);
      ɵɵelementEnd();
      ɵɵprojection(2, 1);
      ɵɵprojection(3, 2);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var MatCardTitleGroup = _MatCardTitleGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardTitleGroup, [{
    type: Component,
    args: [{
      selector: "mat-card-title-group",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-mdc-card-title-group"
      },
      standalone: true,
      template: '<div>\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content select="[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]"></ng-content>\n<ng-content></ng-content>\n'
    }]
  }], null, null);
})();
var _MatCardContent = class _MatCardContent {
};
_MatCardContent.ɵfac = function MatCardContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardContent)();
};
_MatCardContent.ɵdir = ɵɵdefineDirective({
  type: _MatCardContent,
  selectors: [["mat-card-content"]],
  hostAttrs: [1, "mat-mdc-card-content"],
  standalone: true
});
var MatCardContent = _MatCardContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardContent, [{
    type: Directive,
    args: [{
      selector: "mat-card-content",
      host: {
        "class": "mat-mdc-card-content"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatCardSubtitle = class _MatCardSubtitle {
};
_MatCardSubtitle.ɵfac = function MatCardSubtitle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardSubtitle)();
};
_MatCardSubtitle.ɵdir = ɵɵdefineDirective({
  type: _MatCardSubtitle,
  selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]],
  hostAttrs: [1, "mat-mdc-card-subtitle"],
  standalone: true
});
var MatCardSubtitle = _MatCardSubtitle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardSubtitle, [{
    type: Directive,
    args: [{
      selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
      host: {
        "class": "mat-mdc-card-subtitle"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatCardActions = class _MatCardActions {
  constructor() {
    this.align = "start";
  }
};
_MatCardActions.ɵfac = function MatCardActions_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardActions)();
};
_MatCardActions.ɵdir = ɵɵdefineDirective({
  type: _MatCardActions,
  selectors: [["mat-card-actions"]],
  hostAttrs: [1, "mat-mdc-card-actions", "mdc-card__actions"],
  hostVars: 2,
  hostBindings: function MatCardActions_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("mat-mdc-card-actions-align-end", ctx.align === "end");
    }
  },
  inputs: {
    align: "align"
  },
  exportAs: ["matCardActions"],
  standalone: true
});
var MatCardActions = _MatCardActions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardActions, [{
    type: Directive,
    args: [{
      selector: "mat-card-actions",
      exportAs: "matCardActions",
      host: {
        "class": "mat-mdc-card-actions mdc-card__actions",
        "[class.mat-mdc-card-actions-align-end]": 'align === "end"'
      },
      standalone: true
    }]
  }], null, {
    align: [{
      type: Input
    }]
  });
})();
var _MatCardHeader = class _MatCardHeader {
};
_MatCardHeader.ɵfac = function MatCardHeader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardHeader)();
};
_MatCardHeader.ɵcmp = ɵɵdefineComponent({
  type: _MatCardHeader,
  selectors: [["mat-card-header"]],
  hostAttrs: [1, "mat-mdc-card-header"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c4,
  decls: 4,
  vars: 0,
  consts: [[1, "mat-mdc-card-header-text"]],
  template: function MatCardHeader_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c3);
      ɵɵprojection(0);
      ɵɵelementStart(1, "div", 0);
      ɵɵprojection(2, 1);
      ɵɵelementEnd();
      ɵɵprojection(3, 2);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var MatCardHeader = _MatCardHeader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardHeader, [{
    type: Component,
    args: [{
      selector: "mat-card-header",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-mdc-card-header"
      },
      standalone: true,
      template: '<ng-content select="[mat-card-avatar], [matCardAvatar]"></ng-content>\n<div class="mat-mdc-card-header-text">\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content></ng-content>\n'
    }]
  }], null, null);
})();
var _MatCardFooter = class _MatCardFooter {
};
_MatCardFooter.ɵfac = function MatCardFooter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardFooter)();
};
_MatCardFooter.ɵdir = ɵɵdefineDirective({
  type: _MatCardFooter,
  selectors: [["mat-card-footer"]],
  hostAttrs: [1, "mat-mdc-card-footer"],
  standalone: true
});
var MatCardFooter = _MatCardFooter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardFooter, [{
    type: Directive,
    args: [{
      selector: "mat-card-footer",
      host: {
        "class": "mat-mdc-card-footer"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatCardImage = class _MatCardImage {
};
_MatCardImage.ɵfac = function MatCardImage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardImage)();
};
_MatCardImage.ɵdir = ɵɵdefineDirective({
  type: _MatCardImage,
  selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]],
  hostAttrs: [1, "mat-mdc-card-image", "mdc-card__media"],
  standalone: true
});
var MatCardImage = _MatCardImage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-image], [matCardImage]",
      host: {
        "class": "mat-mdc-card-image mdc-card__media"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatCardSmImage = class _MatCardSmImage {
};
_MatCardSmImage.ɵfac = function MatCardSmImage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardSmImage)();
};
_MatCardSmImage.ɵdir = ɵɵdefineDirective({
  type: _MatCardSmImage,
  selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]],
  hostAttrs: [1, "mat-mdc-card-sm-image", "mdc-card__media"],
  standalone: true
});
var MatCardSmImage = _MatCardSmImage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardSmImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-sm-image], [matCardImageSmall]",
      host: {
        "class": "mat-mdc-card-sm-image mdc-card__media"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatCardMdImage = class _MatCardMdImage {
};
_MatCardMdImage.ɵfac = function MatCardMdImage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardMdImage)();
};
_MatCardMdImage.ɵdir = ɵɵdefineDirective({
  type: _MatCardMdImage,
  selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]],
  hostAttrs: [1, "mat-mdc-card-md-image", "mdc-card__media"],
  standalone: true
});
var MatCardMdImage = _MatCardMdImage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardMdImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-md-image], [matCardImageMedium]",
      host: {
        "class": "mat-mdc-card-md-image mdc-card__media"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatCardLgImage = class _MatCardLgImage {
};
_MatCardLgImage.ɵfac = function MatCardLgImage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardLgImage)();
};
_MatCardLgImage.ɵdir = ɵɵdefineDirective({
  type: _MatCardLgImage,
  selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]],
  hostAttrs: [1, "mat-mdc-card-lg-image", "mdc-card__media"],
  standalone: true
});
var MatCardLgImage = _MatCardLgImage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardLgImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-lg-image], [matCardImageLarge]",
      host: {
        "class": "mat-mdc-card-lg-image mdc-card__media"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatCardXlImage = class _MatCardXlImage {
};
_MatCardXlImage.ɵfac = function MatCardXlImage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardXlImage)();
};
_MatCardXlImage.ɵdir = ɵɵdefineDirective({
  type: _MatCardXlImage,
  selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]],
  hostAttrs: [1, "mat-mdc-card-xl-image", "mdc-card__media"],
  standalone: true
});
var MatCardXlImage = _MatCardXlImage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardXlImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-xl-image], [matCardImageXLarge]",
      host: {
        "class": "mat-mdc-card-xl-image mdc-card__media"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatCardAvatar = class _MatCardAvatar {
};
_MatCardAvatar.ɵfac = function MatCardAvatar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardAvatar)();
};
_MatCardAvatar.ɵdir = ɵɵdefineDirective({
  type: _MatCardAvatar,
  selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]],
  hostAttrs: [1, "mat-mdc-card-avatar"],
  standalone: true
});
var MatCardAvatar = _MatCardAvatar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardAvatar, [{
    type: Directive,
    args: [{
      selector: "[mat-card-avatar], [matCardAvatar]",
      host: {
        "class": "mat-mdc-card-avatar"
      },
      standalone: true
    }]
  }], null, null);
})();
var CARD_DIRECTIVES = [MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage];
var _MatCardModule = class _MatCardModule {
};
_MatCardModule.ɵfac = function MatCardModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardModule)();
};
_MatCardModule.ɵmod = ɵɵdefineNgModule({
  type: _MatCardModule,
  imports: [MatCommonModule, CommonModule, MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage],
  exports: [MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage, MatCommonModule]
});
_MatCardModule.ɵinj = ɵɵdefineInjector({
  imports: [MatCommonModule, CommonModule, MatCommonModule]
});
var MatCardModule = _MatCardModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CommonModule, ...CARD_DIRECTIVES],
      exports: [CARD_DIRECTIVES, MatCommonModule]
    }]
  }], null, null);
})();
export {
  MAT_CARD_CONFIG,
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardImage,
  MatCardLgImage,
  MatCardMdImage,
  MatCardModule,
  MatCardSmImage,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup,
  MatCardXlImage
};
//# sourceMappingURL=@angular_material_card.js.map
