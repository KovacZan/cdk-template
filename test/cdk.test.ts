import { CdkStack } from "../lib/cdk-stack";
import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { test } from "vitest";

test("Rest API Created", () => {
	const app = new cdk.App();
	// WHEN
	const stack = new CdkStack(app, "MyTestStack");
	// THEN
	const template = Template.fromStack(stack);
	template.hasResourceProperties("AWS::ApiGateway::RestApi", {
		Name: "RestAPI",
	});
});
