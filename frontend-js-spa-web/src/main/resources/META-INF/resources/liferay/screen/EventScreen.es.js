'use strict';

import globals from 'senna/src/globals/globals';
import HtmlScreen from 'senna/src/screen/HtmlScreen';
import Utils from '../util/Utils.es';
import {enterDocument, exitDocument} from 'metal-dom';
import {CancellablePromise} from 'metal-promise/src/promise/Promise';

let lastLanguageId = themeDisplay.getLanguageId();

class EventScreen extends HtmlScreen {
	constructor() {
		super();

		this.cacheable = false;
		this.timeout = Liferay.SPA.app.timeout;
	}

	dispose() {
		super.dispose();

		Liferay.fire(
			'screenDispose',
			{
				app: Liferay.SPA.app,
				screen: this
			}
		);
	}

	activate() {
		super.activate();

		Liferay.fire(
			'screenActivate',
			{
				app: Liferay.SPA.app,
				screen: this
			}
		);
	}

	addCache(content) {
		super.addCache(content);

		this.cacheLastModified = (new Date()).getTime();
	}

	checkRedirectPath(redirectPath) {
		var app = Liferay.SPA.app;

		if (!globals.capturedFormElement && !app.findRoute(redirectPath)) {
			window.location.href = redirectPath;
		}
	}

	deactivate() {
		super.deactivate();

		Liferay.fire(
			'screenDeactivate',
			{
				app: Liferay.SPA.app,
				screen: this
			}
		);
	}

	beforeScreenFlip() {
		Liferay.fire(
			'beforeScreenFlip',
			{
				app: Liferay.SPA.app,
				screen: this
			}
		);
	}

	clearPermanentStyles(surfaces) {
		const permanentStylesInDoc = this.querySelectorAll_(HtmlScreen.selectors.stylesPermanent);
		permanentStylesInDoc.forEach((resource) => exitDocument(resource));
		HtmlScreen.permanentResourcesInDoc = {};
	}

	copyBodyAttributes() {
		const virtualBody = this.virtualDocument.querySelector('body');

		document.body.className = virtualBody.className;
		document.body.onload = virtualBody.onload;
	}

	evaluateScripts(surfaces) {
		return super.evaluateScripts(surfaces).then(() => {
			const languageId = themeDisplay.getLanguageId();

			if (languageId !== lastLanguageId) {
				lastLanguageId = languageId;
				this.clearPermanentStyles(surfaces);

				const request = this.getRequest();
				this.allocateVirtualDocumentForContent(request.responseText);
				return this.evaluateStyles(surfaces);
			}
		});
	}

	flip(surfaces) {
		this.copyBodyAttributes();

		return CancellablePromise.resolve(this.beforeScreenFlip())
			.then(super.flip(surfaces))
			.then(
				() => {
					this.runBodyOnLoad();

					Liferay.fire(
						'screenFlip',
						{
							app: Liferay.SPA.app,
							screen: this
						}
					);
				}
			);
	}

	getCache() {
		var app = Liferay.SPA.app;

		if (app.isCacheEnabled() && !app.isScreenCacheExpired(this)) {
			return super.getCache();
		}

		return null;
	}

	getCacheLastModified() {
		return this.cacheLastModified;
	}

	isValidResponseStatusCode(statusCode) {
		var validStatusCodes = Liferay.SPA.app.getValidStatusCodes();

		return (statusCode >= 200 && statusCode <= 500) || (validStatusCodes.indexOf(statusCode) > -1);
	}

	load(path) {
		return super.load(path)
			.then(
				(content) => {
					var redirectPath = this.beforeUpdateHistoryPath(path);

					this.checkRedirectPath(redirectPath);

					Liferay.fire(
						'screenLoad',
						{
							app: Liferay.SPA.app,
							content: content,
							screen: this
						}
					);

					return content;
				}
			);
	}

	runBodyOnLoad() {
		var onLoad = document.body.onload;

		if (onLoad) {
			onLoad();
		}
	}
}

export default EventScreen;