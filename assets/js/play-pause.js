/* Cinza Slider: optional autoplay control. Existing sliders are not opted in. */
(function(window, document, $) {
    'use strict';

    var Flickity = window.Flickity;
    if (!Flickity) {
        return;
    }

    function PlayPause(slider) {
        var control = this;
        this.slider = slider;
        this.wantsPlay = slider.player.state !== 'stopped' ||
            (document.hidden && slider.isActive && !!slider.options.autoPlay);
        this.originalMethods = {};
        this.wrappedMethods = {};
        this.userPaused = false;

        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'cinza-slider-play-pause';
        button.hidden = true;
        button.innerHTML = '<svg class="cinza-pause-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 2h3v12H3zM10 2h3v12h-3z"/></svg>'
            + '<svg class="cinza-play-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M4 2l10 6-10 6z"/></svg>';
        this.button = button;

        // Observe only this opted-in player's API. No global Flickity player changes.
        ['play', 'stop', 'pause', 'unpause'].forEach(function(method) {
            var original = slider.player[method];
            control.originalMethods[method] = original;
            var wrapped = function() {
                if (method === 'play') {
                    control.wantsPlay = true;
                } else if (method === 'stop') {
                    control.wantsPlay = false;
                    // Flickity can queue playback while the page is hidden. An explicit
                    // stop must cancel that queued start as well as the normal timer.
                    document.removeEventListener('visibilitychange', this.onVisibilityPlay);
                }
                var result = original.apply(this, arguments);
                control.refresh();
                return result;
            };
            control.wrappedMethods[method] = wrapped;
            slider.player[method] = wrapped;
        });

        button.addEventListener('click', function(event) {
            event.stopPropagation();
            if (control.wantsPlay) {
                control.userPaused = true;
                slider.stopPlayer();
            } else {
                control.userPaused = false;
                slider.playPlayer();
            }
        });
        // Keep button interactions separate from slider dragging and arrow-key navigation.
        ['pointerdown', 'mousedown', 'touchstart', 'keydown'].forEach(function(type) {
            button.addEventListener(type, function(event) {
                event.stopPropagation();
            });
        });

        this.onRefresh = function() { control.refresh(); };
        this.onActivate = function() {
            if (control.userPaused) {
                slider.stopPlayer();
            }
            control.refresh();
        };
        ['deactivate', 'cellChange', 'resize'].forEach(function(type) {
            slider.on(type, control.onRefresh);
        });
        slider.on('activate', this.onActivate);
        // Flickity 2.3.0 clears event listeners before emitting "destroy".
        // Clean up via this instance's destroy method instead of that event.
        this.originalDestroy = slider.destroy;
        this.wrappedDestroy = function() {
            control.destroy();
            return control.originalDestroy.apply(this, arguments);
        };
        slider.destroy = this.wrappedDestroy;
        this.refresh();
    }

    PlayPause.prototype.refresh = function() {
        var slider = this.slider;
        var element = slider.element;
        var button = this.button;
        var visible = slider.isActive && slider.options.autoPlay && slider.slides && slider.slides.length > 1;
        button.hidden = !visible;
        if (visible && button.parentNode !== element) {
            element.appendChild(button);
        }

        // Hover/tab visibility pauses are temporary: keep offering Pause until
        // playback has been stopped, either by this button or an existing interaction.
        var label = this.wantsPlay
            ? element.getAttribute('data-cinza-pause-label') || 'Pause slideshow'
            : element.getAttribute('data-cinza-play-label') || 'Play slideshow';
        button.setAttribute('aria-label', label);
        button.setAttribute('title', label);
        button.setAttribute('data-cinza-state', this.wantsPlay ? 'playing' : 'stopped');
    };

    PlayPause.prototype.destroy = function() {
        var control = this;
        var slider = this.slider;
        document.removeEventListener('visibilitychange', slider.player.onVisibilityPlay);
        ['deactivate', 'cellChange', 'resize'].forEach(function(type) {
            slider.off(type, control.onRefresh);
        });
        slider.off('activate', this.onActivate);
        if (slider.destroy === this.wrappedDestroy) {
            slider.destroy = this.originalDestroy;
        }
        Object.keys(this.originalMethods).forEach(function(method) {
            if (slider.player[method] === control.wrappedMethods[method]) {
                slider.player[method] = control.originalMethods[method];
            }
        });
        if (this.button.parentNode) {
            this.button.parentNode.removeChild(this.button);
        }
        delete slider._cinzaPlayPause;
    };

    function initialize(slider) {
        if (slider && slider.player && !slider._cinzaPlayPause &&
            slider.element.getAttribute('data-cinza-play-pause') === 'true') {
            slider._cinzaPlayPause = new PlayPause(slider);
        }
    }

    // Register before Flickity's normal data-flickity initialization. This also
    // supports sliders initialized later by other scripts and watchCSS reactivation.
    Flickity.prototype._createCinzaPlayPause = function() { initialize(this); };
    Flickity.createMethods.push('_createCinzaPlayPause');

    // Also attach if a slider was already initialized before this optional asset.
    $(function() {
        $('.cinza-slider[data-cinza-play-pause="true"]').each(function() {
            initialize(Flickity.data(this));
        });
    });
})(window, document, jQuery);
