import {
  DOCUMENT
} from "./chunk-YJAHL4QH.js";
import {
  Directive,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵinject,
  ɵɵlistener
} from "./chunk-O52VBTXF.js";
import "./chunk-ORNLS2RR.js";
import "./chunk-7KUA62RY.js";
import "./chunk-D4JAG7AO.js";
import "./chunk-WCSART4P.js";
import "./chunk-35ENWJA4.js";

// node_modules/@angular/cdk/fesm2022/clipboard.mjs
var PendingCopy = class {
  constructor(text, _document) {
    this._document = _document;
    const textarea = this._textarea = this._document.createElement("textarea");
    const styles = textarea.style;
    styles.position = "fixed";
    styles.top = styles.opacity = "0";
    styles.left = "-999em";
    textarea.setAttribute("aria-hidden", "true");
    textarea.value = text;
    textarea.readOnly = true;
    (this._document.fullscreenElement || this._document.body).appendChild(textarea);
  }
  /** Finishes copying the text. */
  copy() {
    const textarea = this._textarea;
    let successful = false;
    try {
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand("copy");
        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch {
    }
    return successful;
  }
  /** Cleans up DOM changes used to perform the copy operation. */
  destroy() {
    const textarea = this._textarea;
    if (textarea) {
      textarea.remove();
      this._textarea = void 0;
    }
  }
};
var _Clipboard = class _Clipboard {
  constructor(document) {
    this._document = document;
  }
  /**
   * Copies the provided text into the user's clipboard.
   *
   * @param text The string to copy.
   * @returns Whether the operation was successful.
   */
  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  /**
   * Prepares a string to be copied later. This is useful for large strings
   * which take too long to successfully render and be copied in the same tick.
   *
   * The caller must call `destroy` on the returned `PendingCopy`.
   *
   * @param text The string to copy.
   * @returns the pending copy operation.
   */
  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }
};
_Clipboard.ɵfac = function Clipboard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Clipboard)(ɵɵinject(DOCUMENT));
};
_Clipboard.ɵprov = ɵɵdefineInjectable({
  token: _Clipboard,
  factory: _Clipboard.ɵfac,
  providedIn: "root"
});
var Clipboard = _Clipboard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Clipboard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var CDK_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken("CDK_COPY_TO_CLIPBOARD_CONFIG");
var _CdkCopyToClipboard = class _CdkCopyToClipboard {
  constructor(_clipboard, _ngZone, config) {
    this._clipboard = _clipboard;
    this._ngZone = _ngZone;
    this.text = "";
    this.attempts = 1;
    this.copied = new EventEmitter();
    this._pending = /* @__PURE__ */ new Set();
    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  /** Copies the current text to the clipboard. */
  copy(attempts = this.attempts) {
    if (attempts > 1) {
      let remainingAttempts = attempts;
      const pending = this._clipboard.beginCopy(this.text);
      this._pending.add(pending);
      const attempt = () => {
        const successful = pending.copy();
        if (!successful && --remainingAttempts && !this._destroyed) {
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;
          this._pending.delete(pending);
          pending.destroy();
          this.copied.emit(successful);
        }
      };
      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }
  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }
    this._pending.forEach((copy) => copy.destroy());
    this._pending.clear();
    this._destroyed = true;
  }
};
_CdkCopyToClipboard.ɵfac = function CdkCopyToClipboard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkCopyToClipboard)(ɵɵdirectiveInject(Clipboard), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(CDK_COPY_TO_CLIPBOARD_CONFIG, 8));
};
_CdkCopyToClipboard.ɵdir = ɵɵdefineDirective({
  type: _CdkCopyToClipboard,
  selectors: [["", "cdkCopyToClipboard", ""]],
  hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function CdkCopyToClipboard_click_HostBindingHandler() {
        return ctx.copy();
      });
    }
  },
  inputs: {
    text: [0, "cdkCopyToClipboard", "text"],
    attempts: [0, "cdkCopyToClipboardAttempts", "attempts"]
  },
  outputs: {
    copied: "cdkCopyToClipboardCopied"
  },
  standalone: true
});
var CdkCopyToClipboard = _CdkCopyToClipboard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCopyToClipboard, [{
    type: Directive,
    args: [{
      selector: "[cdkCopyToClipboard]",
      host: {
        "(click)": "copy()"
      },
      standalone: true
    }]
  }], () => [{
    type: Clipboard
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CDK_COPY_TO_CLIPBOARD_CONFIG]
    }]
  }], {
    text: [{
      type: Input,
      args: ["cdkCopyToClipboard"]
    }],
    attempts: [{
      type: Input,
      args: ["cdkCopyToClipboardAttempts"]
    }],
    copied: [{
      type: Output,
      args: ["cdkCopyToClipboardCopied"]
    }]
  });
})();
var _ClipboardModule = class _ClipboardModule {
};
_ClipboardModule.ɵfac = function ClipboardModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClipboardModule)();
};
_ClipboardModule.ɵmod = ɵɵdefineNgModule({
  type: _ClipboardModule,
  imports: [CdkCopyToClipboard],
  exports: [CdkCopyToClipboard]
});
_ClipboardModule.ɵinj = ɵɵdefineInjector({});
var ClipboardModule = _ClipboardModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardModule, [{
    type: NgModule,
    args: [{
      imports: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
})();
export {
  CDK_COPY_TO_CLIPBOARD_CONFIG,
  CdkCopyToClipboard,
  Clipboard,
  ClipboardModule,
  PendingCopy
};
//# sourceMappingURL=@angular_cdk_clipboard.js.map
