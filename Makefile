up:
	docker compose up --detach

down:
	docker compose down --remove-orphans --volumes

app-install:
	docker compose run --rm app-node-cli pnpm install

app-lint:
	docker compose run --rm app-node-cli pnpm run lint

app-fix:
	docker compose run --rm app-node-cli pnpm run fix

app-pretty:
	docker compose run --rm app-node-cli pnpm run pretty
