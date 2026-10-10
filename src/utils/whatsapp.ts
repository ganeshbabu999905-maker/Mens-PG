import { HOSTEL_CONFIG } from '../config/hostelConfig';

/**
 * Generates an official WhatsApp click-to-chat URL with a pre-filled enquiry message.
 */
export function createWhatsAppUrl(options?: {
  roomType?: string;
  name?: string;
  moveInDate?: string;
  customMessage?: string;
}): string {
  const phone = HOSTEL_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, '');
  
  let text = `Hello Ganesh Mens Hostel!`;
  
  if (options?.roomType) {
    text += ` I am interested in inquiring about the *${options.roomType}* room.`;
  } else {
    text += ` I would like to inquire about room availability and accommodation details.`;
  }

  if (options?.name) {
    text += ` My name is *${options.name}*.`;
  }

  if (options?.moveInDate) {
    text += ` My expected move-in date is *${options.moveInDate}*.`;
  }

  if (options?.customMessage) {
    text += ` Note: ${options.customMessage}`;
  }

  text += ` Could you please share the current pricing, vacancy, and visit details? Thank you!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

/**
 * Formatted telephone link
 */
export function createTelUrl(): string {
  return `tel:${HOSTEL_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`;
}
