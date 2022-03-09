# example_express_openapi
express-openapiを試してみたリポジトリ

`docker-compose up -d`を実行することで、以下にアクセスできる

- http://localhost:3000/user_express
	- 素のexpressで実装したエンドポイント
- http://localhost:3000/user
	- express-openapiで実装したエンドポイント
- http://localhost:3000/user_with_parameter
	- パラメータ指定が必須のエンドポイント
- http://localhost:3000/user_with_validation_result
	- レスポンス項目がAPI定義と異なるエンドポイント
	- 必ずエラーになる。
- http://localhost:3000/user/3000
	- pathsオプションを利用して実装したエンドポイント
- http://localhost:3000/api-docs
	- OpenAPI定義の最終成果物
- http://localhost:8080/
	- Swagger UI