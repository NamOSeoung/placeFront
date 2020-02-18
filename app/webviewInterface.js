import {Page} from 'tns-core-modules/ui/page';
import {WebView, LoadEventData} from 'tns-core-modules//ui/web-view';
import {TextField} from 'tns-core-modules/ui/text-field';
import {alert} from 'tns-core-modules/ui/dialogs';
import {topmost} from 'tns-core-modules/ui/frame';
import { WebViewInterface } from 'nativescript-webview-interface';
var page = Page;
var oLangWebViewInterface = WebViewInterface;


export function pageLoaded(args){
    page = args.object;
}


export function navigatedTo(args){
    setupWebViewInterface(page);
}

/**
 * Clearing resource attached with webviewInterface on navigated from
 * this page to avoid memory leak.
 */
export function navigatedFrom(){
    oLangWebViewInterface.destroy();
}

function setupWebViewInterface(page){
    var webView = `<WebView>page.getViewById('webView')`;
        oLangWebViewInterface = new WebViewInterface(webView, '~/www/index.html');
        oLangWebViewInterface.call('aaa');
}

/**
 * Sends intial list of languages to webView, once it is loaded
 */
