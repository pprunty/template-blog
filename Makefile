# Makefile for Next.js 14 App Router Project

# Define common variables
APP_NAME = nextjs-app
DOCKER_IMAGE = $(APP_NAME):latest
NODE_ENV = production
NEXT_PORT = 3000

# Define Node.js commands
NPM = npm
NEXT = npx next
PM2 = pm2

# Default target is help
.PHONY: help
help:
	@echo "Makefile for Next.js 14 App Router Project"
	@echo "Available targets:"
	@echo "  make install          Install project dependencies"
	@echo "  make dev              Run the development server"
	@echo "  make build            Build the project for production"
	@echo "  make start            Start the production server"
	@echo "  make lint             Run the linter"
	@echo "  make test             Run tests"
	@echo "  make docker-build     Build a Docker image"
	@echo "  make docker-run       Run the app in Docker"
	@echo "  make clean            Remove generated files"
	@echo "  make stop             Stop the production server"
	@echo "  make restart          Restart the production server"

# Install dependencies
.PHONY: install
install:
	$(NPM) install

# Run development server
.PHONY: dev
dev:
	$(NEXT) dev

# Build the app for production
.PHONY: build
build:
	$(NEXT) build

# Run the app in production mode
.PHONY: start
start:
	$(NEXT) start -p $(NEXT_PORT)

# Lint the code
.PHONY: lint
lint:
	$(NPM) run lint:fix

# Run tests
.PHONY: test
test:
	$(NPM) run test

# Build Docker image
.PHONY: docker-build
docker-build:
	docker build -t $(DOCKER_IMAGE) .

# Run the app in Docker
.PHONY: docker-run
docker-run:
	docker run -p $(NEXT_PORT):$(NEXT_PORT) $(DOCKER_IMAGE)

# Clean generated files
.PHONY: clean
clean:
	rm -rf .next node_modules

# Stop production server (if using PM2)
.PHONY: stop
stop:
	$(PM2) stop $(APP_NAME)

# Restart production server (if using PM2)
.PHONY: restart
restart:
	$(PM2) restart $(APP_NAME)
