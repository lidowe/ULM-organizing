/**
 * Upper Level Music: turns website form submissions into email, using only your own Google account.
 *
 * Lives in a Google Apps Script project (script.google.com) owned by edwardlidow@upperlevelmusic.com,
 * deployed as a Web app (Execute as: Me, Who has access: Anyone). The Worker secret
 * INQUIRY_WEBHOOK_URL holds the web app URL.
 *
 * To update this script without changing the URL: paste the new code, Save, then
 * Deploy > Manage deployments > (pencil) Edit > Version: New version > Deploy.
 * "New deployment" would create a new URL and the website would keep calling the old one.
 *
 * Shared secret: Project Settings > Script properties > SECRET. While SECRET is unset the
 * script accepts every request (so the website and this script can be updated in either
 * order); once set, a request must carry the same value as the Worker secret FORWARDER_SECRET.
 *
 * Every reply is JSON. The website only treats a reply as delivered when it says ok: true.
 */
var TO = "edwardlidow@upperlevelmusic.com";
var MAX_TEXT = 16000;

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var expected = PropertiesService.getScriptProperties().getProperty("SECRET");
    if (expected && data.secret !== expected) return out({ ok: false, error: "unauthorised" });

    var subject = String(data.subject || "Website message").replace(/[\r\n]+/g, " ").slice(0, 200);
    var text = String(data.text || "").slice(0, MAX_TEXT);
    if (!text) return out({ ok: false, error: "empty" });

    if (MailApp.getRemainingDailyQuota() < 1) return out({ ok: false, error: "quota" });

    var options = {};
    if (data.email && /^\S+@\S+\.\S+$/.test(data.email)) options.replyTo = data.email;
    MailApp.sendEmail(TO, subject, text, options);
    return out({ ok: true });
  } catch (err) {
    return out({ ok: false, error: "exception" });
  }
}

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
