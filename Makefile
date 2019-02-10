include yarn-variables.mk

export .PHONY: install start develop build lint prettier test coverage gzip

install:
	@yarn install --frozen-lockfile

start: ## start application in development mode
	@yarn start

develop:
	@yarn develop

build:
	@yarn build

lint:
	@yarn lint

prettier:
	@yarn prettier --trailing-comma=es5 --single-quote=true --semi=true --print-width=120 --arrow-parens=always --write \"{./,./mock-api/**,./src/**}/*.{d.ts,js}\"
	@yarn prettier --write \"{./,./mock-api/**,./src/**}/*.{md,scss,json,yml}\"

test:
	@yarn test

coverage:
	@yarn test -- --coverage

gzip:
	find build -type f -exec test ! -e {}.gz \; -print0 | xargs -r -0 gzip -k -9
