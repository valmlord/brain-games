install: install-deps publish

install-deps:
	npm ci

publish: 
	npm publish --dry-run

lint:
	npx eslint .

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js
