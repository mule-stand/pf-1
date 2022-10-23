up:
	docker compose up --detach

down:
	docker compose down --remove-orphans --volumes

restart: down up

frontend-install:
	docker compose run --rm frontend-node-cli pnpm install

frontend-lint:
	docker compose run --rm frontend-node-cli pnpm run lint

frontend-fix:
	docker compose run --rm frontend-node-cli pnpm run fix

frontend-pretty:
	docker compose run --rm frontend-node-cli pnpm run pretty
