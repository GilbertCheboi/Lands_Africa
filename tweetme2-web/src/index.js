import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ProfileBadgeComponent } from './profiles';
import { AboutPage, App, ItemDetails, SearchComponent, Register, Login, ProfileDetail, PrivacyPage } from './land';

import * as serviceWorker from './serviceWorker';
import { Contact } from './land/Contact';
import { ProfileDetails } from './land/PropertyDetails';

const e = React.createElement;
const tweetsEl = document.getElementById("tweetme-2");
if (tweetsEl) {
  ReactDOM.render(e(App, tweetsEl.dataset), tweetsEl);
}

const detail = document.getElementById("tweetme-2-detail1");
if (detail) {
  ReactDOM.render(e(ItemDetails, detail.dataset), detail);
}

const profiledetail = document.getElementById("profile-2-detail");
if (profiledetail) {
  ReactDOM.render(e(ProfileDetail, profiledetail.dataset), profiledetail);
}

const about = document.getElementById("tweetme-2-about");
if (about) {
  ReactDOM.render(e(AboutPage, about.dataset), about);
}

const privacy = document.getElementById("tweetme-2-privacy");
if (privacy) {
  ReactDOM.render(e(PrivacyPage, privacy.dataset), privacy);
}

const contact = document.getElementById("tweetme-2-contact");
if (contact) {
  ReactDOM.render(e(Contact, contact.dataset), contact);
}

const register = document.getElementById("tweetme-2-register");
if (register) {
  ReactDOM.render(e(Register, register.dataset), register);
}

const login = document.getElementById("tweetme-2-login");
if (login) {
  ReactDOM.render(e(Login, login.dataset), login);
}

const searchEl = document.getElementById("search");
if (searchEl) {
  ReactDOM.render(e(SearchComponent, searchEl.dataset), searchEl);
}
const tweetDetailElements = document.querySelectorAll(".tweetme-2-detail")

tweetDetailElements.forEach(container=> {
    ReactDOM.render(
        e(ItemDetails, container.dataset), 
        container);
})
const userProfileBadgeElements = document.querySelectorAll(".tweetme-2-profile-badge");

// userProfileBadgeElements.forEach(container => {
//   ReactDOM.render(
//     e(ProfileDetails, container.dataset),
//    container);
// });

serviceWorker.unregister();