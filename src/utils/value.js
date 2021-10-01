import i18n from '~/lang';

export function valueToPrice(value) {
  return value
    ? `${i18n.t('MONEY.CURRENCY')}${value?.toLocaleString(
        i18n.t('REGION_MASK'),
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
      )}`
    : `${i18n.t('MONEY.CURRENCY')}0,00`;
}
