/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import siteConfig from '@generated/docusaurus.config';
import mediumZoom from 'medium-zoom';

const {themeConfig} = siteConfig;

export default (function () {
    if (typeof window === 'undefined') {
        return null;
    }

    // Allow medium-zoom options: https://www.npmjs.com/package/medium-zoom#options
    const {
        imageZoom: {
            selector = '.markdown img',
            options,
            delay = 1000,
            template = '#zoom-markdown'
        } = {}
    } = themeConfig;

    setTimeout(() => {
        mediumZoom(selector, options);
    }, delay);

    return {
        onRouteUpdate({location}) {
            if (location && location.hash && location.hash.length) {
                return;
            }

            const zoom = mediumZoom()
            zoom.attach(document.querySelectorAll(selector))

            setTimeout(() => {
                mediumZoom(selector, options);
            }, delay);
        },
    };
})();
