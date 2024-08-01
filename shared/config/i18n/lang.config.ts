export enum Locales {
  UA = 'uk',
  EN = 'en',
}

export const langConfig = {
  defaultLocale: Locales.EN,
  locales: [
    {
      code: Locales.UA,
      iso: 'uk-UA',
      countryCode: 'UA',
      name: 'Ukrainian',
      dayjsLocale: Locales.UA,
    },
    {
      code: Locales.EN,
      iso: 'en',
      countryCode: 'EN',
      name: 'International',
      dayjsLocale: Locales.UA,
    },
  ],
}
