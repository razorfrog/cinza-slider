=== Cinza Slider ===
Contributors: razorfrog
Tags: slider, slideshow, carousel, metafizzy, flickity
Requires at least: 5.2
Tested up to: 7.1
Requires PHP: 7.2
Stable tag: 2.0.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A minimal slider plugin built with Flickity.

== Description ==
Cinza Slider is a minimal slider plugin built with <a href="https://flickity.metafizzy.co/" target="_blank">Flickity</a> by Metafizzy. It makes lightweight and flexible sliders that can be easily customized with CSS.

Visit our website to view the <a href="https://razorfrog.com/cinza-slider/" target="_blank">plugin demo</a>.

For autoplay sliders, an optional Play/Pause button lets visitors stop and restart the slideshow. Enable it under Options > Navigation in the slider editor. It is disabled by default and appears only when autoplay is enabled and there are at least two slides.

== Installation ==
Upload the Cinza Slider plugin to your WordPress site, activate it, and start creating sliders.

== Screenshots ==
1. Global slider settings
2. Slide cell fields
3. Optional Play/Pause button in the bottom-right corner

== Changelog ==

Newest first. Dates are YYYY-MM-DD.

= 2.0.0 (2026-10-30) =
Razorfrog is now the developer of Cinza Slider. Settings, layout and behavior work as before.

Changed
* The plugin author and links now point to Razorfrog (razorfrog.com).
* The plugin demo is now at razorfrog.com/cinza-slider.

Removed
* The Cinza button in the editor's Developers box.

= 1.4.0 (2026-10-30) =
Security release. Slider settings, layout and behavior work as before.

Changed
* Tested with WordPress 7.1.

Security
* Slide IDs, slide links and image alt text are now escaped in the slider output.

= 1.3.4 (2026-10-07) =
Existing slider settings, autoplay looping and click/tap behavior are unchanged.

Added
* Optional, keyboard-accessible Play/Pause button in the bottom-right corner. It is off by default and needs autoplay and at least two slides.
* Sliders paused with the button stay paused when the browser tab becomes visible again.
* The button is not duplicated when a slider is removed and set up again.

Changed
* Tested with WordPress 7.1.3.

Security
* The included PHP files can't be opened directly.

= 1.3.3 (2026-07-24) =
Fixed
* Autoplay no longer stops for good after a tap on mobile when Pause autoplay on hover is off.

= 1.3.2 (2026-07-09) =
Changed
* Tested with WordPress 7.0.

Fixed
* Autoplay no longer stops for good after a click when Pause autoplay on hover is off.

= 1.3.1 (2025-12-09) =
Changed
* Tested with WordPress 6.9.

Security
* Security fixes.

= 1.3.0 (2024-10-22) =
Changed
* Tested with WordPress 6.6.2.

= 1.2.9 (2024-02-20) =
Fixed
* Minor CSS accessibility fix.

= 1.2.8 (2024-02-14) =
Changed
* Sliders no longer have their own single page on the front end.
* Tested with WordPress 6.4.3.

= 1.2.7 (2023-12-21) =
Changed
* Tested with WordPress 6.4.2.

Fixed
* Tab order with the rfAccessibility setting.

= 1.2.6 (2023-12-12) =
Added
* Alt text on slide images.

= 1.2.5 (2023-08-01) =
Fixed
* The lazyLoad setting.

= 1.2.4 (2023-07-26) =
Added
* lazyLoad setting.

= 1.2.3 (2023-06-16) =
Changed
* Minor interface improvements.

= 1.2.2 (2023-05-19) =
Fixed
* Conflict between the image size and the `<picture>` tag.

= 1.2.1 (2023-04-18) =
Added
* mfAccessibility and rfAccessibility settings for front-end accessibility.
* Better support for the `<picture>` tag.

Changed
* Updated how setGallerySize and adaptiveHeight work together.
* Checkboxes in the editor are now toggles.
* Updated the editor style, with accessibility improvements.
* Tested with WordPress 6.2.

= 1.2.0 (2023-01-27) =
Changed
* Updated the website and demo links.
* Tested with WordPress 6.1.1.

= 1.1.4 (2022-12-09) =
Added
* Browser compatibility setting for gradient overlays.

Changed
* Sliders no longer have single pages.
* The editor works better on smaller screens.
* Tested with WordPress 6.1.

= 1.1.3 (2022-11-07) =
Changed
* Tested with WordPress 6.1.

= 1.1.2 (2022-10-20) =
Added
* Developers box in the editor.

Changed
* Updated the editor style.
* Updated the plugin's WordPress.org images.

Fixed
* PHP 8.0 compatibility fixes.

= 1.1.1 (2022-09-15) =
Added
* With Rank Math, sliders are set to noindex, nofollow.

Changed
* The Rank Math filters only run when Rank Math is active.
* Improved meta field validation.

= 1.1.0 (2022-08-17) =
Fixed
* PHP 8 warnings.

= 1.0.9 (2022-08-04) =
Fixed
* The static layer.

= 1.0.8 (2022-08-03) =
Added
* Hash navigation setting, using Flickity hash 1.0.4 (modified from 1.0.3).

Changed
* Updated Flickity from 2.2.2 to 2.3.0.

Fixed
* Slide IDs.

= 1.0.7 (2022-06-17) =
Added
* A unique ID for each slide.

Changed
* Updated the shortcode validation.
* Tested with PHP 8.

= 1.0.6 (2022-06-16) =
Fixed
* A front-end script error with the draggable setting.
* The editor style.

= 1.0.5 (2022-06-01) =
Changed
* Tested with WordPress 6.0.

= 1.0.4 (2022-05-25) =
Fixed
* Custom post type and shortcode fixes.

= 1.0.3 (2022-05-25) =
Changed
* Interface improvements.

= 1.0.2 (2021-12-22) =
Fixed
* Minor bug fixes.

= 1.0.1 (2021-12-22) =
Fixed
* Minor bug fixes.

= 1.0.0 (2021-12-15) =
First release.

== Upgrade Notice ==

= 2.0.0 =
Razorfrog is now the developer of Cinza Slider. No changes to settings or behavior.

= 1.4.0 =
Security release. No changes to slider settings or behavior.

= 1.3.4 =
Adds an optional Play/Pause button, disabled by default. Enable it per slider under Options > Navigation. Tested with WordPress 7.1.3.
