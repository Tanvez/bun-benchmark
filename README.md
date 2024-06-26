## Services
- Prometheus: localhost:9090 
- Prometheus log exporter(express): localhost:9092
- Grafana: localhost:3000
- Postgres: localhost:5432
- Websocket: localhost:4080
- Express/Elysia: localhost:4000

## How to test http and websocket load test
1. Update Dockerfile with the chosen runtime and command. Create `.env` file and copy values from `.env.example`.
2. docker-compose build && docker-compose up
3. open localhost grafana on browser (localhost:3000) with username: admin, password: admin1
   - prepare graphs for metrics `nodejs_memory_usage_in_bytes` and `nodejs_cpu_usage_in_percentage`
4. [install k6](https://k6.io/docs/get-started/installation/) and run load test
   - k6 run src/http-request-load-test.js or 
   - k6 run src/websocket-load-test.js
5. View metrics on grafana
6. docker-compose down

## How to test file read/write
1. [Install Hyperfine](https://github.com/sharkdp/hyperfine)
2. run
   - hyperfine 'node src/read-write-node.js' 'bun run src/read-write-node.js'
   - hyperfine 'bun run src/read-write-node.js' 'bun run src/read-write-bun.js'
   - hyperfine 'node src/read-write-node.js' 'bun run src/read-write-bun.js'
   - hyperfine 'node run src/read-write-node.js' 'deno run -A src/read-write-deno.js'
   - hyperfine 'bun run src/read-write-bun.js' 'deno run -A src/read-write-deno.js'
