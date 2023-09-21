
const nodemailer = require('nodemailer');
const dominioo = process.env.DOMAIN;

let transporter = nodemailer.createTransport({
    hhost: 'smtp.gmail.com',
    port: 465,
    tls: {
        rejectUnauthorized: false
    },  
    secure: true,
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ACCOUNT, // Cambialo por tu email
        pass: process.env.PASSWORD_ACCOUNT // Cambialo por tu password
    }
  });

  const sendEmail = async (email, name, code, uid) => {
    try {
        await transporter.sendMail({
            from: `"Towny-Halfy Studio"" <studiohalfy@gmail.com>`, // sender address
            to: email, // list of receivers
            subject:"Acción requerida para activar tu cuenta",// Subject line
            html: `  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
            <head>
            <meta charset="UTF-8">
            <meta content="width=device-width, initial-scale=1" name="viewport">
            <meta name="x-apple-disable-message-reformatting">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta content="telephone=no" name="format-detection">
            <!--[if (mso 16)]>
            <style type="text/css">
            a {text-decoration: none;}
            </style>
            <![endif]-->
            <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
            <!--[if gte mso 9]>
            <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
            <!--[if !mso]><!-- -->
            <link href="https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,400i,700,700i" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet">
            <!--<![endif]-->
            <style type="text/css">
            #outlook a {
            padding:0;
            }
            .ExternalClass {
            width:100%;
            }
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
            line-height:100%;
            }
            .es-button {
            mso-style-priority:100!important;
            text-decoration:none!important;
            }
            a[x-apple-data-detectors] {
            color:inherit!important;
            text-decoration:none!important;
            font-size:inherit!important;
            font-family:inherit!important;
            font-weight:inherit!important;
            line-height:inherit!important;
            }
            .es-desk-hidden {
            display:none;
            float:left;
            overflow:hidden;
            width:0;
            max-height:0;
            line-height:0;
            mso-hide:all;
            }
            [data-ogsb] .es-button {
            border-width:0!important;
            padding:15px 30px 15px 30px!important;
            }
            @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:32px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:32px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:16px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0!important } .es-m-p0r { padding-right:0!important } .es-m-p0l { padding-left:0!important } .es-m-p0t { padding-top:0!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-m-p5 { padding:5px!important } .es-m-p5t { padding-top:5px!important } .es-m-p5b { padding-bottom:5px!important } .es-m-p5r { padding-right:5px!important } .es-m-p5l { padding-left:5px!important } .es-m-p10 { padding:10px!important } .es-m-p10t { padding-top:10px!important } .es-m-p10b { padding-bottom:10px!important } .es-m-p10r { padding-right:10px!important } .es-m-p10l { padding-left:10px!important } .es-m-p15 { padding:15px!important } .es-m-p15t { padding-top:15px!important } .es-m-p15b { padding-bottom:15px!important } .es-m-p15r { padding-right:15px!important } .es-m-p15l { padding-left:15px!important } .es-m-p20 { padding:20px!important } .es-m-p20t { padding-top:20px!important } .es-m-p20r { padding-right:20px!important } .es-m-p20l { padding-left:20px!important } .es-m-p25 { padding:25px!important } .es-m-p25t { padding-top:25px!important } .es-m-p25b { padding-bottom:25px!important } .es-m-p25r { padding-right:25px!important } .es-m-p25l { padding-left:25px!important } .es-m-p30 { padding:30px!important } .es-m-p30t { padding-top:30px!important } .es-m-p30b { padding-bottom:30px!important } .es-m-p30r { padding-right:30px!important } .es-m-p30l { padding-left:30px!important } .es-m-p35 { padding:35px!important } .es-m-p35t { padding-top:35px!important } .es-m-p35b { padding-bottom:35px!important } .es-m-p35r { padding-right:35px!important } .es-m-p35l { padding-left:35px!important } .es-m-p40 { padding:40px!important } .es-m-p40t { padding-top:40px!important } .es-m-p40b { padding-bottom:40px!important } .es-m-p40r { padding-right:40px!important } .es-m-p40l { padding-left:40px!important } }
            </style>
            </head>
            <body style="width:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
            <div class="es-wrapper-color" style="background-color:#EEEEEE">
            <!--[if gte mso 9]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#eeeeee"></v:fill>
            </v:background>
            <![endif]-->
            <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top">
            <tr style="border-collapse:collapse">
            <td valign="top" style="padding:0;Margin:0">
            <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
            <tr style="border-collapse:collapse"></tr>
            <tr style="border-collapse:collapse">
            <td align="center" style="padding:0;Margin:0">
            <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#fc8404;width:600px" cellspacing="0" cellpadding="0" bgcolor="#FC8404" align="center">
            <tr style="border-collapse:collapse">
            <td align="left" style="padding:35px;Margin:0">
            <!--[if mso]><table style="width:530px" cellpadding="0" cellspacing="0"><tr><td style="width:175px" valign="top"><![endif]-->
            <table cellspacing="0" cellpadding="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
            <tr style="border-collapse:collapse">
            <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:175px">
            <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
            <tr style="border-collapse:collapse">
            <td align="left" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://towny.ovh" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#FFFFFF;font-size:14px"><img class="adapt-img" src="https://ukiiqs.stripocdn.email/content/guids/CABINET_5258dd302db24d3552b86029a6bb3e05/images/image.png" alt="Towny" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="175" title="Towny"></a></td>
            </tr>
            </table></td>
            </tr>
            </table>
            <!--[if mso]></td><td style="width:0px"></td><td style="width:355px" valign="top"><![endif]-->
            <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
            <tr style="border-collapse:collapse">
            <td align="left" style="padding:0;Margin:0;width:355px">
            <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
            <tr style="border-collapse:collapse">
            <td align="left" class="es-m-txt-c" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:20px;color:#FFFFFF;font-size:17px"><br><br><br><strong>by Halfy</strong></p></td>
            </tr>
            </table></td>
            </tr>
            </table>
            <!--[if mso]></td></tr></table><![endif]--></td>
            </tr>
            </table></td>
            </tr>
            </table>
            <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
            <tr style="border-collapse:collapse">
            <td align="center" style="padding:0;Margin:0">
            <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
            <tr style="border-collapse:collapse">
            <td style="Margin:0;padding-bottom:35px;padding-left:35px;padding-right:35px;padding-top:40px;background-color:#f7f7f7" bgcolor="#f7f7f7" align="left">
            <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
            <tr style="border-collapse:collapse">
            <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
            <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
            <tr style="border-collapse:collapse">
            <td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#333333">Bienvenido a Towny ${name},</h3></td>
            </tr>
            <tr style="border-collapse:collapse">
            <td align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px">
                        <p> Gracias por registrarte en Towny estimado/a ${name}, para activar
                        tu cuenta antes debes debes de pinchar en el enlace que aparece abajo. Solo será necesario
                        que realices está acción una sola vez.</p>
                        <a href="${dominioo}/users/validate/validar_normal?code=${code}&id=${uid}" target='_blank'>Confirmar cuenta</a></p></td>
            </tr>
            </table></td>
            </tr>
            </table></td>
            </tr>
            </table></td>
            </tr>
            </table>
            <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
            <tr style="border-collapse:collapse">
            <td align="center" style="padding:0;Margin:0">
            <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#3c84c4;width:600px" cellspacing="0" cellpadding="0" bgcolor="#3C84C4" align="center">
            <tr style="border-collapse:collapse">
            <td style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:40px;background-color:#3c84c4" bgcolor="#3C84C4" align="left">
            <!--[if mso]><table style="width:540px" cellpadding="0" cellspacing="0"><tr><td style="width:374px" valign="top"><![endif]-->
            <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
            <tr style="border-collapse:collapse">
            <td valign="top" align="center" style="padding:0;Margin:0;width:374px">
            <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
            <tr style="border-collapse:collapse">
            <td align="left" class="es-m-p40" style="padding:0;Margin:0;padding-left:30px;font-size:0px"><a target="_blank" href="https://towny.ovh/halfy" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px"><img class="adapt-img" src="https://ukiiqs.stripocdn.email/content/guids/CABINET_5258dd302db24d3552b86029a6bb3e05/images/halfy_blanco.png" alt="halfy" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="85" title="halfy"></a></td>
            </tr>
            <tr style="border-collapse:collapse">
            <td class="es-m-p0" align="left" style="padding:0;Margin:0;padding-bottom:30px;padding-left:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'merriweather sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:50px;color:#ffffff;font-size:25px"><span style="font-size:12px;line-height:24px">Grupo ABP de la Universidad de Alicante<br><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#ffffff;font-size:12px;font-family:'merriweather sans', 'helvetica neue', helvetica, arial, sans-serif" href="https://towny.ovh">Towny</a>&nbsp; &nbsp; &nbsp; <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#ffffff;font-size:12px;line-height:24px;font-family:'merriweather sans', 'helvetica neue', helvetica, arial, sans-serif" href="https://towny.ovh/halfy">Halfy</a><br><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#ffffff;font-size:12px;font-family:'merriweather sans', 'helvetica neue', helvetica, arial, sans-serif" href="https://towny.ovh/halfy/politica-de-privacidad/">Politica de privacidad</a><br></span></p></td>
            </tr>
            </table></td>
            </tr>
            </table>
            <!--[if mso]></td><td style="width:20px"></td><td style="width:146px" valign="top"><![endif]-->
            <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
            <tr style="border-collapse:collapse">
            <td align="left" style="padding:0;Margin:0;width:146px">
            <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center top" width="100%" cellspacing="0" cellpadding="0" role="presentation">
            <tr style="border-collapse:collapse">
            <td class="es-m-txt-c es-m-p40b" align="right" style="padding:0;Margin:0;padding-top:5px;padding-bottom:35px;font-size:0px">
            <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
            <tr style="border-collapse:collapse">
            <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://www.facebook.com/TownyByHalfy/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px"><img title="Facebook" src="https://ukiiqs.stripocdn.email/content/assets/img/social-icons/logo-white/facebook-logo-white.png" alt="Fb" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
            <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://twitter.com/TownyByHalfy/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px"><img title="Twitter" src="https://ukiiqs.stripocdn.email/content/assets/img/social-icons/logo-white/twitter-logo-white.png" alt="Tw" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
            <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://www.instagram.com/TownyByHalfy/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px"><img title="Instagram" src="https://ukiiqs.stripocdn.email/content/assets/img/social-icons/logo-white/instagram-logo-white.png" alt="Inst" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
            <td valign="top" align="center" style="padding:0;Margin:0"><a target="_blank" href="https://www.tiktok.com/@townybyhalfy" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px"><img title="TikTok" src="https://ukiiqs.stripocdn.email/content/assets/img/social-icons/logo-white/tiktok-logo-white.png" alt="Tt" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
            </tr>
            </table></td>
            </tr>
            <tr class="es-mobile-hidden" style="border-collapse:collapse">
            <td height="30" align="center" style="padding:0;Margin:0"></td>
            </tr>
            </table></td>
            </tr>
            </table>
            <!--[if mso]></td></tr></table><![endif]--></td>
            </tr>
            </table></td>
            </tr>
            </table>
            <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
            <tr style="border-collapse:collapse">
            <td align="center" style="padding:0;Margin:0">
            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
            <tr style="border-collapse:collapse">
            <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:35px;padding-right:35px">
            <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
            <tr style="border-collapse:collapse">
            <td align="center" valign="top" style="padding:0;Margin:0;width:530px">
            <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
            <tr style="border-collapse:collapse">
            <td align="center" style="padding:0;Margin:0;display:none"></td>
            </tr>
            </table></td>
            </tr>
            </table></td>
            </tr>
            </table></td>
            </tr>
            </table></td>
            </tr>
            </table>
            </div>
            </body>
            </html>` // html body
            ///validate?code=c08d5c40-43a4-40eb-b816-ee2d1963b830&id=619e7e5759c2294bb0cae933
            
        });
    } catch (error) {
        console.log('Algo no va bien con el email', error);
    }
  }

  const sendEmailAdmin = async (email, name, token, code, uid) => {
    try {
        
        await transporter.sendMail({
            from: `"Towny-Halfy Studio"" <studiohalfy@gmail.com>`, // sender address
            to: email, // list of receivers
            subject:"Acción requerida para activar tu cuenta",// Subject line
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
            <head>
            <meta charset="UTF-8">
            <meta content="width=device-width, initial-scale=1" name="viewport">
            <meta name="x-apple-disable-message-reformatting">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta content="telephone=no" name="format-detection">
            <!--[if (mso 16)]>
            <style type="text/css">
            a {text-decoration: none;}
            </style>
            <![endif]-->
            <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
            <!--[if gte mso 9]>
            <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
            <!--[if !mso]><!-- -->
            <link href="https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,400i,700,700i" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet">
            <!--<![endif]-->
            <style type="text/css">
            #outlook a {
            padding:0;
            }
            .ExternalClass {
            width:100%;
            }
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
            line-height:100%;
            }
            .es-button {
            mso-style-priority:100!important;
            text-decoration:none!important;
            }
            a[x-apple-data-detectors] {
            color:inherit!important;
            text-decoration:none!important;
            font-size:inherit!important;
            font-family:inherit!important;
            font-weight:inherit!important;
            line-height:inherit!important;
            }
            .es-desk-hidden {
            display:none;
            float:left;
            overflow:hidden;
            width:0;
            max-height:0;
            line-height:0;
            mso-hide:all;
            }
            [data-ogsb] .es-button {
            border-width:0!important;
            padding:15px 30px 15px 30px!important;
            }
            @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:32px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:32px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:16px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0!important } .es-m-p0r { padding-right:0!important } .es-m-p0l { padding-left:0!important } .es-m-p0t { padding-top:0!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-m-p5 { padding:5px!important } .es-m-p5t { padding-top:5px!important } .es-m-p5b { padding-bottom:5px!important } .es-m-p5r { padding-right:5px!important } .es-m-p5l { padding-left:5px!important } .es-m-p10 { padding:10px!important } .es-m-p10t { padding-top:10px!important } .es-m-p10b { padding-bottom:10px!important } .es-m-p10r { padding-right:10px!important } .es-m-p10l { padding-left:10px!important } .es-m-p15 { padding:15px!important } .es-m-p15t { padding-top:15px!important } .es-m-p15b { padding-bottom:15px!important } .es-m-p15r { padding-right:15px!important } .es-m-p15l { padding-left:15px!important } .es-m-p20 { padding:20px!important } .es-m-p20t { padding-top:20px!important } .es-m-p20r { padding-right:20px!important } .es-m-p20l { padding-left:20px!important } .es-m-p25 { padding:25px!important } .es-m-p25t { padding-top:25px!important } .es-m-p25b { padding-bottom:25px!important } .es-m-p25r { padding-right:25px!important } .es-m-p25l { padding-left:25px!important } .es-m-p30 { padding:30px!important } .es-m-p30t { padding-top:30px!important } .es-m-p30b { padding-bottom:30px!important } .es-m-p30r { padding-right:30px!important } .es-m-p30l { padding-left:30px!important } .es-m-p35 { padding:35px!important } .es-m-p35t { padding-top:35px!important } .es-m-p35b { padding-bottom:35px!important } .es-m-p35r { padding-right:35px!important } .es-m-p35l { padding-left:35px!important } .es-m-p40 { padding:40px!important } .es-m-p40t { padding-top:40px!important } .es-m-p40b { padding-bottom:40px!important } .es-m-p40r { padding-right:40px!important } .es-m-p40l { padding-left:40px!important } }
            </style>
            </head>
            <body style="width:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
            <div class="es-wrapper-color" style="background-color:#EEEEEE">
            <!--[if gte mso 9]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#eeeeee"></v:fill>
            </v:background>
            <![endif]-->
            <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top">
            <tr style="border-collapse:collapse">
            <td valign="top" style="padding:0;Margin:0">
            <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
            <tr style="border-collapse:collapse"></tr>
            <tr style="border-collapse:collapse">
            <td align="center" style="padding:0;Margin:0">
            <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#fc8404;width:600px" cellspacing="0" cellpadding="0" bgcolor="#FC8404" align="center">
            <tr style="border-collapse:collapse">
            <td align="left" style="padding:35px;Margin:0">
            <!--[if mso]><table style="width:530px" cellpadding="0" cellspacing="0"><tr><td style="width:175px" valign="top"><![endif]-->
            <table cellspacing="0" cellpadding="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
            <tr style="border-collapse:collapse">
            <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:175px">
            <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
            <tr style="border-collapse:collapse">
            <td align="left" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://towny.ovh" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#FFFFFF;font-size:14px"><img class="adapt-img" src="https://ukiiqs.stripocdn.email/content/guids/CABINET_5258dd302db24d3552b86029a6bb3e05/images/image.png" alt="Towny" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="175" title="Towny"></a></td>
            </tr>
            </table></td>
            </tr>
            </table>
            <!--[if mso]></td><td style="width:0px"></td><td style="width:355px" valign="top"><![endif]-->
            <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
            <tr style="border-collapse:collapse">
            <td align="left" style="padding:0;Margin:0;width:355px">
            <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
            <tr style="border-collapse:collapse">
            <td align="left" class="es-m-txt-c" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:20px;color:#FFFFFF;font-size:17px"><br><br><br><strong>by Halfy</strong></p></td>
            </tr>
            </table></td>
            </tr>
            </table>
            <!--[if mso]></td></tr></table><![endif]--></td>
            </tr>
            </table></td>
            </tr>
            </table>
            <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
            <tr style="border-collapse:collapse">
            <td align="center" style="padding:0;Margin:0">
            <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
            <tr style="border-collapse:collapse">
            <td style="Margin:0;padding-bottom:35px;padding-left:35px;padding-right:35px;padding-top:40px;background-color:#f7f7f7" bgcolor="#f7f7f7" align="left">
            <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
            <tr style="border-collapse:collapse">
            <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
            <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
            <tr style="border-collapse:collapse">
            <td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#333333">Bienvenido a Towny Administrador,</h3></td>
            </tr>
            <tr style="border-collapse:collapse">
            <td align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px">
                        <p> Has sido dado de alta como administrador en Towny, para activar
                        tu cuenta antes debes debes de pinchar en el enlace que aparece abajo. Este enlace
                        te llevará a un formulario en el que deberás insertar tu clave de acceso al sistema.</p>
                        <a href="${dominioo}/users/validate/verifyadmin/${token}?code=${code}&id=${uid}" target='_blank'>Confirmar cuenta</a></p></td>
            </tr>
            </table></td>
            </tr>
            </table></td>
            </tr>
            </table></td>
            </tr>
            </table>
            <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
            <tr style="border-collapse:collapse">
            <td align="center" style="padding:0;Margin:0">
            <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#3c84c4;width:600px" cellspacing="0" cellpadding="0" bgcolor="#3C84C4" align="center">
            <tr style="border-collapse:collapse">
            <td style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:40px;background-color:#3c84c4" bgcolor="#3C84C4" align="left">
            <!--[if mso]><table style="width:540px" cellpadding="0" cellspacing="0"><tr><td style="width:374px" valign="top"><![endif]-->
            <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
            <tr style="border-collapse:collapse">
            <td valign="top" align="center" style="padding:0;Margin:0;width:374px">
            <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
            <tr style="border-collapse:collapse">
            <td align="left" class="es-m-p40" style="padding:0;Margin:0;padding-left:30px;font-size:0px"><a target="_blank" href="https://towny.ovh/halfy" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px"><img class="adapt-img" src="https://ukiiqs.stripocdn.email/content/guids/CABINET_5258dd302db24d3552b86029a6bb3e05/images/halfy_blanco.png" alt="halfy" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="85" title="halfy"></a></td>
            </tr>
            <tr style="border-collapse:collapse">
            <td class="es-m-p0" align="left" style="padding:0;Margin:0;padding-bottom:30px;padding-left:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'merriweather sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:50px;color:#ffffff;font-size:25px"><span style="font-size:12px;line-height:24px">Grupo ABP de la Universidad de Alicante<br><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#ffffff;font-size:12px;font-family:'merriweather sans', 'helvetica neue', helvetica, arial, sans-serif" href="https://towny.ovh">Towny</a>&nbsp; &nbsp; &nbsp; <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#ffffff;font-size:12px;line-height:24px;font-family:'merriweather sans', 'helvetica neue', helvetica, arial, sans-serif" href="https://towny.ovh/halfy">Halfy</a><br><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#ffffff;font-size:12px;font-family:'merriweather sans', 'helvetica neue', helvetica, arial, sans-serif" href="https://towny.ovh/halfy/politica-de-privacidad/">Politica de privacidad</a><br></span></p></td>
            </tr>
            </table></td>
            </tr>
            </table>
            <!--[if mso]></td><td style="width:20px"></td><td style="width:146px" valign="top"><![endif]-->
            <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
            <tr style="border-collapse:collapse">
            <td align="left" style="padding:0;Margin:0;width:146px">
            <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center top" width="100%" cellspacing="0" cellpadding="0" role="presentation">
            <tr style="border-collapse:collapse">
            <td class="es-m-txt-c es-m-p40b" align="right" style="padding:0;Margin:0;padding-top:5px;padding-bottom:35px;font-size:0px">
            <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
            <tr style="border-collapse:collapse">
            <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://www.facebook.com/TownyByHalfy/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px"><img title="Facebook" src="https://ukiiqs.stripocdn.email/content/assets/img/social-icons/logo-white/facebook-logo-white.png" alt="Fb" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
            <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://twitter.com/TownyByHalfy/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px"><img title="Twitter" src="https://ukiiqs.stripocdn.email/content/assets/img/social-icons/logo-white/twitter-logo-white.png" alt="Tw" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
            <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://www.instagram.com/TownyByHalfy/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px"><img title="Instagram" src="https://ukiiqs.stripocdn.email/content/assets/img/social-icons/logo-white/instagram-logo-white.png" alt="Inst" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
            <td valign="top" align="center" style="padding:0;Margin:0"><a target="_blank" href="https://www.tiktok.com/@townybyhalfy" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px"><img title="TikTok" src="https://ukiiqs.stripocdn.email/content/assets/img/social-icons/logo-white/tiktok-logo-white.png" alt="Tt" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
            </tr>
            </table></td>
            </tr>
            <tr class="es-mobile-hidden" style="border-collapse:collapse">
            <td height="30" align="center" style="padding:0;Margin:0"></td>
            </tr>
            </table></td>
            </tr>
            </table>
            <!--[if mso]></td></tr></table><![endif]--></td>
            </tr>
            </table></td>
            </tr>
            </table>
            <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
            <tr style="border-collapse:collapse">
            <td align="center" style="padding:0;Margin:0">
            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
            <tr style="border-collapse:collapse">
            <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:35px;padding-right:35px">
            <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
            <tr style="border-collapse:collapse">
            <td align="center" valign="top" style="padding:0;Margin:0;width:530px">
            <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
            <tr style="border-collapse:collapse">
            <td align="center" style="padding:0;Margin:0;display:none"></td>
            </tr>
            </table></td>
            </tr>
            </table></td>
            </tr>
            </table></td>
            </tr>
            </table></td>
            </tr>
            </table>
            </div>
            </body>
            </html>` // html body
        });
    } catch (error) {
        console.log('Algo no va bien con el email', error);
    }
  }


  module.exports = { sendEmail, sendEmailAdmin }