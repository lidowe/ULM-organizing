/**
 * Upper Level Music: turns website form submissions into email, using only your own Google account.
 * Paste this into a new Google Apps Script project (script.google.com) while signed in as
 * edwardlidow@upperlevelmusic.com, then Deploy > New deployment > Web app:
 *   Execute as: Me      Who has access: Anyone
 * Copy the web app URL. That URL is the secret that lets the website send you mail.
 */
var TO = "edwardlidow@upperlevelmusic.com";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var subject = String(data.subject || "Website message").slice(0, 200);
    var text = String(data.text || "").slice(0, 8000);
    if (!text) return out({ ok: false });
    var options = {};
    if (data.email && /^\S+@\S+\.\S+$/.test(data.email)) options.replyTo = data.email;
    MailApp.sendEmail(TO, subject, text, options);
    return out({ ok: true });
  } catch (err) {
    return out({ ok: false });
  }
}

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
