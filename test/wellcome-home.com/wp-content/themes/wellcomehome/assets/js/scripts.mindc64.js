function cookieLaw() {
    if (void 0 === Cookies.get("cookie-law")) {
        var e = $("#tmpl-cookie").html();
        $("body").append(e), $("body").on("click", ".cookie-law__close a", function(e) {
            e.preventDefault(), $(".cookie-law").fadeOut(300), Cookies.set("cookie-law", !0, {
                expires: 365
            });
        });
    }
}

function forms() {
    $("label .dt").on("click", function(e) {
        e.preventDefault(), $(this).closest("label").toggleClass("more");
    }), $(".input--text input, .input--text textarea").on("checkval keyup focus blur", function(e) {
        var t = $(this).closest(".input").find("label"), a = $(this).val();
        "checkval" === e.type || "keyup" === e.type ? "" !== a || isIE ? t.addClass("show") : t.removeClass("show") : "focus" === e.type && isIE ? t.addClass("show") : "blur" === e.type && "" === a && isIE && t.removeClass("show");
    }), $(".input--text select").on("change", function() {
        var e = $(this).prev("label");
        "" !== $(this).val() ? e.addClass("show") : e.removeClass("show");
    });
}

function popup() {
    $(document).on("click", ".open-size-popup", function(e) {
        e.preventDefault(), e.stopPropagation();
        var t = "<div class='price-popup'>" + $("#tml-size-popup").html() + "</div>", a = $(t);
        a.find(".close-popup").on("click", function(e) {
            e.preventDefault(), $("body").removeClass("is-popup"), a.removeClass("show"), $("html").unbind(), 
            setTimeout(function() {
                a.remove();
            }, 350);
        }), a.appendTo("body"), $("body").addClass("is-popup"), a.addClass("show");
        var i = a.find(".price-popup__tab.is-active"), n = Math.ceil(i.outerHeight());
        n = n % 2 == 0 ? n + 1 : n, i.css({
            "min-height": n
        }), $("html").click(function(e) {
            0 == $(e.target).closest(".price-popup").length && ($("body").removeClass("is-popup"), 
            a.removeClass("show"), setTimeout(function() {
                a.remove();
            }, 350), $(this).unbind(e));
        });
    }), $(document).on("click", ".open-price-popup", function(e) {
        e.preventDefault(), e.stopPropagation();
        var t = $(this).data("tab");
        void 0 === t && (t = "price");
        var a = "<div class='price-popup'>" + $(this).closest(".offer-wrapper").find(".offer-price-additional").html() + "</div>", s = $(a);
        s.find(".price-popup__tab-link[data-tab=" + t + "]").addClass("is-active");
        var i = s.find(".price-popup__tab[data-tab=" + t + "]");
        i.addClass("is-active"), s.find(".price-popup__tab-link").click(function(e) {
            e.preventDefault();
            var t = $(this), a = t.data("tab");
            s.find(".price-popup__tab-link.is-active").removeClass("is-active"), s.find(".price-popup__tab.is-active").removeClass("is-active"), 
            t.addClass("is-active");
            var i = s.find(".price-popup__tab[data-tab=" + a + "]");
            i.addClass("is-active");
            var n = Math.ceil(i.outerHeight());
            n = n % 2 == 0 ? n + 1 : n, i.css({
                "min-height": n
            });
        }), s.find(".close-popup").on("click", function(e) {
            e.preventDefault(), $("body").removeClass("is-popup"), s.removeClass("show"), $("html").unbind(), 
            setTimeout(function() {
                s.remove();
            }, 350);
        }), s.appendTo("body"), $("body").addClass("is-popup"), s.addClass("show");
        var n = Math.ceil(i.outerHeight());
        n = n % 2 == 0 ? n + 1 : n, i.css({
            "min-height": n
        }), $("html").click(function(e) {
            0 == $(e.target).closest(".price-popup").length && ($("body").removeClass("is-popup"), 
            s.removeClass("show"), setTimeout(function() {
                s.remove();
            }, 350), $(this).unbind(e));
        });
    });
}

!function(l) {
    "use strict";
    "pl-PL" === l("html").attr("lang") && l.extend(l.validator.messages, {
        required: "To pole jest wymagane.",
        remote: "Proszę o wypełnienie tego pola.",
        email: "Proszę o podanie prawidłowego adresu email.",
        url: "Proszę o podanie prawidłowego URL.",
        date: "Proszę o podanie prawidłowej daty.",
        dateISO: "Proszę o podanie prawidłowej daty (ISO).",
        number: "Proszę o podanie prawidłowej liczby.",
        digits: "Proszę o podanie samych cyfr.",
        creditcard: "Proszę o podanie prawidłowej karty kredytowej.",
        equalTo: "Proszę o podanie tej samej wartości ponownie.",
        extension: "Proszę o podanie wartości z prawidłowym rozszerzeniem.",
        nipPL: "Proszę o podanie prawidłowego numeru NIP.",
        phonePL: "Proszę o podanie prawidłowego numeru telefonu",
        maxlength: l.validator.format("Proszę o podanie nie więcej niż {0} znaków."),
        minlength: l.validator.format("Proszę o podanie przynajmniej {0} znaków."),
        rangelength: l.validator.format("Proszę o podanie wartości o długości od {0} do {1} znaków."),
        range: l.validator.format("Proszę o podanie wartości z przedziału od {0} do {1}."),
        max: l.validator.format("Proszę o podanie wartości mniejszej bądź równej {0}."),
        min: l.validator.format("Proszę o podanie wartości większej bądź równej {0}."),
        pattern: l.validator.format("Pole zawiera niedozwolone znaki.")
    }), "undefined" != typeof wpcf7 && null !== wpcf7 && (wpcf7 = l.extend({
        cached: 0,
        inputs: []
    }, wpcf7), l(function() {
        wpcf7.supportHtml5 = function() {
            var a = {}, i = document.createElement("input");
            a.placeholder = "placeholder" in i;
            return l.each([ "email", "url", "tel", "number", "range", "date" ], function(e, t) {
                i.setAttribute("type", t), a[t] = "text" !== i.type;
            }), a;
        }(), l("div.wpcf7 > form").each(function() {
            var e = l(this);
            wpcf7.initForm(e), wpcf7.cached && wpcf7.refill(e);
        });
    }), wpcf7.getId = function(e) {
        return parseInt(l('input[name="_wpcf7"]', e).val(), 10);
    }, wpcf7.initForm = function(e) {
        var a = l(e);
        a.find("input, textarea").each(function() {
            var e = l(this);
            e.attr("aria-required") && e.attr("data-rule-required", e.attr("aria-required")), 
            e.hasClass("wpcf7-validates-as-email") && e.attr("data-rule-email", "true");
        }), a.validate({
            errorElement: "p",
            errorClass: "error-message",
            ignore: [],
            errorPlacement: function(e, t) {
                var a = l(t);
                a.is(":radio") ? e.appendTo(a.closest(".group-control")) : e.appendTo(a.closest(".input"));
            },
            highlight: function(e) {
                var t = l(e);
                t.is(":radio") ? t.closest(".group-control").addClass("error") : t.closest(".input").addClass("error");
            },
            unhighlight: function(e) {
                var t = l(e);
                t.is(":radio") ? t.closest(".group-control").removeClass("error") : t.closest(".input").removeClass("error");
            },
            submitHandler: function(e) {
                return wpcf7.submit(a), !1;
            }
        }), wpcf7.toggleSubmit(a), a.on("click", ".wpcf7-acceptance", function() {
            wpcf7.toggleSubmit(a);
        }), l(".wpcf7-exclusive-checkbox", a).on("click", "input:checkbox", function() {
            var e = l(this).attr("name");
            a.find('input:checkbox[name="' + e + '"]').not(this).prop("checked", !1);
        }), l(".wpcf7-list-item.has-free-text", a).each(function() {
            var e = l(":input.wpcf7-free-text", this), t = l(this).closest(".wpcf7-form-control");
            l(":checkbox, :radio", this).is(":checked") ? e.prop("disabled", !1) : e.prop("disabled", !0), 
            t.on("change", ":checkbox, :radio", function() {
                l(".has-free-text", t).find(":checkbox, :radio").is(":checked") ? e.prop("disabled", !1).focus() : e.prop("disabled", !0);
            });
        }), wpcf7.supportHtml5.placeholder || l("[placeholder]", a).each(function() {
            l(this).val(l(this).attr("placeholder")), l(this).addClass("placeheld"), l(this).focus(function() {
                l(this).hasClass("placeheld") && l(this).val("").removeClass("placeheld");
            }), l(this).blur(function() {
                "" === l(this).val() && (l(this).val(l(this).attr("placeholder")), l(this).addClass("placeheld"));
            });
        }), wpcf7.jqueryUi && !wpcf7.supportHtml5.date && a.find('input.wpcf7-date[type="date"]').each(function() {
            l(this).datepicker({
                dateFormat: "yy-mm-dd",
                minDate: new Date(l(this).attr("min")),
                maxDate: new Date(l(this).attr("max"))
            });
        }), wpcf7.jqueryUi && !wpcf7.supportHtml5.number && a.find('input.wpcf7-number[type="number"]').each(function() {
            l(this).spinner({
                min: l(this).attr("min"),
                max: l(this).attr("max"),
                step: l(this).attr("step")
            });
        }), l(".wpcf7-character-count", a).each(function() {
            var i = l(this), e = i.attr("data-target-name"), n = i.hasClass("down"), s = parseInt(i.attr("data-starting-value"), 10), o = parseInt(i.attr("data-maximum-value"), 10), r = parseInt(i.attr("data-minimum-value"), 10), t = function(e) {
                var t = l(e).val().length, a = n ? s - t : t;
                i.attr("data-current-value", a), i.text(a), o && o < t ? i.addClass("too-long") : i.removeClass("too-long"), 
                r && t < r ? i.addClass("too-short") : i.removeClass("too-short");
            };
            l(':input[name="' + e + '"]', a).each(function() {
                t(this), l(this).keyup(function() {
                    t(this);
                });
            });
        }), a.on("change", ".wpcf7-validates-as-url", function() {
            var e = l.trim(l(this).val());
            e && !e.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== e.indexOf(".") && (e = "http://" + (e = e.replace(/^\/+/, ""))), 
            l(this).val(e);
        });
    }, wpcf7.submit = function(e) {
        if ("function" == typeof window.FormData) {
            var n = l(e);
            l(".ajax-loader", n).addClass("is-active"), l("[placeholder].placeheld", n).each(function(e, t) {
                l(t).val("");
            }), wpcf7.clearResponse(n);
            var t = new FormData(n.get(0)), o = {
                id: n.closest("div.wpcf7").attr("id"),
                status: "init",
                inputs: [],
                formData: t
            };
            l.each(n.serializeArray(), function(e, t) {
                if ("_wpcf7" == t.name) o.contactFormId = t.value; else if ("_wpcf7_version" == t.name) o.pluginVersion = t.value; else if ("_wpcf7_locale" == t.name) o.contactFormLocale = t.value; else if ("_wpcf7_unit_tag" == t.name) o.unitTag = t.value; else if ("_wpcf7_container_post" == t.name) o.containerPostId = t.value; else if (t.name.match(/^_wpcf7_\w+_free_text_/)) {
                    var a = t.name.replace(/^_wpcf7_\w+_free_text_/, "");
                    o.inputs.push({
                        name: a + "-free-text",
                        value: t.value
                    });
                } else t.name.match(/^_/) || o.inputs.push(t);
            }), wpcf7.triggerEvent(n.closest("div.wpcf7"), "beforesubmit", o), l(".form-el").addClass("submitted");
            l.ajax({
                type: "POST",
                url: wpcf7.apiSettings.getRoute("/contact-forms/" + wpcf7.getId(n) + "/feedback"),
                data: t,
                dataType: "json",
                processData: !1,
                contentType: !1
            }).done(function(e, t, a) {
                !function(t, e, a, i) {
                    o.id = l(t.into).attr("id"), o.status = t.status, o.apiResponse = t;
                    var n = l(".wpcf7-response-output", i);
                    switch (t.status) {
                      case "validation_failed":
                        l.each(t.invalidFields, function(e, t) {
                            l(t.into, i).each(function() {
                                wpcf7.notValidTip(this, t.message), l(".wpcf7-form-control", this).addClass("wpcf7-not-valid"), 
                                l("[aria-invalid]", this).attr("aria-invalid", "true");
                            });
                        }), n.addClass("wpcf7-validation-errors"), i.addClass("invalid"), wpcf7.triggerEvent(t.into, "invalid", o);
                        break;

                      case "acceptance_missing":
                        n.addClass("wpcf7-acceptance-missing"), i.addClass("unaccepted"), wpcf7.triggerEvent(t.into, "unaccepted", o);
                        break;

                      case "spam":
                        n.addClass("wpcf7-spam-blocked"), i.addClass("spam"), l('[name="g-recaptcha-response"]', i).each(function() {
                            if ("" === l(this).val()) {
                                var e = l(this).closest(".wpcf7-form-control-wrap");
                                wpcf7.notValidTip(e, wpcf7.recaptcha.messages.empty);
                            }
                        }), wpcf7.triggerEvent(t.into, "spam", o);
                        break;

                      case "aborted":
                        n.addClass("wpcf7-aborted"), i.addClass("aborted"), wpcf7.triggerEvent(t.into, "aborted", o);
                        break;

                      case "mail_sent":
                        n.addClass("wpcf7-mail-sent-ok"), i.addClass("sent"), i.find("label").removeClass("show"), 
                        wpcf7.triggerEvent(t.into, "mailsent", o);
                        break;

                      case "mail_failed":
                        n.addClass("wpcf7-mail-sent-ng"), i.addClass("failed"), wpcf7.triggerEvent(t.into, "mailfailed", o);
                        break;

                      default:
                        var s = "custom-" + t.status.replace(/[^0-9a-z]+/i, "-");
                        n.addClass("wpcf7-" + s), i.addClass(s);
                    }
                    wpcf7.refill(i, t), wpcf7.triggerEvent(t.into, "submit", o), "mail_sent" == t.status && (i.each(function() {
                        this.reset();
                    }), wpcf7.toggleSubmit(i)), i.find("[placeholder].placeheld").each(function(e, t) {
                        l(t).val(l(t).attr("placeholder"));
                    }), n.html("").append(t.message).slideDown("fast"), n.attr("role", "alert"), l(".screen-reader-response", i.closest(".wpcf7")).each(function() {
                        var e = l(this);
                        if (e.html("").attr("role", "").append(t.message), t.invalidFields) {
                            var i = l("<ul></ul>");
                            l.each(t.invalidFields, function(e, t) {
                                if (t.idref) var a = l("<li></li>").append(l("<a></a>").attr("href", "#" + t.idref).append(t.message)); else a = l("<li></li>").append(t.message);
                                i.append(a);
                            }), e.append(i);
                        }
                        e.attr("role", "alert").focus();
                    });
                }(e, 0, 0, n), l(".ajax-loader", n).removeClass("is-active");
            }).fail(function(e, t, a) {
                var i = l('<div class="ajax-error"></div>').text(a.message);
                n.after(i);
            });
        }
    }, wpcf7.triggerEvent = function(e, t, a) {
        var i = l(e), n = new CustomEvent("wpcf7" + t, {
            bubbles: !0,
            detail: a
        });
        i.get(0).dispatchEvent(n), i.trigger("wpcf7:" + t, a), i.trigger(t + ".wpcf7", a);
    }, wpcf7.toggleSubmit = function(e, t) {
        var a = l(e), i = l("input:submit", a);
        void 0 === t ? a.hasClass("wpcf7-acceptance-as-validation") || (i.prop("disabled", !1), 
        l(".wpcf7-acceptance", a).each(function() {
            var e = l(this), t = l("input:checkbox", e);
            if (!e.hasClass("optional") && (e.hasClass("invert") && t.is(":checked") || !e.hasClass("invert") && !t.is(":checked"))) return i.prop("disabled", !0), 
            !1;
        })) : i.prop("disabled", !t);
    }, wpcf7.notValidTip = function(e, t) {
        var a = l(e);
        if (l(".wpcf7-not-valid-tip", a).remove(), l('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(t).appendTo(a), 
        a.is(".use-floating-validation-tip *")) {
            var i = function(e) {
                l(e).not(":hidden").animate({
                    opacity: 0
                }, "fast", function() {
                    l(this).css({
                        "z-index": -100
                    });
                });
            };
            a.on("mouseover", ".wpcf7-not-valid-tip", function() {
                i(this);
            }), a.on("focus", ":input", function() {
                i(l(".wpcf7-not-valid-tip", a));
            });
        }
    }, wpcf7.refill = function(e, t) {
        var i = l(e), n = function(i, e) {
            l.each(e, function(e, t) {
                i.find(':input[name="' + e + '"]').val(""), i.find("img.wpcf7-captcha-" + e).attr("src", t);
                var a = /([0-9]+)\.(png|gif|jpeg)$/.exec(t);
                i.find('input:hidden[name="_wpcf7_captcha_challenge_' + e + '"]').attr("value", a[1]);
            });
        }, s = function(a, e) {
            l.each(e, function(e, t) {
                a.find(':input[name="' + e + '"]').val(""), a.find(':input[name="' + e + '"]').siblings("span.wpcf7-quiz-label").text(t[0]), 
                a.find('input:hidden[name="_wpcf7_quiz_answer_' + e + '"]').attr("value", t[1]);
            });
        };
        void 0 === t ? l.ajax({
            type: "GET",
            url: wpcf7.apiSettings.getRoute("/contact-forms/" + wpcf7.getId(i) + "/refill"),
            beforeSend: function(e) {
                var t = i.find(':input[name="_wpnonce"]').val();
                t && e.setRequestHeader("X-WP-Nonce", t);
            },
            dataType: "json"
        }).done(function(e, t, a) {
            e.captcha && n(i, e.captcha), e.quiz && s(i, e.quiz);
        }) : (t.captcha && n(i, t.captcha), t.quiz && s(i, t.quiz));
    }, wpcf7.clearResponse = function(e) {
        var t = l(e);
        t.removeClass("invalid spam sent failed"), t.siblings(".screen-reader-response").html("").attr("role", ""), 
        l(".wpcf7-not-valid-tip", t).remove(), l("[aria-invalid]", t).attr("aria-invalid", "false"), 
        l(".wpcf7-form-control", t).removeClass("wpcf7-not-valid"), l(".wpcf7-response-output", t).hide().empty().removeAttr("role").removeClass("wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked");
    }, wpcf7.apiSettings.getRoute = function(e) {
        var t = wpcf7.apiSettings.root;
        return t = t.replace(wpcf7.apiSettings.namespace, wpcf7.apiSettings.namespace + e);
    });
}(jQuery), function() {
    if ("function" == typeof window.CustomEvent) return;
    function e(e, t) {
        t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var a = document.createEvent("CustomEvent");
        return a.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), a;
    }
    e.prototype = window.Event.prototype, window.CustomEvent = e;
}();

var wW, wH, onScriptLoad, recaptchaId, $fixedMenu, fixedMenuShow = 200;

function init() {
    isMobile && $("body").removeClass("is-hover"), $fixedMenu = $(".main-header"), resize(), 
    addResizeEvent(resize), onScroll(), $(window).scroll(onScroll), $(".hamburger").click(function(e) {
        e.preventDefault(), e.stopPropagation(), $("body").toggleClass("is-menu"), $("body").hasClass("is-menu") ? $("html").click(function(e) {
            0 == $(e.target).closest(".main-header").length && ($("body").removeClass("is-menu"), 
            $(this).unbind(e));
        }) : $("html").unbind();
    }), $(".js-scroll-to").click(function(e) {
        e.preventDefault();
        var t = $($(this).attr("href")).position().top - 80;
        scrollToY(t);
    });
    var e = $(".opinion-slider"), t = $(".opinion-slider").children();
    e.length && 1 < t.length && e.slick({
        arrows: !0,
        infinite: !0,
        initialSlide: Math.floor(Math.random() * t.length),
        prevArrow: "<button type='button' class='slick-arrow slick-arrow--prev'><span class='icon-left-open-big'></span></button>",
        nextArrow: "<button type='button' class='slick-arrow slick-arrow--next'><span class='icon-right-open-big'></span></button>"
    });
    var a = $(".photos-slider__nav"), i = $(".photos-slider__nav").children();
    if (a.length && 1 < i.length) {
        var n = {
            slidesToScroll: 1,
            infinite: !1,
            focusOnSelect: !1
        };
        $(".open-gallery-mobile").is(":visible") ? n.slidesToShow = 1 : n.variableWidth = !0, 
        a.slick(n);
    }
    $(".open-gallery-mobile, .open-gallery-desktop").on("click", function(e) {
        e.preventDefault(), $(".photos-slider__nav").find("a.open-gallery:first").trigger("click");
    }), $(".open-gallery").length && $(".open-gallery").swipebox({
        useCSS: !0,
        useSVG: !1,
        beforeOpen: function() {},
        afterClose: function() {}
    }), $(".gallery a").swipebox({
        useCSS: !0,
        useSVG: !1,
        beforeOpen: function() {},
        afterClose: function() {}
    });
    var s = $(".content-style .wp-block-image a, .content-style .wp-block-gallery a").filter(function() {
        return /(\.jpg|\.jpeg|\.gif|\.png)/i.test($(this).attr("href"));
    });
    s && (s.addClass("is-gallery"), $(".is-gallery").swipebox({
        useCSS: !0,
        useSVG: !1,
        beforeOpen: function() {},
        afterClose: function() {}
    })), $(".single-offer__sidebar .estate-agent").stick_in_parent({
        offset_top: 130
    });
    var o = $(".description-list ");
    o.length && $(".description-list__header a").click(function(e) {
        e.preventDefault();
        var t = $(this).closest("li"), a = t.find(".description-list__content");
        t.hasClass("is-active") ? (a.css({
            "max-height": ""
        }), t.removeClass("is-active")) : (o.find("li.is-active").removeClass("is-active").find(".description-list__content").css({
            "max-height": ""
        }), t.addClass("is-active"), a.css({
            "max-height": a[0].scrollHeight
        }));
    });
    var m = $(".offer-list"), r = m.find(".offer-list__type");
    if (r.find(".select-list-type").on("click", function() {
        var e = $(this), t = e.data("type");
        m.removeClass("offer-list--list offer-list--tiles"), m.addClass("offer-list--" + t), 
        r.find(".is-active").removeClass("is-active"), e.addClass("is-active"), Cookies.set("list-view", t);
    }), $(".reload-page").on("change", function() {
        var e = $(this).val();
        return "" != e && (window.location = e), !1;
    }), $(".map-all").length) {
        $("#map");
        var l = $(".map-all");
        $(".show-map").on("click", function(e) {
            e.preventDefault();
            var t = $(this);
            l.hasClass("is-active") ? (l.css({
                "max-height": ""
            }), l.removeClass("is-active"), t.text(t.data("normal")), t.removeClass("is-active")) : (l.addClass("is-active"), 
            l.css({
                "max-height": l[0].scrollHeight
            }), t.text(t.data("active")), t.addClass("is-active"), scrollToY(0), setTimeout(function() {
                console.log("ee");
            }, 210));
        });
    }
    if ($(".toggle-contact-form").on("click", function(e) {
        e.preventDefault();
        $(this);
        var t = $(".contact-page"), a = t.find(".btn--primary.toggle-contact-form");
        t.toggleClass("show-form"), t.hasClass("show-form") ? a.text(a.data("active")) : a.text(a.data("normal"));
    }), $(".close-popup-status").on("click", function() {
        $(".form-el").removeClass("submitted");
    }), location.hash && "#form" === location.hash && $(".contact-page").length) {
        var c = $(".contact-page"), p = c.find(".btn--primary.toggle-contact-form");
        c.addClass("show-form"), c.hasClass("show-form") && p.text(p.data("active"));
    }
    if ($(".fade-elements").length && (isMobile ? $(".fade-elements").children().each(function() {
        $(this).waypoint(function(e) {
            var t = $(this.element);
            t.hasClass("fade-elements__visible") || t.addClass("fade-elements__visible"), this.destroy();
        }, {
            offset: "75%",
            triggerOnce: !0
        });
    }) : $(".fade-elements").each(function() {
        $(this).waypoint(function(e) {
            $(this.element).children().each(function(e) {
                var t = $(this);
                if (!t.hasClass("fade-elements__visible")) new Ticker(function() {
                    t.addClass("fade-elements__visible");
                }, 250 * e);
            }), this.destroy();
        }, {
            offset: "70%",
            triggerOnce: !0
        });
    })), $(".why-us").length && (isMobile ? $(".why-us__list").children().each(function() {
        $(this).waypoint(function(e) {
            var t = $(this.element);
            t.hasClass("why-us__item--visible") || t.addClass("why-us__item--visible"), this.destroy();
        }, {
            offset: "75%",
            triggerOnce: !0
        });
    }) : $(".why-us__list").each(function() {
        $(this).waypoint(function(e) {
            $(this.element).children().each(function(e) {
                var t = $(this);
                if (!t.hasClass("why-us__item--visible")) new Ticker(function() {
                    t.addClass("why-us__item--visible");
                }, 250 * e);
            }), this.destroy();
        }, {
            offset: "70%",
            triggerOnce: !0
        });
    })), $(".rent-info").length && $(".rent-info__item").each(function() {
        $(this).waypoint(function(e) {
            var t = $(this.element);
            t.hasClass("animated") || t.addClass("animated"), this.destroy();
        }, {
            offset: "70%",
            triggerOnce: !0
        });
    }), $(".team__row").length && (isMobile ? $(".team__row").children().each(function() {
        $(this).waypoint(function(e) {
            var t = $(this.element);
            t.hasClass("animated") || t.addClass("animated"), this.destroy();
        }, {
            offset: "75%",
            triggerOnce: !0
        });
    }) : $(".team__row").children().each(function(a) {
        $(this).waypoint(function(e) {
            var t = $(this.element);
            if (!t.hasClass("animated")) new Ticker(function() {
                t.addClass("animated");
            }, a % 3 * 250);
            this.destroy();
        }, {
            offset: "75%",
            triggerOnce: !0
        });
    })), $(".offer-list__tags").length) {
        var d = $(".offer-list__tags"), f = $("#list-filters"), u = f.serialize(), h = f.serializeObject(), v = $("#submit-filters"), w = $("#tmpl-empty-list").html();
        checkFormsValues = function() {
            $("body").hasClass("is-open-filters-mobile") && $("body").removeClass("is-open-filters-mobile"), 
            u !== f.serialize() && (u = f.serialize(), h = f.serializeObject(), window.history.replaceState(h, document.title, "?" + u), 
            m.addClass("is-loading"), $.ajax({
                type: "GET",
                url: f[0].action,
                data: u,
                dataType: "json",
                success: function(e) {
                    addMarkers(e.data), m.removeClass("is-loading"), $(".offer-list__inner").html(e.formated).append(w);
                },
                error: function(e, t, a) {}
            }));
        }, $(".tag-item__btn").on("click", function() {
            var e = $(this).closest(".tag-item");
            if (e.hasClass("active")) m.removeClass("is-open-filters"), e.removeClass("active"), 
            g(); else {
                d.find(".tag-item.active").removeClass("active"), d.find(".tag-item__popup[style]").removeAttr("style"), 
                g(), e.addClass("active"), m.hasClass("is-open-filters") || m.addClass("is-open-filters");
                var t = e.find(".tag-item__popup"), a = t.offset().left;
                a < 0 ? t.css({
                    transform: "translate(" + (15 - parseInt(a)) + "px, 0)"
                }) : wW < a + 300 && t.css({
                    transform: "translate(" + (wW - parseInt(a + 300) - 15) + "px, 0)"
                });
            }
        }), $(".close-tag-popup").on("click", function() {
            $(this).closest(".tag-item").removeClass("active"), m.removeClass("is-open-filters"), 
            g();
        }), $(".values-slider").each(function() {
            var e = $(this), t = e.closest(".tag-item"), a = e.data("name"), i = parseInt(e.data("default")), n = e.data("values"), s = (t.find(".tag-item__btn"), 
            t.find("#" + a)), o = parseInt(s.val());
            n = n.split(","), o !== i && t.addClass("changed"), e.ionRangeSlider({
                grid: !0,
                from: o,
                values: n,
                onChange: function(e) {
                    s.val(e.from);
                }
            }), t.find(".clear-filter").on("click", function() {
                e.data("ionRangeSlider").update({
                    from: i
                }), s.val(i);
            }), t.find(".submit-filter").on("click", function() {
                parseInt(s.val()) !== i ? t.addClass("changed") : t.removeClass("changed"), t.removeClass("active"), 
                m.removeClass("is-open-filters"), checkFormsValues();
            });
        }), $(".range-slider").each(function() {
            var a = $(this), t = a.closest(".tag-item"), e = a.data("name"), i = a.data("min"), n = a.data("max"), s = a.data("from"), o = a.data("to"), r = a.data("step"), l = a.data("label"), c = t.find("#" + e + "-min"), p = t.find("#" + e + "-max"), d = t.find(".tag-item__btn");
            if (s !== i || o !== n) {
                var f = c.val() == p.val() ? p.val() : c.val() + " - " + p.val();
                d.text(f + " " + l), t.addClass("changed");
            }
            a.ionRangeSlider({
                type: "double",
                min: i,
                max: n,
                from: s,
                to: o,
                step: r,
                onChange: function(e) {
                    h(e.from, e.to);
                }
            }), t.find(".clear-filter").on("click", function() {
                var e = a.data("min"), t = a.data("max");
                u(e, t), h(e, t);
            }), t.find(".submit-filter").on("click", function() {
                if (c.val() == a.data("min") && p.val() == a.data("max")) d.text(d.data("title")), 
                t.removeClass("changed"); else {
                    var e = c.val() == p.val() ? p.val() : c.val() + " - " + p.val();
                    d.text(e + " " + l), t.addClass("changed");
                }
                t.removeClass("active"), m.removeClass("is-open-filters"), checkFormsValues();
            }), c.on("change", function() {
                var e = $(this).val();
                e < i && (e = i), o < e && (e = o), h(s = e, o), u(s, o);
            }), p.on("change", function(e) {
                var t = $(this).val();
                n < t && (t = n), t < s && (t = s), h(s, o = t), u(s, o);
            });
            var u = function(e, t) {
                a.data("ionRangeSlider").update({
                    from: e,
                    to: t
                });
            }, h = function(e, t) {
                c.val(e), p.val(t);
            };
        });
        var g = function() {
            if (u !== f.serialize()) for (var e in h) {
                var t;
                if (-1 < e.indexOf("-")) e = e.split("-"), t = d.find("input[data-name=" + e[0] + "]"), 
                d.find("#" + e[0] + "-min").val(h[e[0] + "-min"]), d.find("#" + e[0] + "-max").val(h[e[0] + "-max"]), 
                t.data("ionRangeSlider").update({
                    from: h[e[0] + "-min"],
                    to: h[e[0] + "-max"]
                }); else if (-1 < e.indexOf("[]")) if (!1 === h[e]) d.find('input[name="' + e + '"]').prop("checked", !1); else if (Array.isArray(h[e])) for (var a in d.find('input[name="' + e + '"]').prop("checked", !1), 
                h[e]) d.find('input[name="' + e + '"][value="' + h[e][a] + '"]').prop("checked", !0); else d.find('input[name="' + e + '"]').prop("checked", !1), 
                d.find('input[name="' + e + '"][value="' + h[e] + '"]').prop("checked", !0); else (t = d.find("input[data-name=" + e + "]")).length && t.data("ionRangeSlider").update({
                    from: h[e]
                }), d.find("#" + e).val(h[e]);
            }
        };
        $(".tag-item__list").each(function() {
            var i = $(this), n = i.closest(".tag-item"), s = n.find(".tag-item__btn"), o = i.data("key");
            function e(e) {
                if (void 0 === e && (e = !1), u !== f.serialize() || e) {
                    var t = f.serializeObject()[o];
                    if (!1 === t) return i.addClass("error"), !1;
                    if (Array.isArray(t)) s.data("label") ? s.html(s.data("label") + "<b>" + t.length + " " + s.data("plural") + "</b>") : s.html(s.data("title")); else {
                        var a = d.find('input[type=checkbox][name="' + o + '"][value="' + t + '"]');
                        s.data("label") ? s.html(s.data("label") + "<b>" + a.data("label") + "</b>") : s.html(a.data("label"));
                    }
                    !function(e, t) {
                        var a = !1;
                        if (Array.isArray(e)) {
                            var i = e.slice();
                            t.find('input[type=checkbox][data-default="true"]').each(function() {
                                -1 === i.indexOf(this.value) || 0 === i.length ? a = !0 : i.splice(i.indexOf(this.value), 1);
                            }), 0 < i.length && (a = !0);
                        } else t.find('input[type=checkbox][data-default="true"]').each(function() {
                            this.value != e && (a = !0);
                        });
                        return a;
                    }(t, n) ? n.removeClass("changed") : n.addClass("changed");
                }
            }
            n.find("input[type=checkbox]").on("change", function() {
                if ($(this).attr("data-checked")) return $(this).prop("checked", !0), !1;
                i.hasClass("error") && i.removeClass("error");
            }), n.find(".submit-filter").on("click", function() {
                e(), n.removeClass("active"), m.removeClass("is-open-filters"), checkFormsValues();
            }), e(!0), n.find(".clear-filter").on("click", function() {
                n.find("input[type=checkbox]").each(function() {
                    $(this).attr("data-default") ? $(this).prop("checked", !0) : $(this).prop("checked", !1);
                });
            });
        }), v.on("click", function(e) {
            e.preventDefault(), checkFormsValues();
        }), $(".open-filters-mobile").click(function() {
            $("body").addClass("is-open-filters-mobile"), v.attr("disabled", !1);
        }), $(".close-filter-popup").click(function() {
            $("body").removeClass("is-open-filters-mobile");
        }), f.on("keyup keypress", function(e) {
            if (13 === (e.keyCode || e.which)) return e.preventDefault(), !1;
        });
    }
    $("a[data-social]").click(function(e) {
        e.preventDefault();
        var t = $(this), a = t.data("social"), i = {
            url: "",
            title: ""
        };
        t.data("title") && (i.title = t.data("title")), t.data("url") ? i.url = t.data("url") : i.url = t.attr("href"), 
        openSocialPopup(makeUrl(socials[a].popupUrl, i), {
            width: socials[a].popupWidth,
            height: socials[a].popupHeight
        });
    });
}

function resize() {
    wH = window.innerHeight || document.documentElement.clientHeight, wW = window.innerWidth || document.documentElement.clientWidth;
}

function onScroll() {
    var e = $(this).scrollTop();
    fixedMenuShow < e ? $fixedMenu.hasClass("is-sticky") || $fixedMenu.addClass("is-sticky") : e <= fixedMenuShow && $fixedMenu.hasClass("is-sticky") && $fixedMenu.removeClass("is-sticky");
}

function openSocialPopup(e, t) {
    var a = Math.round(screen.width / 2 - t.width / 2), i = 0;
    screen.height > t.height && (i = Math.round(screen.height / 3 - t.height / 2)), 
    window.open(e, "sharer", "top=" + i + ",left=" + a + ",toolbar=0,status=0,width=" + t.width + ",height=" + t.height);
}

function makeUrl(e, t) {
    return template(e, t);
}

function template(e, a, i) {
    return e.replace(/\{([^\}]+)\}/g, function(e, t) {
        return t in a ? i ? i(a[t]) : a[t] : e;
    });
}

$(function() {
    init(), $("input").length && forms(), popup(), cookieLaw();
});

var socials = {
    facebook: {
        popupUrl: "https://www.facebook.com/sharer/sharer.php?u={url}",
        popupWidth: 600,
        popupHeight: 500
    },
    twitter: {
        popupUrl: "https://twitter.com/intent/tweet?url={url}&text={title}",
        popupWidth: 600,
        popupHeight: 250
    },
    linkedin: {
        popupUrl: "https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&source=wellcome-home.pl",
        popupWidth: 600,
        popupHeight: 527
    },
    pocket: {
        popupUrl: "https://getpocket.com/save?url={url}",
        popupWidth: 600,
        popupHeight: 527
    }
};