// Shared client-side validation used by every form on the site, so rules and messages stay consistent.

const PATTERNS = {
  name: /^[A-Za-z][A-Za-z .'-]*$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  mobile: /^[6-9]\d{9}$/,
  pincode: /^[1-9]\d{5}$/,
  gst: /^\d{2}[A-Z]{5}\d{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/,
  url: /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/\S*)?$/i,
};

const FORMAT_MESSAGES = {
  name: (label) => `${label} can contain only letters, spaces, dots and hyphens.`,
  email: () => "Please enter a valid email address (e.g. name@company.com).",
  phone: () => "Please enter a valid 10-digit mobile number.",
  pincode: () => "Please enter a valid 6-digit pincode.",
  gst: () => "Please enter a valid 15-character GST number (e.g. 24ABCDE1234F1Z5).",
  url: () => "Please enter a valid website URL (e.g. www.example.com).",
};

const isBlank = (value) => value === undefined || value === null || String(value).trim() === "";

// Strips spaces, hyphens and an Indian country/trunk prefix, so "+91 98765-43210" validates as a mobile number.
export const normalizePhone = (value = "") => {
  const compact = String(value).replace(/[\s-]/g, "");
  if (compact.startsWith("+91")) return compact.slice(3);
  if (/^(91|0)\d{10}$/.test(compact)) return compact.replace(/^(91|0)/, "");
  return compact;
};

const matchesFormat = (type, value) => {
  if (type === "phone") return PATTERNS.mobile.test(normalizePhone(value));
  if (type === "gst") return PATTERNS.gst.test(value.toUpperCase());
  return PATTERNS[type] ? PATTERNS[type].test(value) : true;
};

// Returns an error message for a single value, or "" when it is valid.
export const validateField = (value, rules = {}) => {
  const { label = "This field", required = false, type, minLength, maxLength, min, max, integer } = rules;
  if (isBlank(value)) return required ? `${label} is required.` : "";

  const text = String(value).trim();

  if (type === "number") {
    const number = Number(text);
    if (!Number.isFinite(number)) return `${label} must be a valid number.`;
    if (integer && !Number.isInteger(number)) return `${label} must be a whole number.`;
    if (min !== undefined && number < min) return `${label} must be at least ${min}.`;
    if (max !== undefined && number > max) return `${label} must not be more than ${max}.`;
    return "";
  }

  if (minLength && text.length < minLength) return `${label} must be at least ${minLength} characters.`;
  if (maxLength && text.length > maxLength) return `${label} must not exceed ${maxLength} characters.`;
  if (type && !matchesFormat(type, text)) return FORMAT_MESSAGES[type](label);
  return "";
};

// Validates values against a { fieldName: rules } schema; returns only the fields that failed.
export const validateForm = (values, schema) =>
  Object.entries(schema).reduce((errors, [name, rules]) => {
    const message = validateField(values[name], rules);
    if (message) errors[name] = message;
    return errors;
  }, {});

export const validateFile = (file, { label = "a file", required = false, extensions = [], maxSizeMB } = {}) => {
  if (!file) return required ? `Please upload ${label}.` : "";

  const extension = file.name.split(".").pop().toLowerCase();
  if (extensions.length && !extensions.includes(extension)) {
    return `Unsupported file type. Please upload ${extensions.map((ext) => ext.toUpperCase()).join(", ")} only.`;
  }
  if (maxSizeMB && file.size > maxSizeMB * 1024 * 1024) {
    const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
    return `File is too large (${sizeMB} MB). Maximum allowed size is ${maxSizeMB} MB.`;
  }
  return "";
};

// Moves focus to the first invalid field (in schema order) so users can see what needs fixing.
export const focusFirstError = (form, errors) => {
  const firstName = Object.keys(errors)[0];
  const field = firstName && form?.elements?.namedItem(firstName);
  const target = field && typeof field.focus !== "function" ? field[0] : field;
  if (!target) return;
  target.focus({ preventScroll: true });
  target.scrollIntoView({ behavior: "smooth", block: "center" });
};

// Maps a failed API response status (or a network failure when status is omitted) to a user-facing message.
export const getSubmitErrorMessage = (status) => {
  if (!status) return "Unable to reach our server. Please check your internet connection and try again.";
  if (status === 413) return "The uploaded file is too large for our server. Please upload a smaller file.";
  if (status >= 500) {
    return "Our server is temporarily unavailable. Please try again in a few minutes or email us at info@pharmmaex.com.";
  }
  return "We couldn't submit your form. Please check your details and try again.";
};
