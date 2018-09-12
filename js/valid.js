$.validator.addMethod("regx", function(value, element, regexpr) {
    return regexpr.test(value);
}, "Das Passwort muss zwischen 6-12 Zeichen lang sein, einschließlich Buchstaben (AZ, az) und Ziffern (0-9). Ohne Sonderzeichen (^@()_#*+/\"?!=.{}~`&) und Leerzeichen");


$("#bigForm1").validate({

    rules:{

        first_name:{
            required: true,
            minlength: 1,
            maxlength: 64,
        },

        last_name:{
            required: true,
            minlength: 1,
            maxlength: 64,
        },

        email:{
            required: true,
            email: true,

        },

        phone:{
            required: true,
            number: true,
            minlength: 6,
            maxlength: 25,

        },

        phonecc:{
            required: true
        },

        password:{
            required: true,
            regx: /^\w*(?=\w*\d)(?=\w*[a-zA-z])\w*$/m,
            minlength: 6,
            maxlength: 12,
        }
    },

    messages:{

        first_name:{
            required: "Vornamen muss ausgefüllt sein",
            minlength: "Vornamen muss mindestens 6 sein",
            maxlength: "Vornamen darf maximal 12 sein",
        },

        last_name:{
            required: "Nachnamen muss ausgefüllt sein",
            minlength: "Nachnamen muss mindestens 6 sein",
            maxlength: "Nachnamen darf maximal 12 sein",
        },

        email:{
            required: "E-Mail muss ausgefüllt sein",
            email: "E-Mail muss eine gültige sein",
        },

        phone:{
            required: "Telefonnummer muss ausgefüllt sein",
            number: "Telefonnummer muss eine Zahl sein",
            minlength: "Telefonnummer darf mindestens 6 sein",
            maxlength: "Telefonnummer muss eine gültige sein",
        },

        phonecc:{
            required: "Vorwahl muss ausgefüllt sein"
        },

        password:{
            required: "Passwort  muss ausgefüllt sein",
            minlength: "Passwort muss mindestens 6 sein",
            maxlength: "Passwort darf maximal 12 sein",
        },

    }

});

$("#bigForm2").validate({

    rules:{

        first_name:{
            required: true,
            minlength: 1,
            maxlength: 64,
        },

        last_name:{
            required: true,
            minlength: 1,
            maxlength: 64,
        },

        email:{
            required: true,
            email: true,

        },

        phone:{
            required: true,
            number: true,
            minlength: 6,
            maxlength: 25,

        },

        phonecc:{
            required: true
        },

        password:{
            required: true,
            regx: /^\w*(?=\w*\d)(?=\w*[a-zA-z])\w*$/m,
            minlength: 6,
            maxlength: 12,
        }
    },

    messages:{

        first_name:{
            required: "Vornamen muss ausgefüllt sein",
            minlength: "Vornamen muss mindestens 6 sein",
            maxlength: "Vornamen darf maximal 12 sein",
        },

        last_name:{
            required: "Nachnamen muss ausgefüllt sein",
            minlength: "Nachnamen muss mindestens 6 sein",
            maxlength: "Nachnamen darf maximal 12 sein",
        },

        email:{
            required: "E-Mail muss ausgefüllt sein",
            email: "E-Mail muss eine gültige sein",
        },

        phone:{
            required: "Telefonnummer muss ausgefüllt sein",
            number: "Telefonnummer muss eine Zahl sein",
            minlength: "Telefonnummer darf mindestens 6 sein",
            maxlength: "Telefonnummer muss eine gültige sein",
        },

        phonecc:{
            required: "Vorwahl muss ausgefüllt sein"
        },

        password:{
            required: "Passwort  muss ausgefüllt sein",
            minlength: "Passwort muss mindestens 6 sein",
            maxlength: "Passwort darf maximal 12 sein",
        },

    }

});

$("#bigForm3").validate({

    rules:{

        first_name:{
            required: true,
            minlength: 1,
            maxlength: 64,
        },

        last_name:{
            required: true,
            minlength: 1,
            maxlength: 64,
        },

        email:{
            required: true,
            email: true,

        },

        phone:{
            required: true,
            number: true,
            minlength: 6,
            maxlength: 25,

        },

        password:{
            required: true,
            regx: /^\w*(?=\w*\d)(?=\w*[a-zA-z])\w*$/m,
            minlength: 6,
            maxlength: 12,
        }
    },

    messages:{

        first_name:{
            required: "Vornamen muss ausgefüllt sein",
            minlength: "Vornamen muss mindestens 6 sein",
            maxlength: "Vornamen darf maximal 12 sein",
        },

        last_name:{
            required: "Nachnamen muss ausgefüllt sein",
            minlength: "Nachnamen muss mindestens 6 sein",
            maxlength: "Nachnamen darf maximal 12 sein",
        },

        email:{
            required: "E-Mail muss ausgefüllt sein",
            email: "E-Mail muss eine gültige sein",
        },

        phone:{
            required: "Telefonnummer muss ausgefüllt sein",
            number: "Telefonnummer muss eine Zahl sein",
            minlength: "Telefonnummer darf mindestens 6 sein",
            maxlength: "Telefonnummer muss eine gültige sein",
        },

        password:{
            required: "Passwort  muss ausgefüllt sein",
            minlength: "Passwort muss mindestens 6 sein",
            maxlength: "Passwort darf maximal 12 sein",
        },

    }

});
