import { blockScroll, unblockScroll, animate } from '../common';

import './style.scss';

export function usePreloader() {
    const STORAGE_KEY = 'preloaded';
    const preloader = document.querySelector('.preloader');
    const indicator = preloader.querySelector('.preloader__indicator');
    let target = 0;
    let current = 0;
    let updateTimeout = null;

    const scriptBlock = preloader.closest('.preloaderscript');
    const isMainPage = scriptBlock?.dataset?.mainPage === 'true';

    if (isPreloaded()) {
        hidePreloader(true);
        window.setPreloader = () => {};
    } else {
        if (isMainPage) {
            preloader.classList.add('main-page');
        }
        indicator.classList.add('shown');
        blockScroll();

        window.addEventListener('load', () => setTarget(100));
        window.setPreloader = setTarget;
    }

    function removePreloader() {
        unblockScroll();
        preloader.remove();
        setIsPreloaded();
        return Promise.resolve();
    }

    function hidePreloader(isShortcut = false) {
        if (isShortcut) {
            return preloader.remove();
        }
        setTimeout(() => {
            animate(preloader, { addClass: 'hidden' })
                .then(() => {
                    if (!isMainPage) {
                        return removePreloader();
                    }
                    animate(preloader, { addClass: 'transparent' })
                        .then(removePreloader);
                });
        }, 500);
    }

    function setTarget(value) {
        if (value < target) {
            return;
        }

        target = value;

        if (current < target) {
            clearTimeout(updateTimeout);
            updateTimeout = setTimeout(() => setValue(current + 1), 50);
        }
    }

    function setValue(value = 0) {
        current = value;

        indicator.style.setProperty('--value', current);
        indicator.textContent = `${current}%`;

        if (current === 100) {
            return hidePreloader();
        }
        if (current === target) {
            updateTimeout = null
            return;
        }
        const diff = 50 * (1 - (target - current) / target);
        clearTimeout(updateTimeout);
        updateTimeout = setTimeout(() => setValue(current + 1), diff);
    }
    
    function isPreloaded() {
        return sessionStorage.getItem(STORAGE_KEY) === 'true';
    }
    
    function setIsPreloaded() {
        return sessionStorage.setItem(STORAGE_KEY, 'true');
    }
};
