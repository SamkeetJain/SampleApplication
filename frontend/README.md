## Sample React Application

### How to run locally (without docker)?
1. Run `yarn install`
2. Run `yarn start`

### How to import OpenAPI types from backend?
1. Run `openapi -i http://localhost:8000/api/schema -o src/services/openapi`
2. Run `tsc`

### Facing CORS issue in local?
1. Add following code in `package.json`
```json
  "proxy": "http://localhost:8000"
```