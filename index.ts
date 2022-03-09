import express, { Request, Response, NextFunction } from "express";
import { initialize } from "express-openapi";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 検証用
app.use(
	(
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) => {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Methods", "*");
		res.header("Access-Control-Allow-Headers", "*");
		next();
	}
);

app.listen(3000, () => {
	console.log("Start on port 3000");
});

app.get("/user_express", (req: Request, res: Response) => {
	res.send({
		name: "hatano"
	});
});

initialize({
	app: app,
	apiDoc: path.resolve(__dirname, "openapi.json"),
	validateApiDoc: true,
	paths: "./paths",
	routesGlob: "**/*.{ts,js}",
	routesIndexFileRegExp: /(?:index)?\.[tj]s$/,
	operations: {
		getUser: [
			function (req: Request, res: Response, next: NextFunction) {
				// ミドルウェア
				next();
			},
			function (req: Request, res: Response) {
				const response = {
					name: "hatano"
				};
				res.status(200).send(response);
			}
		],
		getUserWithParameter: function (req: Request, res: Response) {
			const response = {
				name: "hatano"
			};
			res.status(200).send(response);
		},
		getUserValidationResult: function (
			req: Request,
			res: Response & { validateResponse: any }
		) {
			const response = {
				name: 200
			};
			const validationError = res.validateResponse(200, response);
			if (validationError) {
				throw validationError;
			}
			res.status(200).send(response);
		}
	},
	errorMiddleware: (
		err,
		req: Request,
		res: Response,
		_next: NextFunction
	) => {
		res.status(err.status || 500).json(err);
	}
});
