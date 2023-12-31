import call from '@alwatr/icon/svg/call-outline.svg';
import {defaultExport} from '@alwatr/util';

/**
 * Main app necessary icons.
 */
export const icons = {
  call,
  star: defaultExport(import('@alwatr/icon/svg/star-outline.svg')),
  mic: defaultExport(import('@alwatr/icon/svg/mic-outline.svg')),
  create: defaultExport(import('@alwatr/icon/svg/create-outline.svg')),
  person: defaultExport(import('@alwatr/icon/svg/person-outline.svg')),
  archive: defaultExport(import('@alwatr/icon/svg/archive-outline.svg')),
  trash: defaultExport(import('@alwatr/icon/svg/trash-outline.svg')),
  send: defaultExport(import('@alwatr/icon/svg/send-outline.svg')),
  refresh: defaultExport(import('@alwatr/icon/svg/refresh-outline.svg')),
  menu: defaultExport(import('@alwatr/icon/svg/menu-outline.svg')),
  calendarNumber: defaultExport(import('@alwatr/icon/svg/calendar-number-outline.svg')),
  home: defaultExport(import('@alwatr/icon/svg/home-outline.svg')),
  triangle: defaultExport(import('@alwatr/icon/svg/triangle-outline.svg')),
};
