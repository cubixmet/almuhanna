const WHATSAPP_NUMBER = "966531553364";

interface WhatsAppOptions {
  productName?: string;
  productCode?: string;
  customMessage?: string;
}

/**
 * Generate WhatsApp inquiry link
 */
export function getWhatsAppLink({
  productName,
  productCode,
  customMessage,
}: WhatsAppOptions = {}) {
  let message = "";

  if (customMessage) {
    message = customMessage;
  } else if (productName && productCode) {
    message = `Hello, I need more details about:

Product: ${productName}
Code: ${productCode}`;
  } else {
    message =
      "Hello, I would like to know more about your electrical & mechanical products.";
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

/**
 * Product Inquiry Message
 */
export function getProductInquiryMessage(
  productName: string,
  productCode: string
) {
  return `Hello, I need more details about:

Product: ${productName}
Code: ${productCode}`;
}

/**
 * Open WhatsApp in new tab
 */
export function openWhatsApp(options?: WhatsAppOptions) {
  if (typeof window !== "undefined") {
    window.open(getWhatsAppLink(options), "_blank");
  }
}

/**
 * Contact Sales Message
 */
export function getSalesInquiryLink() {
  const message = `Hello, I would like to contact your sales team regarding industrial electrical & mechanical products.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

/**
 * Bulk Order Inquiry
 */
export function getBulkOrderLink(productCategory?: string) {
  const message = productCategory
    ? `Hello, I would like to request a bulk order quotation for ${productCategory}.`
    : `Hello, I would like to request a bulk industrial product quotation.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

/**
 * Technical Support Inquiry
 */
export function getTechnicalSupportLink() {
  const message = `Hello, I need technical support regarding your industrial products.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}