export const currencyFormat = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0,
});

export const longDurationFormat = new Intl.DurationFormat("ru-RU", {
  style: "long",
});

export const digitalMinutesDurationFormat = new Intl.DurationFormat("ru-RU", {
  style: "digital",
  secondsDisplay: "auto",
});

export const digitalSecondsDurationFormat = new Intl.DurationFormat("ru-RU", {
  style: "digital",
  hours: "narrow",
  hoursDisplay: "auto",
  minutes: "numeric",
});

export function formatPhone(phone: string): string {
  return phone.replace(
    /^(\+7|8)(\d{3})(\d{3})(\d{2})(\d{2})$/,
    "$1 ($2) $3-$4-$5",
  );
}
