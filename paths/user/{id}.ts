import { Operation } from "express-openapi";

export const GET: Operation = [
	(req, res, _next) => {
		res.status(200).json({
			id: req.params.id
		});
	}
];

GET.apiDoc = {
	summary: "ユーザーID API",
	description: "ユーザーIDを取得する関数",
	operationId: "getUserId",
	parameters: [
		{
			in: "path",
			name: "id",
			required: true,
			schema: { type: "integer" }
		}
	],
	responses: {
		200: {
			description: "取得に成功した場合",
			content: {
				"application/json": {
					schema: {
						type: "object",
						required: ["id"],
						properties: {
							id: {
								type: "integer"
							}
						}
					}
				}
			}
		}
	}
};
