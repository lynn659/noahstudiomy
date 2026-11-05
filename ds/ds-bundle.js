/* @ds-bundle: {"format":4,"namespace":"NoahCreativeMarketingStudioDesignSystem_9bf6a7","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Avatar","sourcePath":"components/surfaces/Avatar.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"RippleMark","sourcePath":"components/surfaces/RippleMark.jsx"},{"name":"SectionHeading","sourcePath":"components/surfaces/SectionHeading.jsx"},{"name":"StatCard","sourcePath":"components/surfaces/StatCard.jsx"},{"name":"WaveDivider","sourcePath":"components/surfaces/WaveDivider.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"6a54ab12e656","components/core/Button.jsx":"086c996696bf","components/core/Icon.jsx":"3451e26d8477","components/core/IconButton.jsx":"15cbd9422d0f","components/core/Tag.jsx":"0daf2af6cb67","components/feedback/Dialog.jsx":"53a9f796a6c4","components/feedback/Toast.jsx":"3cc18508bf3b","components/feedback/Tooltip.jsx":"43cb35d233ee","components/forms/Checkbox.jsx":"f00d6689a665","components/forms/Input.jsx":"138cfe10e2a7","components/forms/Radio.jsx":"73a6894a964d","components/forms/Select.jsx":"043b48f40f47","components/forms/Switch.jsx":"34f1eff5af51","components/forms/Textarea.jsx":"18b0b26423a7","components/navigation/Footer.jsx":"b509041ead05","components/navigation/Navbar.jsx":"688b2724ca79","components/navigation/Tabs.jsx":"bfd0d4d012a8","components/surfaces/Avatar.jsx":"b4998fc0176f","components/surfaces/Card.jsx":"3efe4668a2df","components/surfaces/RippleMark.jsx":"d7b31a4b39c6","components/surfaces/SectionHeading.jsx":"554b23afd430","components/surfaces/StatCard.jsx":"49e39bd38517","components/surfaces/WaveDivider.jsx":"6051cfdbd9e2","ui_kits/website/CaseStudy.jsx":"12e12932b98e","ui_kits/website/Contact.jsx":"ee7e3fb6d885","ui_kits/website/Home.jsx":"66154b5a02c5","ui_kits/website/Parts.jsx":"285b81f690c4","ui_kits/website/Studio.jsx":"9f23a8cbba53","ui_kits/website/Work.jsx":"687b2ee5fee5","ui_kits/website/app.jsx":"366996f15d77"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NoahCreativeMarketingStudioDesignSystem_9bf6a7 = window.NoahCreativeMarketingStudioDesignSystem_9bf6a7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  brand: {
    bg: "var(--noah-blue-tint-12)",
    fg: "var(--blue-600)"
  },
  highlight: {
    bg: "var(--noah-yellow)",
    fg: "var(--text-on-highlight)"
  },
  neutral: {
    bg: "var(--grey-100)",
    fg: "var(--grey-700)"
  },
  success: {
    bg: "rgba(18,165,106,.12)",
    fg: "#0B6D46"
  },
  warning: {
    bg: "rgba(242,162,39,.16)",
    fg: "#8A5A05"
  },
  danger: {
    bg: "rgba(226,69,60,.12)",
    fg: "#9C2621"
  },
  solid: {
    bg: "var(--noah-blue)",
    fg: "var(--white)"
  }
};
function Badge({
  tone = "brand",
  dot = false,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.brand;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "5px 12px",
      borderRadius: "var(--r-pill)",
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-micro)",
      fontWeight: "var(--w-bold)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      lineHeight: 1.4,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "var(--r-circle)",
      background: "currentColor"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: "8px 18px",
    fontSize: "13px",
    minHeight: 36
  },
  md: {
    padding: "12px 26px",
    fontSize: "14px",
    minHeight: 46
  },
  lg: {
    padding: "16px 34px",
    fontSize: "16px",
    minHeight: 56
  }
};
const VARIANTS = {
  primary: {
    bg: "var(--noah-blue)",
    fg: "var(--text-on-brand)",
    border: "1px solid var(--noah-blue)",
    hoverBg: "var(--noah-blue-press)",
    shadow: "var(--shadow-brand)"
  },
  secondary: {
    bg: "var(--surface-card)",
    fg: "var(--noah-blue)",
    border: "1px solid var(--border-subtle)",
    hoverBg: "var(--blue-50)",
    shadow: "var(--shadow-xs)"
  },
  ghost: {
    bg: "transparent",
    fg: "var(--noah-blue)",
    border: "1px solid transparent",
    hoverBg: "var(--noah-blue-tint-06)",
    shadow: "none"
  },
  highlight: {
    bg: "var(--noah-yellow)",
    fg: "var(--text-on-highlight)",
    border: "1px solid var(--noah-yellow)",
    hoverBg: "var(--noah-yellow-deep)",
    shadow: "none"
  },
  inverse: {
    bg: "var(--white)",
    fg: "var(--blue-600)",
    border: "1px solid var(--white)",
    hoverBg: "var(--blue-50)",
    shadow: "none"
  }
};
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  ripple = true,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    className: ripple && variant === "primary" ? "noah-ripple" : undefined,
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--sp-2)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--w-semibold)",
      letterSpacing: "var(--ls-button)",
      lineHeight: 1,
      padding: s.padding,
      fontSize: s.fontSize,
      minHeight: s.minHeight,
      borderRadius: "var(--radius-control)",
      border: v.border,
      background: hover && !disabled ? v.hoverBg : v.bg,
      color: v.fg,
      boxShadow: hover && !disabled ? v.shadow : "none",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transform: press && !disabled ? "scale(0.97)" : "none",
      transition: "background var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-instant) var(--ease-out), color var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Thin wrapper over the Lucide CDN sprite (2px stroke, round caps) — see readme ICONOGRAPHY. */
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = "currentColor",
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const draw = () => {
      const lib = typeof window !== "undefined" && window.lucide;
      if (!lib || !ref.current) return false;
      const icons = lib.icons || {};
      const pascal = String(name).split("-").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join("");
      const node = icons[pascal] || icons[name];
      if (!node) return false;
      ref.current.innerHTML = "";
      ref.current.appendChild(lib.createElement(node));
      const svg = ref.current.firstChild;
      if (svg) {
        svg.setAttribute("width", size);
        svg.setAttribute("height", size);
        svg.setAttribute("stroke-width", strokeWidth);
        svg.setAttribute("stroke", color);
      }
      return true;
    };
    if (!draw()) {
      const t = setInterval(() => {
        if (draw()) clearInterval(t);
      }, 120);
      return () => clearInterval(t);
    }
  }, [name, size, strokeWidth, color]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      flex: "0 0 auto",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 34,
  md: 42,
  lg: 52
};
function IconButton({
  name,
  variant = "secondary",
  size = "md",
  label,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = SIZES[size] || SIZES.md;
  const isSolid = variant === "primary";
  const isInverse = variant === "inverse";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--r-circle)",
      border: isSolid || isInverse ? "1px solid transparent" : "1px solid var(--border-subtle)",
      background: isSolid ? hover ? "var(--noah-blue-press)" : "var(--noah-blue)" : isInverse ? hover ? "rgba(255,255,255,.24)" : "rgba(255,255,255,.14)" : hover ? "var(--blue-50)" : "var(--surface-card)",
      color: isSolid || isInverse ? "var(--white)" : "var(--noah-blue)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "var(--t-hover)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: Math.round(d * 0.44)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected = false,
  onClick,
  onRemove,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 16px",
      borderRadius: "var(--r-pill)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--w-medium)",
      lineHeight: 1.2,
      border: selected ? "1px solid var(--noah-blue)" : "1px solid var(--border-subtle)",
      background: selected ? "var(--noah-blue)" : hover && interactive ? "var(--blue-50)" : "var(--surface-card)",
      color: selected ? "var(--white)" : "var(--grey-700)",
      cursor: interactive ? "pointer" : "default",
      transition: "var(--t-hover)",
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      cursor: "pointer",
      opacity: 0.6,
      fontSize: 14
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  titleZh,
  onClose,
  footer,
  children,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(8,41,107,.42)",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)"
    }
  }), /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: "relative",
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      borderRadius: "var(--r-xl)",
      boxShadow: "var(--shadow-lg)",
      padding: "var(--pad-card-lg)",
      fontFamily: "var(--font-body)",
      animation: "noah-rise var(--dur-slow) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--fs-h3)",
      fontWeight: "var(--w-heading)",
      color: "var(--text-display)",
      margin: 0
    }
  }, title), titleZh && /*#__PURE__*/React.createElement("p", {
    className: "cn-title",
    style: {
      fontFamily: "var(--font-title-cn)",
      fontSize: "var(--fs-body)",
      color: "var(--grey-500)",
      margin: "6px 0 0"
    }
  }, titleZh)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "x",
    label: "Close",
    variant: "ghost",
    size: "sm",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--sp-5)",
      fontSize: "var(--fs-body-sm)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--sp-6)",
      display: "flex",
      gap: "var(--sp-3)",
      justifyContent: "flex-end"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    icon: "info",
    accent: "var(--noah-blue)"
  },
  success: {
    icon: "check",
    accent: "var(--success)"
  },
  warning: {
    icon: "triangle-alert",
    accent: "var(--warning)"
  },
  danger: {
    icon: "octagon-alert",
    accent: "var(--danger)"
  }
};
function Toast({
  tone = "info",
  title,
  message,
  onClose,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--sp-3)",
      padding: "14px 16px",
      background: "var(--surface-card)",
      borderRadius: "var(--r-md)",
      boxShadow: "var(--shadow-md)",
      borderLeft: "none",
      fontFamily: "var(--font-body)",
      minWidth: 300,
      maxWidth: 420,
      animation: "noah-rise var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      flex: "0 0 auto",
      borderRadius: "var(--r-circle)",
      background: "var(--noah-blue-tint-12)",
      color: t.accent,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 15
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--w-bold)",
      color: "var(--grey-900)"
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: "pointer",
      color: "var(--grey-400)",
      fontSize: 15,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = "top",
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === "bottom" ? {
    top: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  } : {
    bottom: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      ...pos,
      whiteSpace: "nowrap",
      pointerEvents: "none",
      padding: "7px 11px",
      borderRadius: "var(--r-sm)",
      background: "var(--blue-600)",
      color: "var(--white)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-micro)",
      fontWeight: "var(--w-medium)",
      opacity: show ? 1 : 0,
      transition: "opacity var(--dur-fast) var(--ease-out)"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--grey-700)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "var(--r-xs)",
      flex: "0 0 auto",
      border: "1px solid " + (checked ? "var(--noah-blue)" : "var(--border-strong)"),
      background: checked ? "var(--noah-blue)" : "var(--surface-card)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "var(--t-hover)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 6,
      borderLeft: "2px solid var(--white)",
      borderBottom: "2px solid var(--white)",
      transform: "rotate(-45deg) translateY(-1px)"
    }
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || "in-" + String(label || placeholder || "field").replace(/\s+/g, "-").toLowerCase();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--w-semibold)",
      color: "var(--grey-800)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: "inherit",
      fontSize: "var(--fs-body)",
      color: "var(--grey-900)",
      padding: "13px 16px",
      borderRadius: "var(--radius-input)",
      border: "1px solid " + (error ? "var(--danger)" : focus ? "var(--noah-blue)" : "var(--border-subtle)"),
      background: disabled ? "var(--grey-100)" : "var(--surface-card)",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      outline: "none",
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)"
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked = false,
  onChange,
  name,
  value,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--grey-700)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "var(--r-circle)",
      flex: "0 0 auto",
      border: "1px solid " + (checked ? "var(--noah-blue)" : "var(--border-strong)"),
      background: "var(--surface-card)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: checked ? "0 0 0 4px var(--noah-blue-tint-12)" : "none",
      transition: "var(--t-hover)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "var(--r-circle)",
      background: "var(--noah-blue)"
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  value,
  onChange,
  placeholder = "Select…",
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || "sel-" + String(label || "field").replace(/\s+/g, "-").toLowerCase();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--w-semibold)",
      color: "var(--grey-800)"
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: "inherit",
      fontSize: "var(--fs-body)",
      color: value ? "var(--grey-900)" : "var(--text-muted)",
      padding: "13px 16px",
      borderRadius: "var(--radius-input)",
      appearance: "none",
      border: "1px solid " + (focus ? "var(--noah-blue)" : "var(--border-subtle)"),
      background: "var(--surface-card) linear-gradient(transparent,transparent)",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      outline: "none",
      transition: "var(--t-hover)"
    }
  }, rest), /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const lab = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--grey-700)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 26,
      borderRadius: "var(--r-pill)",
      background: checked ? "var(--noah-blue)" : "var(--grey-300)",
      position: "relative",
      flex: "0 0 auto",
      transition: "background var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: "var(--r-circle)",
      background: "var(--white)",
      boxShadow: "var(--shadow-xs)",
      transition: "left var(--dur-base) var(--ease-swell)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  value,
  onChange,
  placeholder,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const taId = id || "ta-" + String(label || "field").replace(/\s+/g, "-").toLowerCase();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: taId,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--w-semibold)",
      color: "var(--grey-800)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: taId,
    rows: rows,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: "inherit",
      fontSize: "var(--fs-body)",
      color: "var(--grey-900)",
      resize: "vertical",
      padding: "13px 16px",
      borderRadius: "var(--radius-input)",
      border: "1px solid " + (error ? "var(--danger)" : focus ? "var(--noah-blue)" : "var(--border-subtle)"),
      background: disabled ? "var(--grey-100)" : "var(--surface-card)",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      outline: "none",
      transition: "var(--t-hover)"
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Navbar({
  logoSrc = "../../assets/logo-noah-blue.png",
  items = [],
  active,
  onNavigate,
  cta = "Start a project",
  onCta,
  tone = "light",
  style,
  ...rest
}) {
  const dark = tone === "dark";
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      position: "relative",
      zIndex: 20,
      height: "var(--nav-h)",
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-8)",
      padding: "0 var(--gutter-lg)",
      background: dark ? "rgba(8,41,107,.72)" : "var(--surface-glass)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      borderBottom: "1px solid " + (dark ? "rgba(255,255,255,.12)" : "var(--border-subtle)"),
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: dark ? logoSrc.replace("blue", "white") : logoSrc,
    alt: "Noah Creative Marketing Studio",
    style: {
      height: 30,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-6)",
      marginLeft: "auto"
    }
  }, items.map(it => {
    const key = typeof it === "string" ? it : it.id;
    const label = typeof it === "string" ? it : it.label;
    const on = active === key;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      type: "button",
      onClick: () => onNavigate && onNavigate(key),
      style: {
        border: "none",
        background: "none",
        cursor: "pointer",
        padding: "6px 0",
        fontFamily: "inherit",
        fontSize: "var(--fs-body-sm)",
        fontWeight: on ? "var(--w-bold)" : "var(--w-medium)",
        color: dark ? on ? "var(--white)" : "rgba(255,255,255,.7)" : on ? "var(--noah-blue)" : "var(--grey-700)",
        borderBottom: "2px solid " + (on ? dark ? "var(--noah-yellow)" : "var(--noah-blue)" : "transparent"),
        transition: "var(--t-hover)"
      }
    }, label);
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? "inverse" : "primary",
    size: "sm",
    onClick: onCta
  }, cta)));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  active,
  onChange,
  tone = "light",
  style,
  ...rest
}) {
  const dark = tone === "dark";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      gap: 4,
      padding: 4,
      borderRadius: "var(--r-pill)",
      background: dark ? "rgba(255,255,255,.1)" : "var(--surface-sunken)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), items.map(it => {
    const key = typeof it === "string" ? it : it.id;
    const label = typeof it === "string" ? it : it.label;
    const on = active === key;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      type: "button",
      onClick: () => onChange && onChange(key),
      style: {
        border: "none",
        cursor: "pointer",
        padding: "9px 20px",
        borderRadius: "var(--r-pill)",
        fontFamily: "inherit",
        fontSize: "var(--fs-body-sm)",
        fontWeight: "var(--w-semibold)",
        background: on ? dark ? "var(--white)" : "var(--surface-card)" : "transparent",
        color: on ? "var(--noah-blue)" : dark ? "rgba(255,255,255,.72)" : "var(--grey-600)",
        boxShadow: on ? "var(--shadow-xs)" : "none",
        transition: "var(--t-hover)"
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 44,
  lg: 64
};
function Avatar({
  name = "",
  src,
  size = "md",
  halo = false,
  style,
  ...rest
}) {
  const d = SIZES[size] || SIZES.md;
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(n => n[0]).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: halo ? "noah-halo" : undefined,
    style: {
      display: "inline-flex",
      width: d,
      height: d,
      borderRadius: "var(--r-circle)",
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--blue-100)",
      color: "var(--blue-700)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--w-bold)",
      fontSize: d * 0.36,
      flex: "0 0 auto",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PADS = {
  sm: "var(--sp-5)",
  md: "var(--pad-card)",
  lg: "var(--pad-card-lg)"
};
function Card({
  variant = "elevated",
  padding = "md",
  rings = false,
  hoverLift = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    elevated: {
      background: "var(--surface-card)",
      border: "1px solid transparent",
      shadow: "var(--shadow-sm)",
      color: "var(--text-body)"
    },
    outlined: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      shadow: "none",
      color: "var(--text-body)"
    },
    sunken: {
      background: "var(--surface-sunken)",
      border: "1px solid transparent",
      shadow: "none",
      color: "var(--text-body)"
    },
    brand: {
      background: "var(--noah-blue)",
      border: "1px solid var(--noah-blue)",
      shadow: "var(--shadow-brand)",
      color: "var(--white)"
    },
    inverse: {
      background: "var(--surface-inverse)",
      border: "1px solid var(--blue-600)",
      shadow: "var(--shadow-lg)",
      color: "var(--white)"
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    className: rings ? "noah-rings" : undefined,
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--radius-card)",
      padding: PADS[padding] || PADS.md,
      background: base.background,
      border: base.border,
      color: base.color,
      boxShadow: hoverLift && hover ? "var(--shadow-lg)" : base.shadow,
      transform: hoverLift && hover ? "translateY(-4px)" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/RippleMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Brand graphic: concentric ripple rings with an optional halo glow. Pure CSS, scales to any size. */
function RippleMark({
  size = 160,
  rings = 4,
  color = "var(--noah-blue)",
  halo = true,
  animate = true,
  style,
  ...rest
}) {
  const items = Array.from({
    length: rings
  });
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      ...style
    }
  }, rest), halo && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: "-12%",
      borderRadius: "var(--r-circle)",
      background: "radial-gradient(circle, var(--noah-blue-tint-12) 0 45%, transparent 72%)"
    }
  }), items.map((_, i) => {
    const scale = 1 - i * (0.72 / rings);
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        position: "absolute",
        width: size * scale,
        height: size * scale,
        borderRadius: "var(--r-circle)",
        border: "1.5px solid " + color,
        opacity: 0.18 + i * (0.5 / rings),
        animation: animate ? "noah-halo var(--dur-tide) var(--ease-in-out) " + i * 160 + "ms infinite" : "none"
      }
    });
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: Math.max(6, size * 0.08),
      height: Math.max(6, size * 0.08),
      borderRadius: "var(--r-circle)",
      background: "var(--noah-yellow)"
    }
  }));
}
Object.assign(__ds_scope, { RippleMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/RippleMark.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  titleZh,
  lead,
  align = "left",
  tone = "light",
  style,
  ...rest
}) {
  const dark = tone === "dark";
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)",
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      maxWidth: 720,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "noah-eyebrow",
    style: {
      color: dark ? "var(--noah-yellow)" : "var(--noah-blue)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--w-display)",
      fontSize: "var(--fs-h1)",
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--ls-display)",
      color: dark ? "var(--white)" : "var(--text-display)",
      margin: 0
    }
  }, title), titleZh && /*#__PURE__*/React.createElement("p", {
    className: "cn-title",
    style: {
      fontFamily: "var(--font-title-cn)",
      fontSize: "var(--fs-h3)",
      color: dark ? "rgba(255,255,255,.7)" : "var(--grey-500)",
      margin: 0
    }
  }, titleZh), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      lineHeight: "var(--lh-body)",
      color: dark ? "rgba(255,255,255,.72)" : "var(--text-body)",
      margin: 0
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatCard({
  value,
  label,
  suffix,
  tone = "light",
  style,
  ...rest
}) {
  const dark = tone === "brand" || tone === "inverse";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "noah-rings",
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--radius-card)",
      padding: "var(--pad-card)",
      background: tone === "brand" ? "var(--noah-blue)" : tone === "inverse" ? "var(--surface-inverse)" : "var(--surface-card)",
      boxShadow: dark ? "var(--shadow-brand)" : "var(--shadow-sm)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 4,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--w-display)",
      fontSize: "var(--fs-d3)",
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-display)",
      color: dark ? "var(--white)" : "var(--text-display)"
    }
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-h2)",
      color: dark ? "var(--noah-yellow)" : "var(--noah-blue)"
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--sp-2)",
      fontSize: "var(--fs-body-sm)",
      color: dark ? "rgba(255,255,255,.72)" : "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/WaveDivider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function WaveDivider({
  height = 12,
  drift = false,
  opacity = 1,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "noah-wave-rule" + (drift ? " noah-wave-rule--drift" : ""),
    style: {
      height,
      opacity,
      width: "100%",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { WaveDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/WaveDivider.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Footer({
  logoSrc = "../../assets/logo-noah-white.png",
  columns = [],
  address = "Kuala Lumpur, Malaysia",
  email = "hello@noahstudio.my",
  note = "© 2026 Noah Creative Marketing Studio",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--surface-inverse)",
      color: "rgba(255,255,255,.72)",
      fontFamily: "var(--font-body)",
      padding: "var(--sp-16) var(--gutter-lg) var(--sp-8)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.WaveDivider, {
    style: {
      marginBottom: "var(--sp-12)",
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(" + Math.max(columns.length, 1) + ", 1fr)",
      gap: "var(--sp-10)",
      maxWidth: "var(--container)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Noah Creative Marketing Studio",
    style: {
      height: 34,
      width: "auto",
      alignSelf: "flex-start"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      margin: 0
    }
  }, address), /*#__PURE__*/React.createElement("a", {
    href: "mailto:" + email,
    style: {
      color: "var(--noah-yellow)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--w-semibold)"
    }
  }, email)), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-micro)",
      fontWeight: "var(--w-bold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--white)"
    }
  }, col.title), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "rgba(255,255,255,.7)"
    }
  }, l))))), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "var(--container)",
      margin: "var(--sp-12) auto 0",
      fontSize: "var(--fs-caption)",
      color: "rgba(255,255,255,.5)"
    }
  }, note));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseStudy.jsx
try { (() => {
function CaseStudy({
  c,
  onBack
}) {
  const [tab, setTab] = React.useState("Idea");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    pad: "var(--sp-12)"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 15
    }),
    onClick: onBack
  }, "All work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: "var(--sp-12)",
      alignItems: "end",
      marginTop: "var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, c.tag, " \xB7 ", c.year), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--w-display)",
      fontSize: "var(--fs-d3)",
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-display)",
      color: "var(--text-display)",
      marginTop: "var(--sp-4)"
    }
  }, c.client), /*#__PURE__*/React.createElement("p", {
    className: "cn-title",
    style: {
      fontFamily: "var(--font-title-cn)",
      fontSize: "var(--fs-h3)",
      color: "var(--grey-500)",
      marginTop: "var(--sp-2)"
    }
  }, c.zh), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      color: "var(--text-body)",
      marginTop: "var(--sp-4)",
      maxWidth: 520
    }
  }, c.headline)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: c.stat,
    label: c.statLabel,
    tone: "brand"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-6)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--w-bold)",
      color: "var(--grey-800)"
    }
  }, "Scope"), "Strategy \xB7 Identity \xB7 Film \xB7 Media"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--w-bold)",
      color: "var(--grey-800)"
    }
  }, "Markets"), "MY \xB7 SG \xB7 ID")))), /*#__PURE__*/React.createElement(Media, {
    label: c.client + " · key visual",
    tone: "blue",
    ratio: "21 / 9",
    style: {
      marginTop: "var(--sp-10)"
    }
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    pad: "var(--section-y-tight)"
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ["Idea", "Craft", "Results"],
    active: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--sp-8)",
      marginTop: "var(--sp-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--fs-h2)",
      fontWeight: "var(--w-heading)",
      color: "var(--text-display)"
    }
  }, tab === "Idea" ? "Start where the water starts" : tab === "Craft" ? "One system, every surface" : "What the wave carried"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body)",
      color: "var(--text-body)"
    }
  }, tab === "Idea" ? "We reframed the launch around the first ripple — a single hero film released market by market, each one seeded by local creators before paid support began." : tab === "Craft" ? "A condensed bilingual type system, a ripple motion signature and a two-colour palette let 240 assets ship in six weeks without a single new template." : "Paid efficiency improved every week of the flight, and organic reach outgrew the media plan by the third market."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-3)",
      flexWrap: "wrap",
      marginTop: "var(--sp-2)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    dot: true
  }, tab), /*#__PURE__*/React.createElement(Badge, {
    tone: "highlight"
  }, c.stat, " ", c.statLabel))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement(Media, {
    label: "Still 01",
    ratio: "4 / 5"
  }), /*#__PURE__*/React.createElement(Media, {
    label: "Still 02",
    ratio: "4 / 5"
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    pad: "var(--section-y-tight)"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: "lg",
    rings: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-6)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Serena Foo",
    size: "lg",
    halo: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--w-bold)",
      fontSize: "var(--fs-h3)",
      color: "var(--text-display)",
      lineHeight: "var(--lh-heading)"
    }
  }, "\u201CThey planned for weather we hadn't thought about yet.\u201D"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)",
      marginTop: "var(--sp-3)"
    }
  }, "Serena Foo \xB7 Head of Brand, ", c.client))))));
}
Object.assign(window, {
  CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
function Contact({
  onSent
}) {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    budget: "",
    brief: ""
  });
  const [agree, setAgree] = React.useState(true);
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  return /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    pad: "var(--sp-16)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: "var(--sp-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Contact",
    title: "Tell us what you're launching",
    titleZh: "\u8054\u7CFB\u6211\u4EEC",
    lead: "Send a brief and a producer replies within one working day. Or just say hello \u2014 we like unclear beginnings."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--sp-8)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16
  }), /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@noahstudio.my"
  }, "hello@noahstudio.my")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16
  }), "Level 8, Jalan Kia Peng, 50450 Kuala Lumpur"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 16
  }), "Mon\u2013Fri, 9.30\u201318.30 MYT")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--sp-10)"
    }
  }, /*#__PURE__*/React.createElement(RippleMark, {
    size: 180,
    rings: 4
  }))), /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    value: form.name,
    onChange: set("name"),
    placeholder: "Full name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    value: form.email,
    onChange: set("email"),
    placeholder: "you@company.com"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Budget band",
    value: form.budget,
    onChange: set("budget"),
    options: ["RM10k–30k", "RM30k–80k", "RM80k–200k", "RM200k+"],
    hint: "Rough is fine \u2014 it shapes the team we propose."
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Project brief",
    rows: 4,
    value: form.brief,
    onChange: set("brief"),
    placeholder: "What are you launching, and by when?"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the studio letter, once a month.",
    checked: agree,
    onChange: e => setAgree(e.target.checked)
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }),
    onClick: onSent
  }, "Send the brief")))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function Home({
  onNavigate,
  onOpenCase
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    pad: "var(--sp-20)",
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -160,
      right: -120,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(RippleMark, {
    size: 520,
    rings: 6
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 840,
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "noah-eyebrow"
  }, "Creative marketing studio \xB7 Kuala Lumpur"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--w-display)",
      fontSize: "var(--fs-d1)",
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-display)",
      color: "var(--text-display)"
    }
  }, "Small ideas stay put.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "noah-mark"
  }, "Great ones travel.")), /*#__PURE__*/React.createElement("p", {
    className: "cn-title",
    style: {
      fontFamily: "var(--font-title-cn)",
      fontSize: "var(--fs-h2)",
      color: "var(--grey-500)",
      margin: 0
    }
  }, "\u8BA9\u54C1\u724C\u8D70\u5F97\u66F4\u8FDC"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)",
      maxWidth: 560,
      margin: 0
    }
  }, "We build brands, campaigns and always-on content for companies across Southeast Asia \u2014 strategy, film and media under one roof."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }),
    onClick: () => onNavigate("contact")
  }, "Start a project"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 16
    }),
    onClick: () => onNavigate("work")
  }, "Watch the reel"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginTop: "var(--sp-16)",
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement(Media, {
    label: "Showreel 2026 \xB7 01:48",
    tone: "blue",
    ratio: "21 / 9"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: "play",
    label: "Play showreel",
    variant: "inverse",
    size: "lg"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "46",
    label: "Brands guided since 2018",
    tone: "light"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "312",
    suffix: "%",
    label: "Average paid ROAS lift",
    tone: "brand"
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: "var(--sp-8)",
      marginBottom: "var(--sp-10)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Selected work",
    title: "Campaigns that travel",
    titleZh: "\u7CBE\u9009\u6848\u4F8B"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    }),
    onClick: () => onNavigate("work")
  }, "All work")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--sp-6)"
    }
  }, CASES.slice(0, 2).map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.id,
    variant: "elevated",
    padding: "sm",
    hoverLift: true,
    onClick: () => onOpenCase(c),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Media, {
    label: c.client + " · " + c.tag,
    ratio: "16 / 10",
    style: {
      marginBottom: "var(--sp-5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--fs-h3)",
      fontWeight: "var(--w-heading)",
      color: "var(--text-display)"
    }
  }, c.client), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, c.headline)), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, c.stat)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What we do",
    title: "One studio, five disciplines",
    titleZh: "\u670D\u52A1\u8303\u56F4",
    lead: "We stay small on purpose \u2014 the people in the pitch are the people on the work.",
    style: {
      marginBottom: "var(--sp-10)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--sp-5)"
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.name,
    variant: "outlined",
    hoverLift: true
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--r-circle)",
      background: "var(--blue-50)",
      color: "var(--noah-blue)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      marginTop: "var(--sp-4)",
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--w-bold)",
      color: "var(--text-display)"
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    className: "cn-body",
    style: {
      fontFamily: "var(--font-body-cn)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--grey-400)",
      marginTop: 2
    }
  }, s.zh), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-body)",
      marginTop: "var(--sp-3)"
    }
  }, s.body))))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    pad: "var(--section-y-tight)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: "var(--sp-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    eyebrow: "The studio",
    title: "Named after a builder, not a sailor",
    titleZh: "\u4EE5\u5EFA\u9020\u8005\u4E3A\u540D",
    lead: "Noah is the point on the compass: we plan for the weather, build for the long trip, and take the whole cargo with us."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-3)",
      marginTop: "var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    onClick: () => onNavigate("studio")
  }, "Meet the team"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      color: "var(--noah-yellow)"
    },
    onClick: () => onNavigate("contact")
  }, "Work with us"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(RippleMark, {
    size: 260,
    rings: 5,
    color: "rgba(255,255,255,.6)",
    halo: false
  })))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Parts.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Badge,
  Tag,
  Card,
  StatCard,
  RippleMark,
  WaveDivider,
  Avatar,
  SectionHeading,
  Navbar,
  Tabs,
  Footer,
  Input,
  Textarea,
  Select,
  Checkbox,
  Switch,
  Dialog,
  Toast,
  Tooltip
} = window.NoahCreativeMarketingStudioDesignSystem_9bf6a7;
const NAV = [{
  id: "home",
  label: "Home"
}, {
  id: "work",
  label: "Work"
}, {
  id: "services",
  label: "Services"
}, {
  id: "studio",
  label: "Studio"
}, {
  id: "contact",
  label: "Contact"
}];
const CASES = [{
  id: "tide",
  client: "Tide & Terra",
  zh: "潮汐与土地",
  tag: "Brand",
  year: "2026",
  headline: "A coastal skincare brand relaunched across three markets",
  stat: "312%",
  statLabel: "paid ROAS lift"
}, {
  id: "kopi",
  client: "Kopi Kaya",
  zh: "咖亚咖啡",
  tag: "Social",
  year: "2025",
  headline: "Always-on social that turned a KL café into a national habit",
  stat: "1.9M",
  statLabel: "organic reach / month"
}, {
  id: "arus",
  client: "Arus Bank",
  zh: "洄流银行",
  tag: "Film",
  year: "2025",
  headline: "A savings campaign told as one continuous take",
  stat: "4.6x",
  statLabel: "brand recall vs. category"
}, {
  id: "lumi",
  client: "Lumi Living",
  zh: "光居生活",
  tag: "Brand",
  year: "2024",
  headline: "Retail identity system for 42 stores in Malaysia and Singapore",
  stat: "+38%",
  statLabel: "footfall in quarter one"
}];
const SERVICES = [{
  icon: "compass",
  name: "Brand strategy",
  zh: "品牌策略",
  body: "Positioning, naming, narrative and the identity system that carries it."
}, {
  icon: "waves",
  name: "Campaign & content",
  zh: "整合传播",
  body: "Big idea to asset library — press, OOH, retail and platform-native cuts."
}, {
  icon: "message-circle",
  name: "Social & always-on",
  zh: "社媒运营",
  body: "Bilingual editorial calendars, community and creator partnerships."
}, {
  icon: "clapperboard",
  name: "Film & photography",
  zh: "影像制作",
  body: "In-house direction and production across Malaysia and the region."
}, {
  icon: "trending-up",
  name: "Performance media",
  zh: "效果媒体",
  body: "Paid search, social and marketplace buying with weekly readouts."
}, {
  icon: "circle-dot",
  name: "Measurement",
  zh: "效果衡量",
  body: "Brand tracking and incrementality tests that inform the next wave."
}];
function Media({
  label,
  ratio = "16 / 9",
  tone = "grey",
  rings = true,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: rings ? "noah-rings" : undefined,
    style: {
      aspectRatio: ratio,
      borderRadius: "var(--radius-media)",
      overflow: "hidden",
      position: "relative",
      background: tone === "blue" ? "var(--blue-600)" : tone === "brand" ? "var(--noah-blue)" : "var(--grey-100)",
      display: "flex",
      alignItems: "flex-end",
      padding: "var(--sp-5)",
      ...style
    }
  }, children, label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontSize: "var(--fs-micro)",
      fontWeight: "var(--w-bold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: tone === "grey" ? "var(--grey-400)" : "rgba(255,255,255,.6)"
    }
  }, label));
}
function Section({
  children,
  tone = "light",
  pad = "var(--section-y)",
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: tone === "sunken" ? "var(--surface-page)" : tone === "dark" ? "var(--surface-inverse)" : "var(--white)",
      padding: pad + " var(--gutter-lg)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto"
    }
  }, children));
}
function CaseRow({
  c,
  onOpen
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: () => onOpen(c),
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.4fr auto",
      gap: "var(--sp-8)",
      alignItems: "center",
      padding: "var(--sp-6) 0",
      borderBottom: "1px solid var(--border-subtle)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--w-heading)",
      fontSize: "var(--fs-h3)",
      color: hover ? "var(--noah-blue)" : "var(--text-display)",
      transition: "color var(--dur-fast) var(--ease-out)"
    }
  }, c.client), /*#__PURE__*/React.createElement("span", {
    className: "cn-title",
    style: {
      fontFamily: "var(--font-title-cn)",
      fontSize: "var(--fs-body)",
      color: "var(--grey-400)"
    }
  }, c.zh)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body)",
      color: "var(--text-body)",
      margin: 0
    }
  }, c.headline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, c.tag, " \xB7 ", c.year), /*#__PURE__*/React.createElement(IconButton, {
    name: "arrow-up-right",
    label: "Open " + c.client,
    variant: hover ? "primary" : "secondary"
  })));
}
Object.assign(window, {
  NAV,
  CASES,
  SERVICES,
  Media,
  Section,
  CaseRow,
  Button,
  IconButton,
  Icon,
  Badge,
  Tag,
  Card,
  StatCard,
  RippleMark,
  WaveDivider,
  Avatar,
  SectionHeading,
  Navbar,
  Tabs,
  Footer,
  Input,
  Textarea,
  Select,
  Checkbox,
  Switch,
  Dialog,
  Toast,
  Tooltip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Parts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Studio.jsx
try { (() => {
function Studio() {
  const people = [["Wei Lin", "Founder · Strategy"], ["Aisyah Rahman", "Creative Director"], ["Danish Tan", "Head of Film"], ["Chloe Ng", "Social Lead"], ["Ravi Kumar", "Performance Media"], ["Mei Xin", "Producer"]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    pad: "var(--sp-16)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Studio",
    title: "Twelve people, one room",
    titleZh: "\u5173\u4E8E\u6211\u4EEC",
    lead: "Founded in Kuala Lumpur in 2018. We work bilingually in English and Mandarin, and we keep the team small enough to fit in one edit suite."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--sp-5)",
      marginTop: "var(--sp-10)"
    }
  }, people.map(([n, r]) => /*#__PURE__*/React.createElement(Card, {
    key: n,
    variant: "outlined",
    hoverLift: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-4)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: n,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--w-bold)",
      color: "var(--text-display)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)"
    }
  }, r))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    pad: "var(--section-y-tight)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--sp-8)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "brand",
    padding: "lg",
    rings: true
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--fs-h2)",
      fontWeight: "var(--w-display)",
      color: "var(--white)",
      letterSpacing: "var(--ls-display)"
    }
  }, "How we work"), /*#__PURE__*/React.createElement("ul", {
    style: {
      marginTop: "var(--sp-4)",
      paddingLeft: 18,
      color: "rgba(255,255,255,.82)",
      fontSize: "var(--fs-body-sm)",
      lineHeight: "var(--lh-relaxed)"
    }
  }, /*#__PURE__*/React.createElement("li", null, "One team from pitch to delivery."), /*#__PURE__*/React.createElement("li", null, "Strategy and production in the same building."), /*#__PURE__*/React.createElement("li", null, "Weekly readouts, no monthly surprises."))), /*#__PURE__*/React.createElement(Media, {
    label: "Studio, Jalan Kia Peng",
    ratio: "4 / 3"
  }))));
}
Object.assign(window, {
  Studio
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Studio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Work.jsx
try { (() => {
function Work({
  onOpenCase
}) {
  const [filter, setFilter] = React.useState("All");
  const filters = ["All", "Brand", "Social", "Film"];
  const list = filter === "All" ? CASES : CASES.filter(c => c.tag === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    pad: "var(--sp-16)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Work",
    title: "Four years of long trips",
    titleZh: "\u6848\u4F8B\u6863\u6848",
    lead: "Selected engagements across beauty, F&B, banking and retail."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-2)",
      marginTop: "var(--sp-8)",
      flexWrap: "wrap"
    }
  }, filters.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: filter === t,
    onClick: () => setFilter(t)
  }, t))), /*#__PURE__*/React.createElement(WaveDivider, {
    drift: true,
    style: {
      marginTop: "var(--sp-8)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--sp-4)"
    }
  }, list.map(c => /*#__PURE__*/React.createElement(CaseRow, {
    key: c.id,
    c: c,
    onOpen: onOpenCase
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    pad: "var(--section-y-tight)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "46",
    label: "Brands guided"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "312",
    suffix: "%",
    label: "Avg. ROAS lift",
    tone: "brand"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "1.9",
    suffix: "M",
    label: "Monthly organic reach"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "12",
    label: "People in the studio"
  }))));
}
Object.assign(window, {
  Work
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
function App() {
  const [view, setView] = React.useState("home");
  const [openCase, setOpenCase] = React.useState(null);
  const [toast, setToast] = React.useState(false);
  const [dialog, setDialog] = React.useState(false);
  const go = v => {
    setOpenCase(null);
    setView(v);
  };
  const open = c => {
    setOpenCase(c);
    setView("case");
  };
  React.useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(false), 3200);
      return () => clearTimeout(t);
    }
  }, [toast]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    logoSrc: "../../assets/logo-noah-blue.png",
    items: NAV,
    active: openCase ? "work" : view,
    onNavigate: go,
    onCta: () => go("contact")
  })), view === "home" && /*#__PURE__*/React.createElement(Home, {
    onNavigate: go,
    onOpenCase: open
  }), view === "work" && /*#__PURE__*/React.createElement(Work, {
    onOpenCase: open
  }), view === "case" && openCase && /*#__PURE__*/React.createElement(CaseStudy, {
    c: openCase,
    onBack: () => go("work")
  }), view === "services" && /*#__PURE__*/React.createElement(Home, {
    onNavigate: go,
    onOpenCase: open
  }), view === "studio" && /*#__PURE__*/React.createElement(Studio, null), view === "contact" && /*#__PURE__*/React.createElement(Contact, {
    onSent: () => {
      setDialog(true);
      setToast(true);
    }
  }), /*#__PURE__*/React.createElement(Footer, {
    logoSrc: "../../assets/logo-noah-white.png",
    columns: [{
      title: "Studio",
      links: ["About", "Careers", "Studio letter"]
    }, {
      title: "Work",
      links: ["Case studies", "Showreel", "Awards"]
    }, {
      title: "Services",
      links: ["Brand", "Campaign", "Social", "Film", "Media"]
    }]
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 24,
      bottom: 24,
      zIndex: 120
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Brief sent",
    message: "A producer replies within one working day.",
    onClose: () => setToast(false)
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: dialog,
    title: "Brief received",
    titleZh: "\u5DF2\u6536\u5230\u4F60\u7684\u9700\u6C42",
    onClose: () => setDialog(false),
    footer: /*#__PURE__*/React.createElement(Button, {
      onClick: () => setDialog(false)
    }, "Done")
  }, "Thank you \u2014 we have your brief. A producer will read it this afternoon and reply with two or three questions before we propose a team."));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.RippleMark = __ds_scope.RippleMark;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.WaveDivider = __ds_scope.WaveDivider;

})();
