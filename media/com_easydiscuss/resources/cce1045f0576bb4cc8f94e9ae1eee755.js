FD31.installer("EasyDiscuss", "resources", function($){
$.require.template.loader({"easydiscuss\/field.form.attachments.item":"<li data-attachment-item class=\"attachment-item new\">\n\t<span data-attachment-title><\/span>\n\t<a data-attachment-remove-button href=\"javascript:void(0);\"> &bull; Verwijder<\/a>\n\t<input type=\"file\" name=\"filedata[]\" size=\"50\" data-attachment-file \/>\n<\/li><script type=\"text\/javascript\"><li data-attachment-item class=\"attachment-item new\">\n\t<span data-attachment-title><\/span>\n\t<a data-attachment-remove-button href=\"javascript:void(0);\"> &bull; Verwijder<\/a>\n\t<input type=\"file\" name=\"filedata[]\" size=\"50\" data-attachment-file \/>\n<\/li><\/script>","easydiscuss\/field.form.attachments.fileinput":"<input type=\"file\" name=\"filedata[]\" size=\"50\" class=\"fileInput\" \/><script type=\"text\/javascript\"><input type=\"file\" name=\"filedata[]\" size=\"50\" class=\"fileInput\" \/><\/script>","easydiscuss\/conversation.read.item":"<li class=\"[%= post.className %]\">\n\t<div class=\"media\">\n\t\t<a class=\"discuss-avatar float-l\" href=\"[%= post.authorLink %]\">\n\t\t\t<img src=\"[%= post.authorAvatar %]\" alt=\"[%= post.authorName %]\" class=\"avatar\" width=\"70\" height=\"70\" \/>\n\t\t<\/a>\n\t\t<div class=\"media-body\">\n\t\t\t<header>\n\t\t\t\t<b><a href=\"[%= post.authorLink %]\">[%= post.authorName %]<\/a><\/b>\n\t\t\t<\/header>\n\t\t\t<article>\n\t\t\t\t[%= post.message %]\n\t\t\t<\/article>\n\t\t\t<footer>\n\t\t\t\t[%= post.lapsed %]\n\t\t\t\t<time datetime=\"[%= post.created %]\"><\/time>\n\t\t\t<\/footer>\n\t\t<\/div>\n\t<\/div>\n<\/li>\n<script type=\"text\/javascript\"><li class=\"[%= post.className %]\">\n\t<div class=\"media\">\n\t\t<a class=\"discuss-avatar float-l\" href=\"[%= post.authorLink %]\">\n\t\t\t<img src=\"[%= post.authorAvatar %]\" alt=\"[%= post.authorName %]\" class=\"avatar\" width=\"70\" height=\"70\" \/>\n\t\t<\/a>\n\t\t<div class=\"media-body\">\n\t\t\t<header>\n\t\t\t\t<b><a href=\"[%= post.authorLink %]\">[%= post.authorName %]<\/a><\/b>\n\t\t\t<\/header>\n\t\t\t<article>\n\t\t\t\t[%= post.message %]\n\t\t\t<\/article>\n\t\t\t<footer>\n\t\t\t\t[%= post.lapsed %]\n\t\t\t\t<time datetime=\"[%= post.created %]\"><\/time>\n\t\t\t<\/footer>\n\t\t<\/div>\n\t<\/div>\n<\/li>\n<\/script>","easydiscuss\/field.form.polls.answer":"<li class=\"pollAnswers\">\n\t<input type=\"text\" name=\"pollitems[]\" class=\"form-control answerText\" \/>\n\t[% if( showRemove ){ %]\n\t<a href=\"javascript:void(0);\" class=\"btn btn-danger removeItem\"><i class=\"icon-remove\"><\/i> <\/a>\n\t[% } %]\n<\/li>\n<script type=\"text\/javascript\"><li class=\"pollAnswers\">\n\t<input type=\"text\" name=\"pollitems[]\" class=\"form-control answerText\" \/>\n\t[% if( showRemove ){ %]\n\t<a href=\"javascript:void(0);\" class=\"btn btn-danger removeItem\"><i class=\"icon-remove\"><\/i> <\/a>\n\t[% } %]\n<\/li>\n<\/script>","easydiscuss\/comment.form":"<form name=\"discussCommentForm\">\n\t<div class=\"discuss-respond-form\">\n\t\t<article>\n\t\t\t<textarea id=\"comment\" name=\"comment\" class=\"form-control commentMessage\"><\/textarea>\n\t\t<\/article>\n\n\t\t<footer>\n\t\t\t\t\t\t<div class=\"comment-terms float-l checkbox\">\n\t\t\t\t<label>\n\t\t\t\t\t<input type=\"checkbox\" name=\"tnc\" value=\"1\" class=\"commentTnc\" \/>\n\t\t\t\t\tIk heb gelezen en ga akkoord met de \n\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"termsLink\">\n\t\t\t\t\t\tAlgemene voorwaarden\t\t\t\t\t<\/a>\n\t\t\t\t<\/label>\n\t\t\t<\/div>\n\t\t\t\n\t\t\t<div class=\"comment-actions float-r\">\n\t\t\t\t<a href=\"javascript:void(0);\" class=\"butt butt-s cancelButton\">Annuleer<\/a>\n\t\t\t\t<a href=\"javascript:void(0);\" class=\"butt butt-s butt-primary saveButton\">Verzend<\/a>\n\t\t\t\t<span class=\"pull-right commentLoader discuss-loader\" style=\"display: none;\"><\/span>\n\t\t\t<\/div>\n\t\t<\/footer>\n\t<\/div>\n\t<input type=\"hidden\" name=\"post_id\" class=\"postId\" value=\"[%= id %]\">\n<\/form>\n<script type=\"text\/javascript\"><form name=\"discussCommentForm\">\n\t<div class=\"discuss-respond-form\">\n\t\t<article>\n\t\t\t<textarea id=\"comment\" name=\"comment\" class=\"form-control commentMessage\"><\/textarea>\n\t\t<\/article>\n\n\t\t<footer>\n\t\t\t\t\t\t<div class=\"comment-terms float-l checkbox\">\n\t\t\t\t<label>\n\t\t\t\t\t<input type=\"checkbox\" name=\"tnc\" value=\"1\" class=\"commentTnc\" \/>\n\t\t\t\t\tIk heb gelezen en ga akkoord met de \n\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"termsLink\">\n\t\t\t\t\t\tAlgemene voorwaarden\t\t\t\t\t<\/a>\n\t\t\t\t<\/label>\n\t\t\t<\/div>\n\t\t\t\n\t\t\t<div class=\"comment-actions float-r\">\n\t\t\t\t<a href=\"javascript:void(0);\" class=\"butt butt-s cancelButton\">Annuleer<\/a>\n\t\t\t\t<a href=\"javascript:void(0);\" class=\"butt butt-s butt-primary saveButton\">Verzend<\/a>\n\t\t\t\t<span class=\"pull-right commentLoader discuss-loader\" style=\"display: none;\"><\/span>\n\t\t\t<\/div>\n\t\t<\/footer>\n\t<\/div>\n\t<input type=\"hidden\" name=\"post_id\" class=\"postId\" value=\"[%= id %]\">\n<\/form>\n<\/script>","easydiscuss\/post.notification":"<div class=\"discussNotification\">\n\t<div class=\"replyContainer\"[% if(newReply < 1) { %] style=\"display: none;\"[% } %]><span class=\"replyCount\">[%= newReply %]<\/span> <span class=\"replyText\">nieuwe antwoord<\/span><\/div>\n\n\t<div class=\"commentContainer\"[% if(newComment < 1) { %] style=\"display: none;\"[% } %]><span class=\"commentCount\">[%= newComment %]<\/span> <span class=\"commentText\">nieuwe reactie<\/span><\/div>\n\n\t<a href=\"javascript:document.location.reload(true)\" class=\"btn btn btn-mini btn-success\">Vernieuw pagina<\/a>\n\n<\/div>\n<script type=\"text\/javascript\"><div class=\"discussNotification\">\n\t<div class=\"replyContainer\"[% if(newReply < 1) { %] style=\"display: none;\"[% } %]><span class=\"replyCount\">[%= newReply %]<\/span> <span class=\"replyText\">nieuwe antwoord<\/span><\/div>\n\n\t<div class=\"commentContainer\"[% if(newComment < 1) { %] style=\"display: none;\"[% } %]><span class=\"commentCount\">[%= newComment %]<\/span> <span class=\"commentText\">nieuwe reactie<\/span><\/div>\n\n\t<a href=\"javascript:document.location.reload(true)\" class=\"btn btn btn-mini btn-success\">Vernieuw pagina<\/a>\n\n<\/div>\n<\/script>"});
$.require.language.loader({"COM_EASYDISCUSS_EXCEED_ATTACHMENT_LIMIT":"You have reached the attachment limit per post.","COM_EASYDISCUSS_TERMS_PLEASE_ACCEPT":"Accepteer eerst de 'Algemene voorwaarden'","COM_EASYDISCUSS_COMMENT_SUCESSFULLY_ADDED":"Reactie toegevoegd.","COM_EASYDISCUSS_COMMENT_LOAD_MORE":"Laad meer reacties","COM_EASYDISCUSS_COMMENT_LOADING_MORE_COMMENTS":"Laden van meer reacties","COM_EASYDISCUSS_COMMENT_LOAD_ERROR":"Fout tijdens laden","COM_EASYDISCUSS_CONVERSATION_EMPTY_CONTENT":"Voer een bericht in.","COM_EASYDISCUSS_CUSTOMFIELDS_DISPLAY_ERROR":"Display error.","COM_EASYDISCUSS_BBCODE_BOLD":"Vet","COM_EASYDISCUSS_BBCODE_ITALIC":"Cursief","COM_EASYDISCUSS_BBCODE_UNDERLINE":"Onderstreept","COM_EASYDISCUSS_BBCODE_URL":"Link","COM_EASYDISCUSS_BBCODE_TITLE":"Titel","COM_EASYDISCUSS_BBCODE_PICTURE":"Afbeelding","COM_EASYDISCUSS_BBCODE_VIDEO":"Video","COM_EASYDISCUSS_BBCODE_BULLETED_LIST":"Opsom-lijst","COM_EASYDISCUSS_BBCODE_NUMERIC_LIST":"Genummerde-lijst","COM_EASYDISCUSS_BBCODE_LIST_ITEM":"Lijst-item","COM_EASYDISCUSS_BBCODE_QUOTES":"Citaat","COM_EASYDISCUSS_BBCODE_CODE":"Code","COM_EASYDISCUSS_BBCODE_HAPPY":"Blij","COM_EASYDISCUSS_BBCODE_SMILE":"Lach","COM_EASYDISCUSS_BBCODE_SURPRISED":"Verrast","COM_EASYDISCUSS_BBCODE_TONGUE":"Tong","COM_EASYDISCUSS_BBCODE_UNHAPPY":"Droevig","COM_EASYDISCUSS_BBCODE_WINK":"Knipoog","COM_EASYDISCUSS_FAVOURITE_BUTTON_UNFAVOURITE":"Markeer niet meer als favoriet","COM_EASYDISCUSS_FAVOURITE_BUTTON_FAVOURITE":"Markeer als favoriet","COM_EASYDISCUSS_UNLIKE_THIS_POST":"Vind dit bericht niet meer leuk.","COM_EASYDISCUSS_LIKE_THIS_POST":"Vind dit bericht leuk.","COM_EASYDISCUSS_UNLIKE":"Vind niet meer leuk","COM_EASYDISCUSS_LIKES":"Vind leuk","COM_EASYDISCUSS_NOTIFICATION_NEW_REPLIES":"nieuwe antwoorden","COM_EASYDISCUSS_NOTIFICATION_NEW_COMMENTS":"nieuwe reacties","COM_EASYDISCUSS_PLEASE_SELECT_CATEGORY_DESC":"Kies eerst een categorie voor het formulier te verzenden.","COM_EASYDISCUSS_POST_TITLE_CANNOT_EMPTY":"Geef alstublieft een titel aan uw discussie","COM_EASYDISCUSS_POST_CONTENT_IS_EMPTY":"Veld is leeg, geef een waarde.","COM_EASYDISCUSS_SUCCESS":"Success","COM_EASYDISCUSS_FAIL":"Fail","COM_EASYDISCUSS_REPLY_LOADING_MORE_COMMENTS":"Meer reacties aan het laden","COM_EASYDISCUSS_REPLY_LOAD_ERROR":"Laadfout"});
});
