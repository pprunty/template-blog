# Makefile for my-nextjs-app

# Variables
NODE_ENV=production

# Default target
.PHONY: all
all: dev

# Development server
.PHONY: dev
dev:
	npm run dev

# Build the project
.PHONY: build
build:
	NODE_ENV=$(NODE_ENV) npm run build

# Start the production server
.PHONY: start
start:
	NODE_ENV=$(NODE_ENV) npm run start

# Lint the project
.PHONY: lint
lint:
	npm run lint

# Clean the build artifacts
.PHONY: clean
clean:
	rm -rf .next

# Install dependencies
.PHONY: install
install:
	npm install

# Generate Lighthouse badges
.PHONY: lighthouse
lighthouse:
	$(eval URL ?= https://blog-v2-template.vercel.app/)
	lighthouse-badges --url $(URL) -o test_results

# Help
.PHONY: help
help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  dev       Start the development server"
	@echo "  build     Build the project for production"
	@echo "  start     Start the production server"
	@echo "  lint      Lint the project"
	@echo "  clean     Remove build artifacts"
	@echo "  install   Install dependencies"
	@echo "  help      Show this help message"
	@echo "  lighthouse Generate Lighthouse badges (optional: URL=<custom_url>)"
