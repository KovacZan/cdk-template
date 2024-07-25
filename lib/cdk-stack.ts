import { HelloConstruct } from "./lambdas/hello/HelloConstruct";
import { TestCronConstruct } from "./lambdas/test-cron/TestCronConstruct";
import * as cdk from "aws-cdk-lib";
import { Cors, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";

export class CdkStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		const api = new RestApi(this, "RestAPI", {
			restApiName: "RestAPI",
			defaultCorsPreflightOptions: {
				allowOrigins: Cors.ALL_ORIGINS,
				allowMethods: Cors.ALL_METHODS,
			},
		});

		new HelloConstruct(this, "HelloConstruct", { api });

		new TestCronConstruct(this, "TestCronConstruct");
	}
}
