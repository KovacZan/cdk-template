import * as Cdk from "../lib/cdk-stack";
import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";

// example test. To run these tests, uncomment this file along with the
// example resource in lib/cdk-stack.ts
test("Rest API Created", () => {
	const app = new cdk.App();
	// WHEN
	const stack = new Cdk.CdkStack(app, "MyTestStack");
	// THEN
	const template = Template.fromStack(stack);
	template.hasResourceProperties("AWS::ApiGateway::RestApi", {
		Name: "RestAPI",
	});
});
