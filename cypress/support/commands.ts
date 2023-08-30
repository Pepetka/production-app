import * as commandsCommon from './commands/common';
import * as loginCommon from './commands/login';
import * as profileCommon from './commands/profile';
import * as articleCommon from './commands/article';
import * as commentCommon from './commands/comment';
import * as ratingCommon from './commands/rating';

Cypress.Commands.addAll(commandsCommon);
Cypress.Commands.addAll(loginCommon);
Cypress.Commands.addAll(profileCommon);
Cypress.Commands.addAll(articleCommon);
Cypress.Commands.addAll(commentCommon);
Cypress.Commands.addAll(ratingCommon);

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
Cypress.on('uncaught:exception', (err) => {
	if (resizeObserverLoopErrRe.test(err.message)) {
		return false;
	}
});
