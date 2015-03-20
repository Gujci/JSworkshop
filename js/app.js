/**
 * Created by Gujci on 20/03/15.
 */

var s = skrollr.init();

skrollr.menu.init(s, {
    animate: true,
    easing: 'sqrt',
    scale: 2,
    duration: function(currentTop, targetTop) {
        return 500;
    },
    handleLink: function(link) {

        switch (link.href.split("#")[1]) {
            case "program_link":
                return 130;
            case "ticket_link":
                return 500;
            case "info_link":
                return 660;
            case "contact_link":
                return 870;
            default:
                return 0;
        }
    }
});