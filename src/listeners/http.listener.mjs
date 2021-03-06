import { httpListener } from '@marblejs/http';
import { logger$ } from '@marblejs/middleware-logger';
import { bodyParser$ } from '@marblejs/middleware-body';
import { api$ } from '../effects/api.effects.mjs';

const middlewares = [
	logger$(),
	bodyParser$(),
];

const effects = [
	api$,
];

export const listener = httpListener({
	middlewares,
	effects,
});
