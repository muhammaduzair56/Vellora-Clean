# Vellora Clean brand kit implementation

## Brand identity
The brand name is **Vellora Clean** (not “Vellora Cleaning”). The provided brand sheet's original gradient V mark has been cropped as `client/public/images/vellora-mark.png`; it sits beside an editable VELLORA / CLEAN text wordmark so the outdated full-name image is not reused. The brand-sheet tagline is **Cleaner Spaces. Better Places.**

## Official palette

| Brand role | Value |
|---|---|
| Deep Navy | `#082653` |
| Fresh Mint | `#35CDB0` |
| Soft Lavender | `#B69AE8` |
| Butter Yellow | `#FFF0B3` |
| White | `#FFFFFF` |
| Slate Charcoal | `#263442` |

## Typography
Headings use **Montserrat** and body text uses **Poppins**, matching the supplied brand kit.

## Booking
All prominent “Book on WhatsApp” actions use the WhatsApp Business contact number `+447859293986`, with a prefilled enquiry message. The address lives in `client/src/lib/constants.ts` as `whatsappBookingUrl` so the booking actions stay consistent.

## Photography note
The original `/manus-storage/` photo links were returning 404. The replacement interior images in `client/public/images/` are generated illustrative visuals, not photographs of Vellora client work; the homepage labels them as examples.
