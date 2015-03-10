(function() {
  var GoogleAnalytics;

  $(document).ready(function() {
    $("#my-email").html(function() {
      var a, c, d, e, h;
      e = "gs";
      a = "@";
      d = "hspindesign";
      c = ".com";
      h = "mailto:" + e + a + d + c;
      $(this).attr("href", h);
      return e + a + d + c;
    });
    $("#my-phone").html(function() {
      var a, c, d, e;
      e = "61";
      a = "7-";
      d = "819";
      c = "-5450";
      return e + a + d + c;
    });
    $("input#name").focus(function() {
      $("#success").html("");
    });
    $("#contactform").click(function(event) {
      var email, message, myerror, name, testing;
      testing = false;
      event.preventDefault();
      name = $("input#name").val();
      email = $("input#email").val();
      message = $("textarea#message").val();
      myerror = false;
      if (name.length === 0) {
        myerror = true;
      }
      if (email.length === 0) {
        myerror = true;
      }
      if (message.length === 0) {
        myerror = true;
      }
      if (myerror) {
        $("#success").html("<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Error: All fields required</strong></div>");
        return false;
      }
      $("input#name").attr("disabled", true);
      $("input#email").attr("disabled", true);
      $("textarea#message").attr("disabled", true);
      $("#contactform").attr("disabled", true);
      $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        dataType: 'json',
        data: {
          key: "RTtIT4331Ga57KZ35hEA8g",
          message: {
            from_email: "info@hspindesign.com",
            to: [
              {
                email: "gs@hspindesign.com",
                name: "ContactForm",
                type: "to"
              }
            ],
            autotext: "true",
            subject: "New Contact Form Request",
            html: "Name: <br>\n" + name + "<br><br>\nEmail: <br>\n" + email + "<br><br>\nPost: <br>\n" + message + "<br>\n"
          }
        },
        complete: function() {
          testing = true;
          console.log("complete");
          return false;
        },
        success: function() {
          console.log("yes!!!");
          $("#success").html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Thank You <br /><br />Your message has been sent. </strong></div>");
          $("#MyContactForm").trigger("reset");
          $("input#name").attr("disabled", false);
          $("input#email").attr("disabled", false);
          $("textarea#message").attr("disabled", false);
          $("#contactform").attr("disabled", false);
          return false;
        },
        error: function() {
          return console.log("error");
        }
      });
      return false;
    });
    return false;
  });

  GoogleAnalytics = (function() {
    function GoogleAnalytics() {}

    GoogleAnalytics.init = function(webPropertyId) {
      var scriptTag;
      this._initQueue(webPropertyId);
      scriptTag = this._createScriptTag();
      this._injectScriptTag(scriptTag);
      return true;
    };

    GoogleAnalytics._initQueue = function(webPropertyId) {
      if (window._gaq == null) {
        window._gaq = [];
      }
      window._gaq.push(['_setAccount', webPropertyId]);
      return window._gaq.push(['_trackPageview']);
    };

    GoogleAnalytics._createScriptTag = function() {
      var protocol, scriptTag;
      scriptTag = document.createElement('script');
      scriptTag.type = 'text/javascript';
      scriptTag.async = true;
      protocol = location.protocol;
      scriptTag.src = "" + protocol + "//stats.g.doubleclick.net/dc.js";
      return scriptTag;
    };

    GoogleAnalytics._injectScriptTag = function(scriptTag) {
      var firstScriptTag;
      firstScriptTag = document.getElementsByTagName('script')[0];
      return firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);
    };

    GoogleAnalytics.trackPageView = function(url) {
      return window._gaq.push(['_trackPageview', url]);
    };

    GoogleAnalytics.trackEvent = function(category, action, label, value, nonInteraction) {
      var argument, trackedEvent, _i, _len, _ref;
      if (label == null) {
        label = null;
      }
      if (value == null) {
        value = null;
      }
      if (nonInteraction == null) {
        nonInteraction = null;
      }
      trackedEvent = ['_trackEvent', category, action];
      _ref = [label, value, nonInteraction];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        argument = _ref[_i];
        if (argument != null) {
          trackedEvent.push(argument);
        } else {
          break;
        }
      }
      return window._gaq.push(trackedEvent);
    };

    return GoogleAnalytics;

  })();

  $(function() {
    return GoogleAnalytics.init('UA-40605706-1');
  });

}).call(this);
