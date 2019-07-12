'use strict';

import '../scss/style.scss';

import menuNames from './data/menu';
import Menu from './components/Menu';
import Lightbox from './components/Lightbox';
import Scroll from './components/Scroll';

const menu = new Menu('.header__navMenu', menuNames, {
  liClass: 'header__navMenuItem',
  aClass: 'header__navMenuItem--href',
  ulSubClass: 'header__dropDown',
});

const lightbox = new Lightbox('lightbox__box', 'lightbox__modal', {
  hidden: 'hidden',
  large: 'lightbox__modal--largeImg',
  close: 'lightbox__modal--close',
  body: 'body',
});

const scrollCompo = new Scroll('header__top', 'html, body', 'short');

menu.render('submenuItem', 'submenuItem--href');
lightbox.render();
scrollCompo.render();
